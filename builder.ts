import data from "~/package.json";

await Bun.build({
	entrypoints: [data.module],
	outdir: "./out",
	target: "node",
	external: Object.keys(data.dependencies),
});