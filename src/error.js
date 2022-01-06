// eslint-disable-next-line no-unused-vars
import { IncomingMessage, } from 'http';


class APIError extends Error {
	/**
	 * Original error.
	 * @type {?Error}
	 * @default null
	 */
	originalError = null;

	/**
	 * HTTP response.
	 * @type {IncomingMessage}
	 * @default null
	 */
	httpResponse = null;

	/**
	 * Error message.
	 * @param {string} message Message.
	 */
	constructor(message = 'Unknown error') {
		super(message);
	}

	/**
	 * Absorb error.
	 * @param {Error} [error=null] Original error.
	 * @param {?IncomingMessage} [httpResponse=null] HTTP response.
	 * @returns {APIError}
	 */
	static absorb(error, httpResponse = null) {
		return Object.assign(new APIError(error.message), {
			originalError: error,
			httpResponse,
		});
	}
}

export default APIError;
