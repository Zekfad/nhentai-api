export default Image;
/**
 * Image object from API.
 */
export type APIImage = {
    /**
     * Image type.
     */
    t: string;
    /**
     * Image width.
     */
    w: number | string;
    /**
     * Image height.
     */
    h: number | string;
};
export type ImageTypes = {
    /**
     * JPEG image type.
     */
    JPEG: TagType;
    /**
     * PNG image type.
     */
    PNG: TagType;
    /**
     * GIF image type.
     */
    GIF: TagType;
};
/**
 * Class representing image.
 * @class
 */
declare class Image {
    /**
     * Image types.
     * @type {ImageTypes}
     * @static
     */
    static types: ImageTypes;
    /**
     * Parse pure image object from API into class instance.
     * @param {APIImage} image  Image object
     * @param {number}   [id=0] Image id (a.k.a. page number).
     * @returns {Image} Image instance.
     * @static
     */
    static parse(image: APIImage, id?: number): Image;
    /**
     * Create image.
     * @param {object}           [params]                      Image parameters.
     * @param {number}           [params.id=0]                 Image ID.
     * @param {number}           [params.width=0]              Image width.
     * @param {number}           [params.height=0]             Image height.
     * @param {string|ImageType} [params.type=ImageTypes.JPEG] Image type.
     * @param {Book}             [params.book=Book.Unknown]    Image's Book.
     */
    constructor({ id, width, height, type, book, }?: {
        id?: number;
        width?: number;
        height?: number;
        type?: string | ImageType;
        book?: Book;
    });
    /**
     * Image ID.
     * @type {number}
     * @default 0
     */
    id: number;
    /**
     * Image width.
     * @type {number}
     * @default 0
     */
    width: number;
    /**
     * Image height.
     * @type {number}
     * @default 0
     */
    height: number;
    /**
     * Image type.
     * @type {ImageType}
     * @default ImageTypes.JPEG
     */
    type: ImageType;
    /**
     * Image parent book.
     * @type {Book}
     * @default Book.Unknown
     */
    book: Book;
    /**
     * Whatever this image is book cover.
     * @type {boolean}
     */
    get isCover(): boolean;
    /**
     * Image filename.
     * @type {string}
     */
    get filename(): string;
}
/**
 * Image object from API.
 * @global
 * @typedef {object} APIImage
 * @property {string}        t Image type.
 * @property {number|string} w Image width.
 * @property {number|string} h Image height.
 */
/**
 * @typedef {object} ImageTypes
 * @property {TagType} JPEG JPEG image type.
 * @property {TagType} PNG  PNG image type.
 * @property {TagType} GIF  GIF image type.
 */
/**
 * Class representing image type.
 * @class
 */
declare class ImageType {
    /**
     * @type {ImageTypes}
     * @static
     * @default {}
     */
    static knownTypes: ImageTypes;
    /**
     * Create image type.
     * @param {string} type      Image type name.
     * @param {string} extension Image type extension.
     */
    constructor(type: string, extension: string);
    /**
     * Image type name.
     * @type {?string}
     * @default null
     */
    type: string | null;
    /**
     * Image type extension.
     * @type {?string}
     * @default null
     */
    extension: string | null;
    /**
     * Whatever this tag type is unknown.
     * @type {boolean}
     */
    get isKnown(): boolean;
    /**
     * Alias for type.
     * @type {?string}
     */
    get name(): string;
}
import Book from "./book";
