/**
 * @module Book
 */

import Image from './image';
import { Tag, } from './tag';
import TagsArray from './tagsArray';

import { TagTypes, } from '.';


/**
 * Book object from API.
 * @global
 * @typedef {object} APIBook
 * @property {object}        title          Book title.
 * @property {string}        title.english  Book english title.
 * @property {string}        title.japanese Book japanese title.
 * @property {string}        title.pretty   Book short title.
 * @property {number|string} id             Book ID.
 * @property {number|string} media_id       Book Media ID.
 * @property {number|string} num_favorites  Book favours count.
 * @property {number|string} num_pages      Book pages count.
 * @property {string}        scanlator      Book scanlator.
 * @property {number|string} uploaded       Upload UNIX timestamp.
 * @property {APIImage}      cover          Book cover image.
 * @property {APIImage[]}    images         Book pages' images.
 * @property {APITag[]}      tags           Book tags.
 */

/**
 * Book title.
 * @typedef {object} BookTitle
 * @property {string} english  Book english title.
 * @property {string} japanese Book japanese title.
 * @property {string} pretty   Book short title.
 */

/**
 * Class representing Book.
 * @class
 */
class Book {
	/**
	 * Unknown book instance.
	 * @type {UnknownBook}
	 * @static
	 */
	static Unknown;

	/**
	 * UnknownBook class.
	 * @type {UnknownBook}
	 * @static
	 */
	static UnknownBook;

	/**
	 * Parse book object into class instance.
	 * @param {APIBook} book Book.
	 * @returns {Book} Book instance.
	 * @static
	 */
	static parse(book) {
		return new this({
			title    : book.title,
			id       : +book.id,
			media    : +book.media_id,
			favorites: +book.num_favorites,
			scanlator: book.scanlator,
			uploaded : new Date(+book.upload_date * 1000),
			tags     : TagsArray.from(book.tags, tag => Tag.get(tag)),
			cover    : Image.parse(book.images.cover),
			pages    : book.images.pages.map(
				(image, id) => Image.parse(image, ++id)
			),
		});
	}

	/**
	 * Book title.
	 * @type {BookTitle}
	 */
	title = {
		english : '',
		japanese: '',
		pretty  : '',
	};

	/**
	 * Book ID.
	 * @type {number}
	 * @default 0
	 */
	id = 0;

	/**
	 * Book Media ID.
	 * @type {number}
	 * @default 0
	 */
	media = 0;

	/**
	 * Book favours count.
	 * @type {number}
	 * @default 0
	 */
	favorites = 0;

	/**
	 * Book scanlator.
	 * @type {string}
	 * @default ''
	 */
	scanlator = '';

	/**
	 * Book upload date.
	 * @type {Date}
	 * @default new Date(0)
	 */
	uploaded = new Date(0);

	/**
	 * Book tags.
	 * @type {TagsArray}
	 * @default []
	 */
	tags = new TagsArray();

	/**
	 * Book cover.
	 * @type {Image}
	 */
	cover = new Image({ id: 0, book: this, });

	/**
	 * Book pages.
	 * @type {Image[]}
	 * @default []
	 */
	pages = [];

	/**
	 * Create book.
	 * @param {object}          [params]              Book parameters.
	 * @param {BookTitle}       [params.title]        Book title.
	 * @param {number}          [params.id=0]         Book ID.
	 * @param {number}          [params.media=0]      Book Media ID.
	 * @param {number}          [params.favorites=0]  Book favours count.
	 * @param {string}          [params.scanlator=''] Book scanlator.
	 * @param {Date}            [params.uploaded]     Book upload date.
	 * @param {Tag[]|TagsArray} [params.tags=[]]      Book tags.
	 * @param {Image}           [params.cover]        Book cover.
	 * @param {Image[]}         [params.pages=[]]     Book pages.
	 */
	constructor({
		title     = {
			english : '',
			japanese: '',
			pretty  : '',
		},
		id        = 0,
		media     = 0,
		favorites = 0,
		scanlator = '',
		uploaded  = new Date(0),
		tags      = new TagsArray(),
		cover     = new Image({ id: 0, book: this, }),
		pages     = [],
	} = {}) {
		this.setCover(cover);

		if (Array.isArray(pages))
			pages.forEach(this.pushPage.bind(this));

		if (Array.isArray(tags))
			tags.forEach(this.pushTag.bind(this));

		Object.assign(this, {
			title,
			id,
			media,
			favorites,
			scanlator,
			uploaded,
		});
	}

	/**
	 * Check whatever book is known.
	 * @type {boolean}
	 */
	get isKnown() {
		return !(this instanceof UnknownBook);
	}

	/**
	 * Set book cover image.
	 * @param {Image} cover Image.
	 * @returns {boolean} Whatever cover was set.
	 * @private
	 */
	setCover(cover) {
		if (cover instanceof Image) {
			cover.book = this;
			this.cover = cover;
			return true;
		}
		return false;
	}

	/**
	 * Push image to book pages.
	 * @param {Image} page Image.
	 * @returns {boolean} Whatever page was added.
	 * @private
	 */
	pushPage(page) {
		if (page instanceof Image) {
			page.book = this;
			this.pages.push(page);
			return true;
		}
		return false;
	}

	/**
	 * Push tag to book tags.
	 * @param {Tag} tag Tag.
	 * @returns {boolean} Whatever tag was added.
	 * @private
	 */
	pushTag(tag) {
		tag = Tag.get(tag);

		if (!this.hasTag(tag)) {
			this.tags.push(tag);
			return true;
		}
		return false;
	}

	/**
	 * Check if book has certain tag.
	 * @param {Tag}     tag            Tag
	 * @param {boolean} [strict=false] Strict comparison.
	 */
	hasTag(tag, strict = true) {
		tag = Tag.get(tag);

		return this.tags.some(elem => elem.compare(tag, strict));
	}

	/**
	 * Check if book has any tags with certain properties.
	 * @param {object|Tag} tag Tag.
	 */
	hasTagWith(tag) {
		return this.hasTag(tag, 'any');
	}

	/**
	 * Get any tags with certain properties.
	 * @param {object|Tag} tag Tag.
	 * @returns {TagsArray}
	 */
	getTagsWith(tag) {
		tag = Tag.get(tag);

		return this.tags.filter(elem => elem.compare(tag, 'any'));
	}

	/**
	 * Pure tags (with type {TagType.Tag}).
	 * @type {Tag[]}
	 */
	get pureTags() {
		return this.getTagsWith({ type: TagTypes.Tag, });
	}

	/**
	 * Category tags.
	 * @type {Tag[]}
	 */
	get categories() {
		return this.getTagsWith({ type: TagTypes.Category, });
	}

	/**
	 * Artist tags.
	 * @type {Tag[]}
	 */
	get artists() {
		return this.getTagsWith({ type: TagTypes.Artist, });
	}

	/**
	 * Parody tags.
	 * @type {Tag[]}
	 */
	get parodies() {
		return this.getTagsWith({ type: TagTypes.Parody, });
	}

	/**
	 * Character tags.
	 * @type {Tag[]}
	 */
	get characters() {
		return this.getTagsWith({ type: TagTypes.Character, });
	}

	/**
	 * Group tags.
	 * @type {Tag[]}
	 */
	get groups() {
		return this.getTagsWith({ type: TagTypes.Group, });
	}

	/**
	 * Language tags.
	 * @type {Tag[]}
	 */
	get languages() {
		return this.getTagsWith({ type: TagTypes.Language, });
	}
}

/**
 * Class representing unknown book.
 * @class
 * @extends Book
 */
class UnknownBook extends Book {
	/**
	 * Create unknown book.
	 */
	constructor() {
		super({});
	}
}

Book.UnknownBook = UnknownBook;
Book.Unknown = new UnknownBook();

export default Book;
