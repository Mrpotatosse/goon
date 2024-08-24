import { type Client, createClient } from "@libsql/client";
import { type LibSQLDatabase, drizzle } from "drizzle-orm/libsql";

export type ORMClientOptions = Partial<{
	url: string;
	authToken: string;
}>;

export class ORMClient {
	private readonly _sqliteClient: Client;
	private readonly _database: LibSQLDatabase<Record<string, never>>;

	constructor(options?: ORMClientOptions) {
		this._sqliteClient = createClient({
			url: options?.url ?? "file:./out/db.sqlite",
			authToken: options?.authToken ?? "admin",
		});

		this._database = drizzle(this._sqliteClient);
	}

	public get sqlite(): LibSQLDatabase<Record<string, never>> {
		return this._database;
	}
}