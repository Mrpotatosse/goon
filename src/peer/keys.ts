import { generateKeyPair, generateKeyPairFromSeed } from "@libp2p/crypto/keys";
import type { PrivateKey } from "@libp2p/interface";
import { createHash } from "node:crypto";

export const KEYPAIR_TYPE = "Ed25519" as const;
export const SHA256 = "sha256" as const;

async function generateKeysFromPassphrase(
	passphrase: string,
): Promise<PrivateKey<typeof KEYPAIR_TYPE>> {
	return generateKeyPairFromSeed(
		KEYPAIR_TYPE,
		createHash(SHA256).update(passphrase).digest(),
	);
}

async function generateKeysFromNothing(): Promise<
	PrivateKey<typeof KEYPAIR_TYPE>
> {
	return generateKeyPair(KEYPAIR_TYPE);
}

export async function generateKeys(
	options?: Partial<{
		passphrase: string;
	}>,
) {
	if (options?.passphrase)
		return generateKeysFromPassphrase(options.passphrase);
	return generateKeysFromNothing();
}