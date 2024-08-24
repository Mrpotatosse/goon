import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace GoonProtocol. */
export namespace GoonProtocol {

    /** Properties of a ChatMessage. */
    interface IChatMessage {

        /** ChatMessage from */
        from?: (string|null);

        /** ChatMessage content */
        content?: (string|null);

        /** ChatMessage timestamp */
        timestamp?: (string|null);
    }

    /** Represents a ChatMessage. */
    class ChatMessage implements IChatMessage {

        /**
         * Constructs a new ChatMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: GoonProtocol.IChatMessage);

        /** ChatMessage from. */
        public from: string;

        /** ChatMessage content. */
        public content: string;

        /** ChatMessage timestamp. */
        public timestamp: string;

        /**
         * Creates a new ChatMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatMessage instance
         */
        public static create(properties?: GoonProtocol.IChatMessage): GoonProtocol.ChatMessage;

        /**
         * Encodes the specified ChatMessage message. Does not implicitly {@link GoonProtocol.ChatMessage.verify|verify} messages.
         * @param message ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GoonProtocol.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link GoonProtocol.ChatMessage.verify|verify} messages.
         * @param message ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GoonProtocol.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GoonProtocol.ChatMessage;

        /**
         * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GoonProtocol.ChatMessage;

        /**
         * Verifies a ChatMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatMessage
         */
        public static fromObject(object: { [k: string]: any }): GoonProtocol.ChatMessage;

        /**
         * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
         * @param message ChatMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GoonProtocol.ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChatMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HelloMessage. */
    interface IHelloMessage {

        /** HelloMessage name */
        name?: (string|null);
    }

    /** Represents a HelloMessage. */
    class HelloMessage implements IHelloMessage {

        /**
         * Constructs a new HelloMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: GoonProtocol.IHelloMessage);

        /** HelloMessage name. */
        public name: string;

        /**
         * Creates a new HelloMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloMessage instance
         */
        public static create(properties?: GoonProtocol.IHelloMessage): GoonProtocol.HelloMessage;

        /**
         * Encodes the specified HelloMessage message. Does not implicitly {@link GoonProtocol.HelloMessage.verify|verify} messages.
         * @param message HelloMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GoonProtocol.IHelloMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HelloMessage message, length delimited. Does not implicitly {@link GoonProtocol.HelloMessage.verify|verify} messages.
         * @param message HelloMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GoonProtocol.IHelloMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GoonProtocol.HelloMessage;

        /**
         * Decodes a HelloMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GoonProtocol.HelloMessage;

        /**
         * Verifies a HelloMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HelloMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HelloMessage
         */
        public static fromObject(object: { [k: string]: any }): GoonProtocol.HelloMessage;

        /**
         * Creates a plain object from a HelloMessage message. Also converts values to other types if specified.
         * @param message HelloMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GoonProtocol.HelloMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HelloMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HelloMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace Protocol. */
export namespace Protocol {

    /** Properties of a ProtocolMessage. */
    interface IProtocolMessage {

        /** ProtocolMessage name */
        name?: (string|null);

        /** ProtocolMessage data */
        data?: (Uint8Array|null);
    }

    /** Represents a ProtocolMessage. */
    class ProtocolMessage implements IProtocolMessage {

        /**
         * Constructs a new ProtocolMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IProtocolMessage);

        /** ProtocolMessage name. */
        public name: string;

        /** ProtocolMessage data. */
        public data: Uint8Array;

        /**
         * Creates a new ProtocolMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProtocolMessage instance
         */
        public static create(properties?: Protocol.IProtocolMessage): Protocol.ProtocolMessage;

        /**
         * Encodes the specified ProtocolMessage message. Does not implicitly {@link Protocol.ProtocolMessage.verify|verify} messages.
         * @param message ProtocolMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IProtocolMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProtocolMessage message, length delimited. Does not implicitly {@link Protocol.ProtocolMessage.verify|verify} messages.
         * @param message ProtocolMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IProtocolMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProtocolMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProtocolMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Protocol.ProtocolMessage;

        /**
         * Decodes a ProtocolMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProtocolMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Protocol.ProtocolMessage;

        /**
         * Verifies a ProtocolMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProtocolMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProtocolMessage
         */
        public static fromObject(object: { [k: string]: any }): Protocol.ProtocolMessage;

        /**
         * Creates a plain object from a ProtocolMessage message. Also converts values to other types if specified.
         * @param message ProtocolMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Protocol.ProtocolMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProtocolMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProtocolMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
