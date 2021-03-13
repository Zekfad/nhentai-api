const
	assert = require('assert'),
	nhentai = require('..');

describe('Image', () => {
	const {
		Book,
		Image,
	} = nhentai;

	let book = new Book({ id: 10, });

	describe('#constructor', () => {

		it('should create image attached to the book', () => {

			let attachedImage = new Image({ book, }),
				orphanImage = new Image();

			assert.strictEqual(
				attachedImage.book,
				book
			);

			assert.strictEqual(
				orphanImage.book,
				Book.Unknown
			);

		});

	});

	describe('static methods', () => {

		describe('#parse', () => {

			it('should parse image object from API and return Image instance', () => {

				let targetImageProps = {
						type  : Image.types.JPEG,
						id    : 1,
						width : 10,
						height: 10,
					},
					image = Image.parse({
						t: 'j',
						w: '10',
						h: '10',
					}, 1),
					imageProps = {
						type  : image.type,
						id    : image.id,
						width : image.width,
						height: image.height,
					};

				assert.deepStrictEqual(
					imageProps,
					targetImageProps
				);

			});

		});

		describe('#.types', () => {

			describe('#get', () => {

				it('should return ImageType instance for known types', () => {

					assert.strictEqual(
						Image.types.get('g'),
						Image.types.GIF
					);

					assert.strictEqual(
						Image.types.get('gif'),
						Image.types.GIF
					);

					assert.strictEqual(
						Image.types.get('p'),
						Image.types.PNG
					);

					assert.strictEqual(
						Image.types.get('png'),
						Image.types.PNG
					);

					assert.strictEqual(
						Image.types.get('j'),
						Image.types.JPEG
					);

					assert.strictEqual(
						Image.types.get('jpg'),
						Image.types.JPEG
					);

					assert.strictEqual(
						Image.types.get('jpeg'),
						Image.types.JPEG
					);

				});

				it('should return UnknownImageType instance for unknown types', () => {

					assert.strictEqual(
						Image.types.get('unknown') instanceof Image.types.Unknown.constructor,
						true
					);

				});

			});

		});

	});

	describe('instance', () => {

		describe('#isCover', () => {

			it('should determinate whatever image is book cover', () => {
				let coverImage = new Image({ id: 0, }),
					pageImage = new Image({ id: 1, });

				assert.strictEqual(coverImage.isCover, true);

				assert.strictEqual(pageImage.isCover, false);

			});

		});

		describe('#filename', () => {

			it('should return image filename', () => {
				let coverImage = new Image({ id: 0, }),
					pageImage = new Image({ id: 1, });

				assert.strictEqual(
					coverImage.filename,
					'cover.' + coverImage.type.extension
				);

				assert.strictEqual(
					pageImage.filename,
					'1.' + pageImage.type.extension
				);

			});

		});

	});

	describe('instance with unknown type', () => {

		it('should be possible to determinate whatever image type is unknown', () => {

			let imageTypeName = 'unknown',
				image = new Image({
					id  : 10,
					type: imageTypeName,
				});

			assert.strictEqual(image.type.isKnown, false);

			assert.strictEqual(
				image.type.type,
				imageTypeName
			);

			assert.strictEqual(
				image.type.name,
				imageTypeName
			);

		});

	});

});
