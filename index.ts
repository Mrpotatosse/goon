import { GoonApp } from "~/src/app";

const app = new GoonApp({
	p2p: {
		listeningAddresses: ["/ip4/0.0.0.0/tcp/4567"],
		topics: ["chat", "world", "market"],
		peers: process.argv[2] ? [process.argv[2]] : [],
	},
	orm: {
		url: process.env.DATABASE_URL,
		authToken: process.env.DATABASE_AUTH_TOKEN,
	},
});

app.addListener("start", (app) => {
	for (const addr of app.node.getMultiaddrs()) {
		console.log("node:", addr.toString());
	}
});

app.addListener("subscribe", (app, topic) => {
	console.log("topic:", topic);
});

app.addListener("ping", (app, address, latency) => {
	console.log("pinged:", address.toString(), latency);
});

app.addListener("stop", (app) => {
	console.log("app stoped");
});

await app.start();

app.node.services.pubsub.addEventListener("message", (e) => {
	console.log("data:", e.detail.topic, e.detail.data.toString());
});

app.node.services.pubsub.addEventListener("subscription-change", async (e) => {
	await app.node.services.pubsub.publish(
		"chat",
		Buffer.from(`hi peer ${e.detail.peerId} from ${app.node.peerId}`),
	);
});