import boxen from "boxen";
import { program } from "commander";
import { PeerApp } from "~/src/peer";

program
	.requiredOption("--port <port>", "listening port")
	.requiredOption("--topics <topics...>", "listening topics")
	.option("--peers <peers...>", "peers multiaddress")
	.option("--passphrase <passphrase>", "node passphrase for keyPair generation")
	.action(async (options) => {
		const app = new PeerApp({
			listeningAddresses: [`/ip4/0.0.0.0/tcp/${options.port}`],
			topics: options.topics,
			peers: options.peers,
			passphrase: options.passphrase,
		});

		app.addListener("start", (e) => {
			const nodes = e.detail.app.node
				.getMultiaddrs()
				.map((node) => `node: ${node}`)
				.join("\n");

			console.log(
				boxen(nodes, {
					title: "nodes",
					titleAlignment: "center",
					padding: 1,
					margin: 1,
					borderStyle: "double",
				}),
			);
		});

		await app.start();

		app.node.services.pubsub.addEventListener("message", (e) => {
			console.log("data:", e.detail.topic, e.detail.data.toString());
		});

		app.node.services.pubsub.addEventListener(
			"subscription-change",
			async (e) => {
				await app.node.services.pubsub.publish(
					"chat",
					Buffer.from(`hi peer ${e.detail.peerId} from ${app.node.peerId}`),
				);
			},
		);
	})
	.parse();
