import type { Message } from "@libp2p/interface";
import EventEmitter from "node:events";
import { GoonProtocol, Protocol } from "~/src/protocol";

const FullProtocol = { ...GoonProtocol };
export type FullProtocolMessagesType = keyof typeof FullProtocol;
export function isProtocolMessage(
	name: string,
): name is keyof typeof FullProtocol {
	return name in FullProtocol;
}

export type HandlerEvents = {
	[K in FullProtocolMessagesType]: [
		e: CustomEvent<{
			message: ReturnType<(typeof FullProtocol)[K]["decode"]>;
		}>,
	];
};

export type HandlerOptions = Partial<{
	topics: Array<string>;
}>;

export class Handler extends EventEmitter<HandlerEvents> {
	private readonly _topics: Set<string>;

	constructor(options: HandlerOptions) {
		super();

		this._topics = new Set(options.topics ?? []);
	}

	handle(options: Message): void {
		if (!this._topics.has(options.topic)) return;
		const protocol = Protocol.ProtocolMessage.decode(options.data);
		const name = protocol.name;

		if (isProtocolMessage(name)) {
			const message = FullProtocol[name].decode(protocol.data);

			this.emit(
				name,
				new CustomEvent(name, {
					detail: {
						message: message as never, // ?? uwu this is bad uwu ='(
					},
				}),
			);
		}
	}
}