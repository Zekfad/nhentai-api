const
	assert = require('assert'),
	nhentai = require('..');

describe('Tag', () => {
	const { Tag, } = nhentai;

	describe('#constructor', () => {

		it('should create new tag', () => {

			let tag = new Tag();

			assert.ok(tag);

		});

	});

	describe('static methods', () => {

		describe('#get', () => {

			it('should warp tag-like object into tag instance', () => {

				let targetTag = new Tag({
					id: 10,
				});

				assert.strictEqual(
					targetTag.compare(
						Tag.get({
							id: 10,
						})
					),
					true
				);

			});

			it('should return tag instance back if presented', () => {

				let targetTag = new Tag({
					id: 10,
				});

				assert.strictEqual(
					Tag.get(targetTag),
					targetTag
				);

			});

		});

		describe('#.types', () => {

			describe('#get', () => {

				it('should return TagType class instance by it\'s name (if known)', () => {

					assert.strictEqual(
						Tag.types.get('tag'),
						Tag.types.Tag
					);

				});


				it('should return UnknownTagType class instance if requested tag is unknown', () => {

					assert.strictEqual(
						Tag.types.get('unknown') instanceof Tag.types.Unknown.constructor,
						true
					);

					assert.strictEqual(
						Tag.types.get(10) instanceof Tag.types.Unknown.constructor,
						true
					);

				});

			});

		});

	});

	describe('instance with valid tag type', () => {

		let tagTypeName = 'tag',
			tag = new Tag({
				type: tagTypeName,
				name: 'test',
			});

		it('should have known tag type', () => {

			assert.strictEqual(tag.type.isKnown, true);

		});

	});

	describe('instance with unknown tag type', () => {

		let tagTypeName = 'unknown',
			tag = new Tag({
				type: tagTypeName,
				name: 'test',
			});

		it('should have unknown tag type', () => {

			assert.strictEqual(tag.type.isKnown, false);

		});

	});

	describe('common test instance', () => {

		let tagTypeName = 'tag',
			tag = new Tag({
				type : tagTypeName,
				name : 'test',
				count: 10,
				id   : 10,
				url  : '/test/',
			});

		describe('#compare', () => {

			it('should test if tags are the the same (strict: false)', () => {

				assert.strictEqual(
					tag.compare(tag),
					true
				);

				assert.strictEqual(
					tag.compare(
						new Tag({
							id: tag.id,
						})
					),
					true
				);

				assert.strictEqual(
					tag.compare(
						new Tag({})
					),
					false
				);

			});

			it('should test if tags are the the same (strict: true)', () => {

				assert.strictEqual(
					tag.compare(tag, true),
					true
				);

				assert.strictEqual(
					tag.compare(
						new Tag({
							id: tag.id,
						}),
						true
					),
					false
				);

				assert.strictEqual(
					tag.compare(
						new Tag({}),
						true
					),
					false
				);

			});

			it('should test if tags are the the same (strict: \'any\')', () => {

				assert.strictEqual(
					tag.compare(tag, 'any'),
					true
				);

				assert.strictEqual(
					tag.compare(
						new Tag({
							name: tag.name,
							id  : tag.id + 1,
						}),
						'any'
					),
					true
				);

				assert.strictEqual(
					tag.compare(
						new Tag({}),
						'any'
					),
					false
				);

			});

		});

	});

});
