export default Book;
/**
 * Book object from API.
 */
export type APIBook = {
    /**
     * Book title.
     */
    title: {
        english: string;
        japanese: string;
        pretty: string;
    };
    /**
     * Book ID.
     */
    id: number | string;
    /**
     * Book Media ID.
     */
    media_id: number | string;
    /**
     * Book favours count.
     */
    num_favorites: number | string;
    /**
     * Book pages count.
     */
    num_pages: number | string;
    /**
     * Book scanlator.
     */
    scanlator: string;
    /**
     * Upload UNIX timestamp.
     */
    uploaded: number | string;
    /**
     * Book cover image.
     */
    cover: APIImage;
    /**
     * Book pages' images.
     */
    images: APIImage[];
    /**
     * Book tags.
     */
    tags: APITag[];
};
/**
 * Book title.
 */
export type BookTitle = {
    /**
     * Book english title.
     */
    english: string;
    /**
     * Book japanese title.
     */
    japanese: string;
    /**
     * Book short title.
     */
    pretty: string;
};
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
declare class Book {
    /**
     * Unknown book instance.
     * @type {UnknownBook}
     * @static
     */
    static Unknown: UnknownBook;
    /**
     * UnknownBook class.
     * @type {UnknownBook}
     * @static
     */
    static UnknownBook: UnknownBook;
    /**
     * Parse book object into class instance.
     * @param {APIBook} book Book.
     * @returns {Book} Book instance.
     * @static
     */
    static parse(book: APIBook): Book;
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
    constructor({ title, id, media, favorites, scanlator, uploaded, tags, cover, pages, }?: {
        title?: BookTitle;
        id?: number;
        media?: number;
        favorites?: number;
        scanlator?: string;
        uploaded?: Date;
        tags?: Tag[] | TagsArray;
        cover?: Image;
        pages?: Image[];
    });
    /**
     * Book title.
     * @type {BookTitle}
     */
    title: BookTitle;
    /**
     * Book ID.
     * @type {number}
     * @default 0
     */
    id: number;
    /**
     * Book Media ID.
     * @type {number}
     * @default 0
     */
    media: number;
    /**
     * Book favours count.
     * @type {number}
     * @default 0
     */
    favorites: number;
    /**
     * Book scanlator.
     * @type {string}
     * @default ''
     */
    scanlator: string;
    /**
     * Book upload date.
     * @type {Date}
     * @default new Date(0)
     */
    uploaded: Date;
    /**
     * Book tags.
     * @type {TagsArray}
     * @default []
     */
    tags: TagsArray;
    /**
     * Book cover.
     * @type {Image}
     */
    cover: Image;
    /**
     * Book pages.
     * @type {Image[]}
     * @default []
     */
    pages: Image[];
    /**
     * Check whatever book is known.
     * @type {boolean}
     */
    get isKnown(): boolean;
    /**
     * Set book cover image.
     * @param {Image} cover Image.
     * @returns {boolean} Whatever cover was set.
     * @private
     */
    private setCover;
    /**
     * Push image to book pages.
     * @param {Image} page Image.
     * @returns {boolean} Whatever page was added.
     * @private
     */
    private pushPage;
    /**
     * Push tag to book tags.
     * @param {Tag} tag Tag.
     * @returns {boolean} Whatever tag was added.
     * @private
     */
    private pushTag;
    /**
     * Check if book has certain tag.
     * @param {Tag}     tag            Tag
     * @param {boolean} [strict=false] Strict comparison.
     */
    hasTag(tag: Tag, strict?: boolean): boolean;
    /**
     * Check if book has any tags with certain properties.
     * @param {object|Tag} tag Tag.
     */
    hasTagWith(tag: object | Tag): boolean;
    /**
     * Get any tags with certain properties.
     * @param {object|Tag} tag Tag.
     * @returns {TagsArray}
     */
    getTagsWith(tag: object | Tag): TagsArray;
    /**
     * Pure tags (with type {TagType.Tag}).
     * @type {Tag[]}
     */
    get pureTags(): Tag[];
    /**
     * Category tags.
     * @type {Tag[]}
     */
    get categories(): Tag[];
    /**
     * Artist tags.
     * @type {Tag[]}
     */
    get artists(): Tag[];
    /**
     * Parody tags.
     * @type {Tag[]}
     */
    get parodies(): Tag[];
    /**
     * Character tags.
     * @type {Tag[]}
     */
    get characters(): Tag[];
    /**
     * Group tags.
     * @type {Tag[]}
     */
    get groups(): Tag[];
    /**
     * Language tags.
     * @type {Tag[]}
     */
    get languages(): Tag[];
}
import TagsArray from "./tagsArray";
import Image from "./image";
import { Tag } from "./tag";
/**
 * Class representing unknown book.
 * @class
 * @extends Book
 */
declare class UnknownBook extends Book {
    /**
     * Create unknown book.
     */
    constructor();
}
