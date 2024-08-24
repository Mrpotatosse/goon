import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("users", {
	id: integer("id").primaryKey(),
	name: text("name"),
});