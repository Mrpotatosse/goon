import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace ChatProtocol. */
export namespace ChatProtocol {

    /** Properties of a ChatMessage. */
    interface IChatMessage {

        /** ChatMessage name */
        name?: (string|null);
    }

    /** Represents a ChatMessage. */
    class ChatMessage implements IChatMessage {

        /**
         * Constructs a new ChatMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: ChatProtocol.IChatMessage);

        /** ChatMessage name. */
        public name: string;

        /**
         * Creates a new ChatMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatMessage instance
         */
        public static create(properties?: ChatProtocol.IChatMessage): ChatProtocol.ChatMessage;

        /**
         * Encodes the specified ChatMessage message. Does not implicitly {@link ChatProtocol.ChatMessage.verify|verify} messages.
         * @param message ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ChatProtocol.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ChatProtocol.ChatMessage.verify|verify} messages.
         * @param message ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ChatProtocol.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatProtocol.ChatMessage;

        /**
         * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatProtocol.ChatMessage;

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
        public static fromObject(object: { [k: string]: any }): ChatProtocol.ChatMessage;

        /**
         * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
         * @param message ChatMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ChatProtocol.ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
}

/** Namespace MarketProtocol. */
export namespace MarketProtocol {

    /** Properties of a SellMessage. */
    interface ISellMessage {

        /** SellMessage name */
        name?: (string|null);
    }

    /** Represents a SellMessage. */
    class SellMessage implements ISellMessage {

        /**
         * Constructs a new SellMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: MarketProtocol.ISellMessage);

        /** SellMessage name. */
        public name: string;

        /**
         * Creates a new SellMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SellMessage instance
         */
        public static create(properties?: MarketProtocol.ISellMessage): MarketProtocol.SellMessage;

        /**
         * Encodes the specified SellMessage message. Does not implicitly {@link MarketProtocol.SellMessage.verify|verify} messages.
         * @param message SellMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MarketProtocol.ISellMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SellMessage message, length delimited. Does not implicitly {@link MarketProtocol.SellMessage.verify|verify} messages.
         * @param message SellMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MarketProtocol.ISellMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SellMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SellMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MarketProtocol.SellMessage;

        /**
         * Decodes a SellMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SellMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MarketProtocol.SellMessage;

        /**
         * Verifies a SellMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SellMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SellMessage
         */
        public static fromObject(object: { [k: string]: any }): MarketProtocol.SellMessage;

        /**
         * Creates a plain object from a SellMessage message. Also converts values to other types if specified.
         * @param message SellMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MarketProtocol.SellMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SellMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SellMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BuyMessage. */
    interface IBuyMessage {

        /** BuyMessage name */
        name?: (string|null);
    }

    /** Represents a BuyMessage. */
    class BuyMessage implements IBuyMessage {

        /**
         * Constructs a new BuyMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: MarketProtocol.IBuyMessage);

        /** BuyMessage name. */
        public name: string;

        /**
         * Creates a new BuyMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyMessage instance
         */
        public static create(properties?: MarketProtocol.IBuyMessage): MarketProtocol.BuyMessage;

        /**
         * Encodes the specified BuyMessage message. Does not implicitly {@link MarketProtocol.BuyMessage.verify|verify} messages.
         * @param message BuyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MarketProtocol.IBuyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BuyMessage message, length delimited. Does not implicitly {@link MarketProtocol.BuyMessage.verify|verify} messages.
         * @param message BuyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MarketProtocol.IBuyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BuyMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MarketProtocol.BuyMessage;

        /**
         * Decodes a BuyMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MarketProtocol.BuyMessage;

        /**
         * Verifies a BuyMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BuyMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuyMessage
         */
        public static fromObject(object: { [k: string]: any }): MarketProtocol.BuyMessage;

        /**
         * Creates a plain object from a BuyMessage message. Also converts values to other types if specified.
         * @param message BuyMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MarketProtocol.BuyMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuyMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BuyMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace WorldProtocol. */
export namespace WorldProtocol {

    /** Properties of a HelloWorldMessage. */
    interface IHelloWorldMessage {

        /** HelloWorldMessage name */
        name?: (string|null);
    }

    /** Represents a HelloWorldMessage. */
    class HelloWorldMessage implements IHelloWorldMessage {

        /**
         * Constructs a new HelloWorldMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: WorldProtocol.IHelloWorldMessage);

        /** HelloWorldMessage name. */
        public name: string;

        /**
         * Creates a new HelloWorldMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HelloWorldMessage instance
         */
        public static create(properties?: WorldProtocol.IHelloWorldMessage): WorldProtocol.HelloWorldMessage;

        /**
         * Encodes the specified HelloWorldMessage message. Does not implicitly {@link WorldProtocol.HelloWorldMessage.verify|verify} messages.
         * @param message HelloWorldMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WorldProtocol.IHelloWorldMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HelloWorldMessage message, length delimited. Does not implicitly {@link WorldProtocol.HelloWorldMessage.verify|verify} messages.
         * @param message HelloWorldMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WorldProtocol.IHelloWorldMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HelloWorldMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HelloWorldMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WorldProtocol.HelloWorldMessage;

        /**
         * Decodes a HelloWorldMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HelloWorldMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WorldProtocol.HelloWorldMessage;

        /**
         * Verifies a HelloWorldMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HelloWorldMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HelloWorldMessage
         */
        public static fromObject(object: { [k: string]: any }): WorldProtocol.HelloWorldMessage;

        /**
         * Creates a plain object from a HelloWorldMessage message. Also converts values to other types if specified.
         * @param message HelloWorldMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WorldProtocol.HelloWorldMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HelloWorldMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HelloWorldMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
