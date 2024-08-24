import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./src/database/schema.ts",
	out: "./drizzle",
	dialect: "sqlite",
	dbCredentials: {
		url: process.env.DATABASE_URL ?? "file:./out/db.sqlite",
		authToken: process.env.DATABASE_AUTH_TOKEN ?? "admin",
	},
});