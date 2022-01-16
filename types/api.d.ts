export default API;
export type nHentaiOptions = import("./options").nHentaiOptions;
export type nHentaiHosts = import("./options").nHentaiHosts;
export type httpAgent = import("./options").httpAgent;
export type SearchSortMode = import("./search").SearchSortMode;
/**
 * API arguments
 */
export type APIArgs = {
    /**
     * API host.
     */
    host: string;
    /**
     * API endpoint URL path generator.
     */
    apiPath: Function;
};
/**
 * Class used for interaction with nHentai API.
 * @class
 */
declare class API {
    /**
     * API path class
     * @type {APIPath}
     * @static
     * @private
     */
    private static APIPath;
    /**
     * Applies provided options on top of defaults.
     * @param {?nHentaiOptions} [options={}] Options to apply.
     */
    constructor(options?: nHentaiOptions | null);
    /**
     * Hosts
     * @type {?nHentaiHosts}
     */
    hosts: nHentaiHosts | null;
    /**
     * Prefer HTTPS over HTTP.
     * @type {?boolean}
     */
    ssl: boolean | null;
    /**
     * HTTP(S) agent.
     * @property {?httpAgent}
     */
    agent: any;
    /**
     * Get http(s) module depending on `options.ssl`.
     * @type {https|http}
     */
    get net(): any;
    /**
     * JSON get request.
     * @param {object} options      HTTP(S) request options.
     * @param {string} options.host Host.
     * @param {string} options.path Path.
     * @returns {Promise<object>} Parsed JSON.
     */
    request(options: {
        host: string;
        path: string;
    }): Promise<object>;
    /**
     * Get API arguments.
     * This is internal method.
     * @param {string} hostType Host type.
     * @param {string} api      Endpoint type.
     * @returns {APIArgs} API arguments.
     * @private
     */
    private getAPIArgs;
    /**
     * Search by query.
     * @param {string}          query     Query.
     * @param {?number}         [page=1]  Page ID.
     * @param {?SearchSortMode} [sort=''] Search sort mode.
     * @returns {Promise<Search>} Search instance.
     * @async
     */
    search(query: string, page?: number | null, sort?: SearchSortMode | null): Promise<Search>;
    /**
     * Search by query.
     * @param {string}          query     Query.
     * @param {?number}         [page=1]  Starting page ID.
     * @param {?SearchSortMode} [sort=''] Search sort mode.
     * @yields {Search} Search instance.
     * @async
     * @returns {AsyncGenerator<Search, Search, Search>}
     */
    searchGenerator(query: string, page?: number | null, sort?: SearchSortMode | null): AsyncGenerator<Search, Search, Search>;
    /**
     * Search related books.
     * @param {number|Book} book Book instance or Book ID.
     * @returns {Promise<Search>} Search instance.
     * @async
     */
    searchAlike(book: number | Book): Promise<Search>;
    /**
     * Search by tag id.
     * @param {number|Tag}      tag       Tag or Tag ID.
     * @param {?number}         [page=1]  Page ID.
     * @param {?SearchSortMode} [sort=''] Search sort mode.
     * @returns {Promise<Search>} Search instance.
     * @async
     */
    searchTagged(tag: number | Tag, page?: number | null, sort?: SearchSortMode | null): Promise<Search>;
    /**
     * Get book by id.
     * @param {number} bookID Book ID.
     * @returns {Promise<Book>} Book instance.
     * @async
     */
    getBook(bookID: number): Promise<Book>;
    /**
     * Get random book.
     * @returns {Promise<Book>} Book instance.
     * @async
     */
    getRandomBook(): Promise<Book>;
    /**
     * Get image URL.
     * @param {Image} image Image.
     * @returns {string} Image URL.
     */
    getImageURL(image: Image): string;
    /**
     * Get image thumbnail URL.
     * @param {Image} image Image.
     * @returns {string} Image thumbnail URL.
     */
    getThumbURL(image: Image): string;
}
import { Search } from "./search";
import Book from "./book";
import { Tag } from "./tag";
import Image from "./image";
