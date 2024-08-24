/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GoonProtocol = (function() {

    /**
     * Namespace GoonProtocol.
     * @exports GoonProtocol
     * @namespace
     */
    var GoonProtocol = {};

    GoonProtocol.ChatMessage = (function() {

        /**
         * Properties of a ChatMessage.
         * @memberof GoonProtocol
         * @interface IChatMessage
         * @property {string|null} [from] ChatMessage from
         * @property {string|null} [content] ChatMessage content
         * @property {string|null} [timestamp] ChatMessage timestamp
         */

        /**
         * Constructs a new ChatMessage.
         * @memberof GoonProtocol
         * @classdesc Represents a ChatMessage.
         * @implements IChatMessage
         * @constructor
         * @param {GoonProtocol.IChatMessage=} [properties] Properties to set
         */
        function ChatMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatMessage from.
         * @member {string} from
         * @memberof GoonProtocol.ChatMessage
         * @instance
         */
        ChatMessage.prototype.from = "";

        /**
         * ChatMessage content.
         * @member {string} content
         * @memberof GoonProtocol.ChatMessage
         * @instance
         */
        ChatMessage.prototype.content = "";

        /**
         * ChatMessage timestamp.
         * @member {string} timestamp
         * @memberof GoonProtocol.ChatMessage
         * @instance
         */
        ChatMessage.prototype.timestamp = "";

        /**
         * Creates a new ChatMessage instance using the specified properties.
         * @function create
         * @memberof GoonProtocol.ChatMessage
         * @static
         * @param {GoonProtocol.IChatMessage=} [properties] Properties to set
         * @returns {GoonProtocol.ChatMessage} ChatMessage instance
         */
        ChatMessage.create = function create(properties) {
            return new ChatMessage(properties);
        };

        /**
         * Encodes the specified ChatMessage message. Does not implicitly {@link GoonProtocol.ChatMessage.verify|verify} messages.
         * @function encode
         * @memberof GoonProtocol.ChatMessage
         * @static
         * @param {GoonProtocol.IChatMessage} message ChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.from);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link GoonProtocol.ChatMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GoonProtocol.ChatMessage
         * @static
         * @param {GoonProtocol.IChatMessage} message ChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChatMessage message from the specified reader or buffer.
         * @function decode
         * @memberof GoonProtocol.ChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GoonProtocol.ChatMessage} ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GoonProtocol.ChatMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.from = reader.string();
                        break;
                    }
                case 2: {
                        message.content = reader.string();
                        break;
                    }
                case 3: {
                        message.timestamp = reader.string();
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
         * @memberof GoonProtocol.ChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GoonProtocol.ChatMessage} ChatMessage
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
         * @memberof GoonProtocol.ChatMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isString(message.from))
                    return "from: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isString(message.timestamp))
                    return "timestamp: string expected";
            return null;
        };

        /**
         * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GoonProtocol.ChatMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GoonProtocol.ChatMessage} ChatMessage
         */
        ChatMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.GoonProtocol.ChatMessage)
                return object;
            var message = new $root.GoonProtocol.ChatMessage();
            if (object.from != null)
                message.from = String(object.from);
            if (object.content != null)
                message.content = String(object.content);
            if (object.timestamp != null)
                message.timestamp = String(object.timestamp);
            return message;
        };

        /**
         * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GoonProtocol.ChatMessage
         * @static
         * @param {GoonProtocol.ChatMessage} message ChatMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.from = "";
                object.content = "";
                object.timestamp = "";
            }
            if (message.from != null && message.hasOwnProperty("from"))
                object.from = message.from;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            return object;
        };

        /**
         * Converts this ChatMessage to JSON.
         * @function toJSON
         * @memberof GoonProtocol.ChatMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChatMessage
         * @function getTypeUrl
         * @memberof GoonProtocol.ChatMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChatMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GoonProtocol.ChatMessage";
        };

        return ChatMessage;
    })();

    GoonProtocol.HelloMessage = (function() {

        /**
         * Properties of a HelloMessage.
         * @memberof GoonProtocol
         * @interface IHelloMessage
         * @property {string|null} [name] HelloMessage name
         */

        /**
         * Constructs a new HelloMessage.
         * @memberof GoonProtocol
         * @classdesc Represents a HelloMessage.
         * @implements IHelloMessage
         * @constructor
         * @param {GoonProtocol.IHelloMessage=} [properties] Properties to set
         */
        function HelloMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloMessage name.
         * @member {string} name
         * @memberof GoonProtocol.HelloMessage
         * @instance
         */
        HelloMessage.prototype.name = "";

        /**
         * Creates a new HelloMessage instance using the specified properties.
         * @function create
         * @memberof GoonProtocol.HelloMessage
         * @static
         * @param {GoonProtocol.IHelloMessage=} [properties] Properties to set
         * @returns {GoonProtocol.HelloMessage} HelloMessage instance
         */
        HelloMessage.create = function create(properties) {
            return new HelloMessage(properties);
        };

        /**
         * Encodes the specified HelloMessage message. Does not implicitly {@link GoonProtocol.HelloMessage.verify|verify} messages.
         * @function encode
         * @memberof GoonProtocol.HelloMessage
         * @static
         * @param {GoonProtocol.IHelloMessage} message HelloMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified HelloMessage message, length delimited. Does not implicitly {@link GoonProtocol.HelloMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GoonProtocol.HelloMessage
         * @static
         * @param {GoonProtocol.IHelloMessage} message HelloMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloMessage message from the specified reader or buffer.
         * @function decode
         * @memberof GoonProtocol.HelloMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GoonProtocol.HelloMessage} HelloMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GoonProtocol.HelloMessage();
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
         * Decodes a HelloMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GoonProtocol.HelloMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GoonProtocol.HelloMessage} HelloMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloMessage message.
         * @function verify
         * @memberof GoonProtocol.HelloMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a HelloMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GoonProtocol.HelloMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GoonProtocol.HelloMessage} HelloMessage
         */
        HelloMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.GoonProtocol.HelloMessage)
                return object;
            var message = new $root.GoonProtocol.HelloMessage();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a HelloMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GoonProtocol.HelloMessage
         * @static
         * @param {GoonProtocol.HelloMessage} message HelloMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloMessage.toObject = function toObject(message, options) {
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
         * Converts this HelloMessage to JSON.
         * @function toJSON
         * @memberof GoonProtocol.HelloMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HelloMessage
         * @function getTypeUrl
         * @memberof GoonProtocol.HelloMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HelloMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/GoonProtocol.HelloMessage";
        };

        return HelloMessage;
    })();

    return GoonProtocol;
})();

$root.Protocol = (function() {

    /**
     * Namespace Protocol.
     * @exports Protocol
     * @namespace
     */
    var Protocol = {};

    Protocol.ProtocolMessage = (function() {

        /**
         * Properties of a ProtocolMessage.
         * @memberof Protocol
         * @interface IProtocolMessage
         * @property {string|null} [name] ProtocolMessage name
         * @property {Uint8Array|null} [data] ProtocolMessage data
         */

        /**
         * Constructs a new ProtocolMessage.
         * @memberof Protocol
         * @classdesc Represents a ProtocolMessage.
         * @implements IProtocolMessage
         * @constructor
         * @param {Protocol.IProtocolMessage=} [properties] Properties to set
         */
        function ProtocolMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProtocolMessage name.
         * @member {string} name
         * @memberof Protocol.ProtocolMessage
         * @instance
         */
        ProtocolMessage.prototype.name = "";

        /**
         * ProtocolMessage data.
         * @member {Uint8Array} data
         * @memberof Protocol.ProtocolMessage
         * @instance
         */
        ProtocolMessage.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new ProtocolMessage instance using the specified properties.
         * @function create
         * @memberof Protocol.ProtocolMessage
         * @static
         * @param {Protocol.IProtocolMessage=} [properties] Properties to set
         * @returns {Protocol.ProtocolMessage} ProtocolMessage instance
         */
        ProtocolMessage.create = function create(properties) {
            return new ProtocolMessage(properties);
        };

        /**
         * Encodes the specified ProtocolMessage message. Does not implicitly {@link Protocol.ProtocolMessage.verify|verify} messages.
         * @function encode
         * @memberof Protocol.ProtocolMessage
         * @static
         * @param {Protocol.IProtocolMessage} message ProtocolMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtocolMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified ProtocolMessage message, length delimited. Does not implicitly {@link Protocol.ProtocolMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.ProtocolMessage
         * @static
         * @param {Protocol.IProtocolMessage} message ProtocolMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtocolMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProtocolMessage message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.ProtocolMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.ProtocolMessage} ProtocolMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtocolMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.ProtocolMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.data = reader.bytes();
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
         * Decodes a ProtocolMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.ProtocolMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.ProtocolMessage} ProtocolMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtocolMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProtocolMessage message.
         * @function verify
         * @memberof Protocol.ProtocolMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProtocolMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a ProtocolMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.ProtocolMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.ProtocolMessage} ProtocolMessage
         */
        ProtocolMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.ProtocolMessage)
                return object;
            var message = new $root.Protocol.ProtocolMessage();
            if (object.name != null)
                message.name = String(object.name);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a ProtocolMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.ProtocolMessage
         * @static
         * @param {Protocol.ProtocolMessage} message ProtocolMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProtocolMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this ProtocolMessage to JSON.
         * @function toJSON
         * @memberof Protocol.ProtocolMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProtocolMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProtocolMessage
         * @function getTypeUrl
         * @memberof Protocol.ProtocolMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProtocolMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Protocol.ProtocolMessage";
        };

        return ProtocolMessage;
    })();

    return Protocol;
})();

module.exports = $root;
