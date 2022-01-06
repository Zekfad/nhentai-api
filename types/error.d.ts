/// <reference types="node" />
export default APIError;
declare class APIError extends Error {
    /**
     * Absorb error.
     * @param {Error} [error=null] Original error.
     * @param {?IncomingMessage} [httpResponse=null] HTTP response.
     * @returns {APIError}
     */
    static absorb(error?: Error, httpResponse?: IncomingMessage | null): APIError;
    /**
     * Original error.
     * @type {?Error}
     * @default null
     */
    originalError: Error | null;
    /**
     * HTTP response.
     * @type {IncomingMessage}
     * @default null
     */
    httpResponse: IncomingMessage;
}
import { IncomingMessage } from "http";
