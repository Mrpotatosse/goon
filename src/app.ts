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
import { ORMClient, type ORMClientOptions } from "~/src/database/orm";

export type GoonAppOptions = {
	p2p: Partial<{
		listeningAddresses: Array<string>;
		topics: Array<string>;
		peers: Array<MultiaddrInput>;
	}>;
	orm: ORMClientOptions;
};

export type GoonAppP2P = Libp2p<{
	ping: PingService;
	pubsub: PubSub<GossipsubEvents>;
	identify: Identify;
}>;
export interface GoonAppEvents {
	start: [app: GoonApp];
	stop: [app: GoonApp];
	subscribe: [app: GoonApp, topic: string];
	ping: [app: GoonApp, address: Multiaddr, latency: number];
}

export class GoonApp extends EventEmitter<GoonAppEvents> {
	private readonly _options: GoonAppOptions;
	private readonly _orm: ORMClient;
	private _p2p?: GoonAppP2P;

	constructor(options?: GoonAppOptions) {
		super();

		this._options = {
			p2p: {
				listeningAddresses: options?.p2p?.listeningAddresses ?? [
					"/ip4/127.0.0.1/tcp/0",
				],
				topics: options?.p2p.topics ?? ["default"],
				peers: options?.p2p.peers ?? [],
			},
			orm: options?.orm ?? {},
		};

		this._orm = new ORMClient(options?.orm);
	}

	public get node(): GoonAppP2P {
		if (!this._p2p) throw new Error("node_not_found");
		return this._p2p;
	}

	async start(): Promise<GoonApp> {
		this._p2p = await createLibp2p({
			addresses: {
				listen: this._options.p2p.listeningAddresses,
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
					//emitSelf: true,
					allowPublishToZeroTopicPeers: true,
				}),
				identify: identify(),
			},
		});

		await this.node.start();

		const _stop = async () => await this.stop();

		process.on("SIGTERM", _stop);
		process.on("SIGINT", _stop);

		for (const topic of this._options.p2p.topics ?? []) {
			this.node.services.pubsub.subscribe(topic);
			this.emit("subscribe", this, topic);
		}

		for (const peer of this._options.p2p.peers ?? []) {
			const ma = multiaddr(peer);
			const latency = await this.node.services.ping.ping(ma);
			this.emit("ping", this, ma, latency);
		}

		this.emit("start", this);
		return this;
	}

	async stop(): Promise<GoonApp> {
		await this.node.stop();
		this.emit("stop", this);

		return this;
	}
}