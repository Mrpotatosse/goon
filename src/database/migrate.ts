import { migrate } from "drizzle-orm/libsql/migrator";
import { ORMClient } from "~/src/database/orm";

const orm = new ORMClient({
	url: process.env.DATABASE_URL,
	authToken: process.env.DATABASE_AUTH_TOKEN,
});

migrate(orm.sqlite, { migrationsFolder: "./drizzle" });

