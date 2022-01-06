/**
 * Search object from API.
 */
export type APISearch = {
    /**
     * Search results.
     */
    result: APIBook[];
    /**
     * Number of search pages available.
     */
    num_pages: number | string;
    /**
     * Number of books per page.
     */
    per_page: number | string;
};
export type SearchSortMode = '' | 'popular' | 'popular-week' | 'popular-today' | 'popular-month';
/**
 * Class representing search request results.
 * @class
 */
export class Search {
    /**
     * Parse search object into class instance.
     * @param {APISearch} search Search object.
     */
    static parse(search: APISearch): Search;
    /**
     * Create search.
     * @param {?object}         [params]           Search parameters.
     * @param {?string}         [params.query='']  Query string.
     * @param {?SearchSortMode} [params.sort='']   Search sort mode.
     * @param {?number}         [params.page=1]    Search page ID.
     * @param {?number}         [params.pages=1]   Search pages count.
     * @param {?number}         [params.perPage=0] Search books per page.
     * @param {?Book[]}         [params.books=[]]  Books array.
     */
    constructor({ query, sort, page, pages, perPage, books, }?: object | null);
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
     * Search sort mode.
     * @type {SearchSortMode}
     * @default ''
     */
    sort: SearchSortMode;
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
/**
 * Search object from API.
 * @global
 * @typedef {object} APISearch
 * @property {APIBook[]}     result    Search results.
 * @property {number|string} num_pages Number of search pages available.
 * @property {number|string} per_page  Number of books per page.
 */
/**
 * @typedef {''|'popular'|'popular-week'|'popular-today'|'popular-month'} SearchSortMode
 */
export class SearchSort {
    /**
     * @type {SearchSortMode}
     */
    static Recent: SearchSortMode;
    /**
     * @type {SearchSortMode}
     */
    static Popular: SearchSortMode;
    /**
     * @type {SearchSortMode}
     */
    static PopularMonth: SearchSortMode;
    /**
     * @type {SearchSortMode}
     */
    static PopularWeek: SearchSortMode;
    /**
     * @type {SearchSortMode}
     */
    static PopularToday: SearchSortMode;
}
import API from "./api";
import Book from "./book";
