import { type GossipsubEvents, gossipsub } from "@chainsafe/libp2p-gossipsub";
import { noise } from "@chainsafe/libp2p-noise";
import { type Identify, identify } from "@libp2p/identify";
import type { PubSub } from "@libp2p/interface";
import { mplex } from "@libp2p/mplex";
import { type PingService, ping } from "@libp2p/ping";
import { tcp } from "@libp2p/tcp";
import {
	type Multiaddr,
	type MultiaddrInput,
	multiaddr,
} from "@multiformats/multiaddr";
import { type Libp2p, createLibp2p } from "libp2p";
import EventEmitter from "node:events";
import { generateKeys } from "~/src/peer/keys";
import { generatePeerId } from "~/src/peer/peerId";

export type PeerAppOptions = Partial<{
	listeningAddresses: Array<string>;
	topics: Array<string>;
	peers: Array<MultiaddrInput>;
	passphrase: string;
}>;

export type PeerAppP2P = Libp2p<{
	ping: PingService;
	pubsub: PubSub<GossipsubEvents>;
	identify: Identify;
}>;

export interface PeerAppEvents {
	start: [event: CustomEvent<{ app: PeerApp }>];
	stop: [event: CustomEvent<{ app: PeerApp }>];
	subscribe: [event: CustomEvent<{ app: PeerApp; topic: string }>];
	ping: [
		event: CustomEvent<{ app: PeerApp; address: Multiaddr; latency: number }>,
	];
}

export class PeerApp extends EventEmitter<PeerAppEvents> {
	private readonly _options: PeerAppOptions;
	private _p2p?: PeerAppP2P;

	constructor(options?: PeerAppOptions) {
		super();

		this._options = {
			listeningAddresses: options?.listeningAddresses ?? [
				"/ip4/127.0.0.1/tcp/0",
			],
			topics: options?.topics ?? ["default"],
			peers: options?.peers ?? [],
			passphrase: options?.passphrase,
		};
	}

	public get node(): PeerAppP2P {
		if (!this._p2p) throw new Error("node_not_found");
		return this._p2p;
	}

	async start(): Promise<PeerApp> {
		const peerId = await generatePeerId({
			keys: await generateKeys({
				passphrase: this._options.passphrase,
			}),
		});

		this._p2p = await createLibp2p({
			addresses: {
				listen: this._options.listeningAddresses,
			},
			transports: [tcp()],
			connectionEncryption: [noise()],
			streamMuxers: [mplex()],
			services: {
				ping: ping({
					protocolPrefix: "ipfs", // default
				}),
				pubsub: gossipsub({
					enabled: true,
					allowPublishToZeroTopicPeers: true,
				}),
				identify: identify(),
			},
			peerId,
		});

		await this.node.start();

		const _stop = async () => await this.stop();

		process.on("SIGTERM", _stop);
		process.on("SIGINT", _stop);

		for (const topic of this._options.topics ?? []) {
			this.node.services.pubsub.subscribe(topic);
			this.emit(
				"subscribe",
				new CustomEvent("subscribe", {
					detail: {
						app: this,
						topic,
					},
				}),
			);
		}

		for (const peer of this._options.peers ?? []) {
			const address = multiaddr(peer);
			const latency = await this.node.services.ping.ping(address);
			this.emit(
				"ping",
				new CustomEvent("ping", {
					detail: {
						app: this,
						address,
						latency,
					},
				}),
			);
		}

		this.emit(
			"start",
			new CustomEvent("start", {
				detail: {
					app: this,
				},
			}),
		);
		return this;
	}

	async stop(): Promise<PeerApp> {
		await this.node.stop();
		this.emit(
			"stop",
			new CustomEvent("stop", {
				detail: {
					app: this,
				},
			}),
		);

		return this;
	}
}