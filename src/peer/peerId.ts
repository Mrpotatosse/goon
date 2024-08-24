import type {
	Ed25519PeerId,
	PrivateKey,
	RSAPeerId,
	Secp256k1PeerId,
} from "@libp2p/interface";
import { peerIdFromKeys } from "@libp2p/peer-id";
import type { KEYPAIR_TYPE } from "~/src/peer/keys";

export async function generatePeerId(
	options: Partial<{
		keys: PrivateKey<typeof KEYPAIR_TYPE>;
	}>,
): Promise<Ed25519PeerId | Secp256k1PeerId | RSAPeerId | undefined> {
	return (
		options.keys &&
		peerIdFromKeys(options.keys.public.bytes, options.keys.bytes)
	);
}