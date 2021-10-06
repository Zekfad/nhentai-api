export default Search;
/**
 * Search object from API.
 */
export type APISearch = {
    /**
     * Search results.
     */
    result: any[];
    /**
     * Number of search pages available.
     */
    num_pages: number | string;
    /**
     * Number of books per page.
     */
    per_page: number | string;
};
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
declare class Search {
    /**
     * Parse search object into class instance.
     * @param {APISearch} search Search object.
     */
    static parse(search: APISearch): Search;
    /**
     * Create search.
     * @param {object} [params]           Search parameters.
     * @param {string} [params.query='']  Query string.
     * @param {number} [params.page=1]    Search page ID.
     * @param {number} [params.pages=1]   Search pages count.
     * @param {number} [params.perPage=0] Search books per page.
     * @param {Book[]} [params.books=[]]  Books array.
     */
    constructor({ query, page, pages, perPage, books, }?: {
        query?: string;
        page?: number;
        pages?: number;
        perPage?: number;
        books?: Book[];
    });
    /**
     * API instance.
     * @type {?API}
     * @default null
     */
    api: API | null;
    /**
     * Query string.
     * @type {?string}
     * @default null
     */
    query: string | null;
    /**
     * Page ID.
     * @type {number}
     * @default 1
     */
    page: number;
    /**
     * Books per page.
     * @type {number}
     * @default 0
     */
    perPage: number;
    /**
     * Books array.
     * @type {Book[]}
     * @default []
     */
    books: Book[];
    /**
     * Pages count.
     * @type {number}
     * @default 1
     */
    pages: number;
    /**
     * Push book to books array.
     * @param {Book} book Book.
     * @returns {boolean} Whatever was book added or not.
     * @private
     */
    private pushBook;
    /**
     * Request next page.
     * @throws Error if search request can't be paginated.
     * @throws Error if `api` is missing as instance property or function argument.
     * @param {API} [api=this.api] API instance.
     * @returns {Promise<Search>} Next page search.
     */
    getNextPage(api?: API): Promise<Search>;
}
import API from "./api";
import Book from "./book";
