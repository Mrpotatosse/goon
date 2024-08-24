import boxen from "boxen";
import { program } from "commander";
import { Handler } from "~/src/handler";
import { PeerApp } from "~/src/peer";
import { GoonProtocol, Protocol } from "~/src/protocol";

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
		
		const handler = new Handler({
			topics: options.topics,
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
			handler.handle(e.detail);
		});

		app.node.services.pubsub.addEventListener(
			"subscription-change",
			async (e) => {
				await app.node.services.pubsub.publish(
					"market",
					Protocol.ProtocolMessage.encode({
						name: "ChatMessage",
						data: GoonProtocol.ChatMessage.encode({
							from: "me",
							content: "hello world",
							timestamp: "now",
						}).finish(),
					}).finish(),
				);
			},
		);

		handler.addListener("ChatMessage", (e) => {
			console.log(e.detail.message.from, e.detail.message.content);
		});
	})
	.parse();
