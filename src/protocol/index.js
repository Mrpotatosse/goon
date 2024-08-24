/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ChatProtocol = (function() {

    /**
     * Namespace ChatProtocol.
     * @exports ChatProtocol
     * @namespace
     */
    var ChatProtocol = {};

    ChatProtocol.ChatMessage = (function() {

        /**
         * Properties of a ChatMessage.
         * @memberof ChatProtocol
         * @interface IChatMessage
         * @property {string|null} [name] ChatMessage name
         */

        /**
         * Constructs a new ChatMessage.
         * @memberof ChatProtocol
         * @classdesc Represents a ChatMessage.
         * @implements IChatMessage
         * @constructor
         * @param {ChatProtocol.IChatMessage=} [properties] Properties to set
         */
        function ChatMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatMessage name.
         * @member {string} name
         * @memberof ChatProtocol.ChatMessage
         * @instance
         */
        ChatMessage.prototype.name = "";

        /**
         * Creates a new ChatMessage instance using the specified properties.
         * @function create
         * @memberof ChatProtocol.ChatMessage
         * @static
         * @param {ChatProtocol.IChatMessage=} [properties] Properties to set
         * @returns {ChatProtocol.ChatMessage} ChatMessage instance
         */
        ChatMessage.create = function create(properties) {
            return new ChatMessage(properties);
        };

        /**
         * Encodes the specified ChatMessage message. Does not implicitly {@link ChatProtocol.ChatMessage.verify|verify} messages.
         * @function encode
         * @memberof ChatProtocol.ChatMessage
         * @static
         * @param {ChatProtocol.IChatMessage} message ChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ChatProtocol.ChatMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatProtocol.ChatMessage
         * @static
         * @param {ChatProtocol.IChatMessage} message ChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChatMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ChatProtocol.ChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatProtocol.ChatMessage} ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatProtocol.ChatMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatProtocol.ChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatProtocol.ChatMessage} ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatMessage message.
         * @function verify
         * @memberof ChatProtocol.ChatMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatProtocol.ChatMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatProtocol.ChatMessage} ChatMessage
         */
        ChatMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatProtocol.ChatMessage)
                return object;
            var message = new $root.ChatProtocol.ChatMessage();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatProtocol.ChatMessage
         * @static
         * @param {ChatProtocol.ChatMessage} message ChatMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this ChatMessage to JSON.
         * @function toJSON
         * @memberof ChatProtocol.ChatMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChatMessage
         * @function getTypeUrl
         * @memberof ChatProtocol.ChatMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChatMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatProtocol.ChatMessage";
        };

        return ChatMessage;
    })();

    return ChatProtocol;
})();

$root.MarketProtocol = (function() {

    /**
     * Namespace MarketProtocol.
     * @exports MarketProtocol
     * @namespace
     */
    var MarketProtocol = {};

    MarketProtocol.SellMessage = (function() {

        /**
         * Properties of a SellMessage.
         * @memberof MarketProtocol
         * @interface ISellMessage
         * @property {string|null} [name] SellMessage name
         */

        /**
         * Constructs a new SellMessage.
         * @memberof MarketProtocol
         * @classdesc Represents a SellMessage.
         * @implements ISellMessage
         * @constructor
         * @param {MarketProtocol.ISellMessage=} [properties] Properties to set
         */
        function SellMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SellMessage name.
         * @member {string} name
         * @memberof MarketProtocol.SellMessage
         * @instance
         */
        SellMessage.prototype.name = "";

        /**
         * Creates a new SellMessage instance using the specified properties.
         * @function create
         * @memberof MarketProtocol.SellMessage
         * @static
         * @param {MarketProtocol.ISellMessage=} [properties] Properties to set
         * @returns {MarketProtocol.SellMessage} SellMessage instance
         */
        SellMessage.create = function create(properties) {
            return new SellMessage(properties);
        };

        /**
         * Encodes the specified SellMessage message. Does not implicitly {@link MarketProtocol.SellMessage.verify|verify} messages.
         * @function encode
         * @memberof MarketProtocol.SellMessage
         * @static
         * @param {MarketProtocol.ISellMessage} message SellMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SellMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified SellMessage message, length delimited. Does not implicitly {@link MarketProtocol.SellMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MarketProtocol.SellMessage
         * @static
         * @param {MarketProtocol.ISellMessage} message SellMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SellMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SellMessage message from the specified reader or buffer.
         * @function decode
         * @memberof MarketProtocol.SellMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MarketProtocol.SellMessage} SellMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SellMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MarketProtocol.SellMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SellMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MarketProtocol.SellMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MarketProtocol.SellMessage} SellMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SellMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SellMessage message.
         * @function verify
         * @memberof MarketProtocol.SellMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SellMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a SellMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MarketProtocol.SellMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MarketProtocol.SellMessage} SellMessage
         */
        SellMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.MarketProtocol.SellMessage)
                return object;
            var message = new $root.MarketProtocol.SellMessage();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a SellMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MarketProtocol.SellMessage
         * @static
         * @param {MarketProtocol.SellMessage} message SellMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SellMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this SellMessage to JSON.
         * @function toJSON
         * @memberof MarketProtocol.SellMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SellMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SellMessage
         * @function getTypeUrl
         * @memberof MarketProtocol.SellMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SellMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/MarketProtocol.SellMessage";
        };

        return SellMessage;
    })();

    MarketProtocol.BuyMessage = (function() {

        /**
         * Properties of a BuyMessage.
         * @memberof MarketProtocol
         * @interface IBuyMessage
         * @property {string|null} [name] BuyMessage name
         */

        /**
         * Constructs a new BuyMessage.
         * @memberof MarketProtocol
         * @classdesc Represents a BuyMessage.
         * @implements IBuyMessage
         * @constructor
         * @param {MarketProtocol.IBuyMessage=} [properties] Properties to set
         */
        function BuyMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuyMessage name.
         * @member {string} name
         * @memberof MarketProtocol.BuyMessage
         * @instance
         */
        BuyMessage.prototype.name = "";

        /**
         * Creates a new BuyMessage instance using the specified properties.
         * @function create
         * @memberof MarketProtocol.BuyMessage
         * @static
         * @param {MarketProtocol.IBuyMessage=} [properties] Properties to set
         * @returns {MarketProtocol.BuyMessage} BuyMessage instance
         */
        BuyMessage.create = function create(properties) {
            return new BuyMessage(properties);
        };

        /**
         * Encodes the specified BuyMessage message. Does not implicitly {@link MarketProtocol.BuyMessage.verify|verify} messages.
         * @function encode
         * @memberof MarketProtocol.BuyMessage
         * @static
         * @param {MarketProtocol.IBuyMessage} message BuyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified BuyMessage message, length delimited. Does not implicitly {@link MarketProtocol.BuyMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MarketProtocol.BuyMessage
         * @static
         * @param {MarketProtocol.IBuyMessage} message BuyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BuyMessage message from the specified reader or buffer.
         * @function decode
         * @memberof MarketProtocol.BuyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MarketProtocol.BuyMessage} BuyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MarketProtocol.BuyMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BuyMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MarketProtocol.BuyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MarketProtocol.BuyMessage} BuyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BuyMessage message.
         * @function verify
         * @memberof MarketProtocol.BuyMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BuyMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a BuyMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MarketProtocol.BuyMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MarketProtocol.BuyMessage} BuyMessage
         */
        BuyMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.MarketProtocol.BuyMessage)
                return object;
            var message = new $root.MarketProtocol.BuyMessage();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a BuyMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MarketProtocol.BuyMessage
         * @static
         * @param {MarketProtocol.BuyMessage} message BuyMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuyMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this BuyMessage to JSON.
         * @function toJSON
         * @memberof MarketProtocol.BuyMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuyMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BuyMessage
         * @function getTypeUrl
         * @memberof MarketProtocol.BuyMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BuyMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/MarketProtocol.BuyMessage";
        };

        return BuyMessage;
    })();

    return MarketProtocol;
})();

$root.WorldProtocol = (function() {

    /**
     * Namespace WorldProtocol.
     * @exports WorldProtocol
     * @namespace
     */
    var WorldProtocol = {};

    WorldProtocol.HelloWorldMessage = (function() {

        /**
         * Properties of a HelloWorldMessage.
         * @memberof WorldProtocol
         * @interface IHelloWorldMessage
         * @property {string|null} [name] HelloWorldMessage name
         */

        /**
         * Constructs a new HelloWorldMessage.
         * @memberof WorldProtocol
         * @classdesc Represents a HelloWorldMessage.
         * @implements IHelloWorldMessage
         * @constructor
         * @param {WorldProtocol.IHelloWorldMessage=} [properties] Properties to set
         */
        function HelloWorldMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloWorldMessage name.
         * @member {string} name
         * @memberof WorldProtocol.HelloWorldMessage
         * @instance
         */
        HelloWorldMessage.prototype.name = "";

        /**
         * Creates a new HelloWorldMessage instance using the specified properties.
         * @function create
         * @memberof WorldProtocol.HelloWorldMessage
         * @static
         * @param {WorldProtocol.IHelloWorldMessage=} [properties] Properties to set
         * @returns {WorldProtocol.HelloWorldMessage} HelloWorldMessage instance
         */
        HelloWorldMessage.create = function create(properties) {
            return new HelloWorldMessage(properties);
        };

        /**
         * Encodes the specified HelloWorldMessage message. Does not implicitly {@link WorldProtocol.HelloWorldMessage.verify|verify} messages.
         * @function encode
         * @memberof WorldProtocol.HelloWorldMessage
         * @static
         * @param {WorldProtocol.IHelloWorldMessage} message HelloWorldMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloWorldMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified HelloWorldMessage message, length delimited. Does not implicitly {@link WorldProtocol.HelloWorldMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof WorldProtocol.HelloWorldMessage
         * @static
         * @param {WorldProtocol.IHelloWorldMessage} message HelloWorldMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloWorldMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloWorldMessage message from the specified reader or buffer.
         * @function decode
         * @memberof WorldProtocol.HelloWorldMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {WorldProtocol.HelloWorldMessage} HelloWorldMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloWorldMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WorldProtocol.HelloWorldMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloWorldMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof WorldProtocol.HelloWorldMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {WorldProtocol.HelloWorldMessage} HelloWorldMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloWorldMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloWorldMessage message.
         * @function verify
         * @memberof WorldProtocol.HelloWorldMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloWorldMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a HelloWorldMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof WorldProtocol.HelloWorldMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {WorldProtocol.HelloWorldMessage} HelloWorldMessage
         */
        HelloWorldMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.WorldProtocol.HelloWorldMessage)
                return object;
            var message = new $root.WorldProtocol.HelloWorldMessage();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a HelloWorldMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof WorldProtocol.HelloWorldMessage
         * @static
         * @param {WorldProtocol.HelloWorldMessage} message HelloWorldMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloWorldMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this HelloWorldMessage to JSON.
         * @function toJSON
         * @memberof WorldProtocol.HelloWorldMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloWorldMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HelloWorldMessage
         * @function getTypeUrl
         * @memberof WorldProtocol.HelloWorldMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HelloWorldMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WorldProtocol.HelloWorldMessage";
        };

        return HelloWorldMessage;
    })();

    return WorldProtocol;
})();

module.exports = $root;
