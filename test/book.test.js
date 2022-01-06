const
	assert = require('assert'),

	nhentai = require('..');


describe('Book', () => {
	const { Book, } = nhentai;

	describe('#constructor', () => {

		it('should create Book instance', () => {

			let book = new Book({ id: 10, });

			assert.ok(book);

		});

	});
});
