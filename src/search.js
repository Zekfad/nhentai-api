/**
 * @module Search
 */

import API from './api';
import Book from './book';
import { Tag, } from './tag';


/**
 * Search object from API.
 * @global
 * @typedef {object} APISearch
 * @property {APIBook[]}     result    Search results.
 * @property {number|string} num_pages Number of search pages available.
 * @property {number|string} per_page  Number of books per page.
 */

/**
 * Class representing search request results.
 * @class
 */
class Search {
	/**
	 * Parse search object into class instance.
	 * @param {APISearch} search Search object.
	 */
	static parse(search) {
		return new this({
			pages: search.num_pages
				? +search.num_pages
				: 1,
			perPage: search.per_page
				? +search.per_page
				: search.result.length,
			books: search.result.map(Book.parse.bind(Book)),
		});
	}

	/**
	 * API instance.
	 * @type {?API}
	 * @default null
	 */
	api = null;

	/**
	 * Query string.
	 * @type {?string}
	 * @default null
	 */
	query = null;

	/**
	 * Page ID.
	 * @type {number}
	 * @default 1
	 */
	page = 1;

	/**
	 * Books per page.
	 * @type {number}
	 * @default 0
	 */
	perPage = 0;

	/**
	 * Books array.
	 * @type {Book[]}
	 * @default []
	 */
	books = [];

	/**
	 * Pages count.
	 * @type {number}
	 * @default 1
	 */
	pages = 1;

	/**
	 * Create search.
	 * @param {object} [params]           Search parameters.
	 * @param {string} [params.query='']  Query string.
	 * @param {number} [params.page=1]    Search page ID.
	 * @param {number} [params.pages=1]   Search pages count.
	 * @param {number} [params.perPage=0] Search books per page.
	 * @param {Book[]} [params.books=[]]  Books array.
	 */
	constructor({
		query   = null,
		page    = 1,
		pages   = 1,
		perPage = 0,
		books   = [],
	} = {}) {
		if (Array.isArray(books))
			books.forEach(this.pushBook.bind(this));

		Object.assign(this, {
			query,
			page,
			pages,
			perPage,
		});
	}

	/**
	 * Push book to books array.
	 * @param {Book} book Book.
	 * @returns {boolean} Whatever was book added or not.
	 * @private
	 */
	pushBook(book) {
		if (book instanceof Book) {
			this.books.push(book);
			return true;
		}
		return false;
	}

	/**
	 * Request next page.
	 * @throws Error if search request can't be paginated.
	 * @throws Error if `api` is missing as instance property or function argument.
	 * @param {API} [api=this.api] API instance.
	 * @returns {Promise<Search>} Next page search.
	 */
	getNextPage(api = this.api) {
		let { query, page, } = this;
		if (query === null)
			throw Error('pagination impossible.');
		if (!(api instanceof API))
			throw Error('api must exists.');
		return query instanceof Tag
			? api.searchTagged(query, ++page)
			: api.search(query, ++page);
	}
}

export default Search;
