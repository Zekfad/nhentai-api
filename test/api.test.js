const
	assert = require('assert'),

	nhentai = require('..');


describe('API', () => {
	const { API, } = nhentai;

	describe('#constructor', () => {

		it('should create API instance with default parameters', () => {

			let api = new API();

			assert.ok(api);

		});

		it('should create API instance with custom parameters', () => {

			let api = new API({
				agent: new Function(),
			});

			assert.ok(api);

			api = new API({
				ssl: false,
			});

			assert.ok(api);

		});

	});
});
