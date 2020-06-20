const
	assert = require('assert'),
	nhentai = require('..');

describe('API', () => {
	const { API, } = nhentai;

	describe('#constructor', () => {

		it('should create API instance', () => {

			let api = new API();

			assert.ok(api);

		});

	});
});
