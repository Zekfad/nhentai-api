declare module "API" {
    /**
     * <p>API arguments</p>
     * @property host - <p>API host.</p>
     * @property apiPath - <p>API endpoint URL path generator.</p>
     */
    type APIArgs = {
        host: string;
        apiPath: (...params: any[]) => any;
    };
    /**
     * <p>Class used for building URL paths to nHentai API endpoints.
     * This class is internal and has only static methods.</p>
     */
    class APIPath {
        /**
         * <p>Search by query endpoint.</p>
         * @param query - <p>Search query.</p>
         * @param [page = 1] - <p>Page ID.</p>
         * @returns <p>URL path.</p>
         */
        static search(query: string, page?: number): string;
        /**
         * <p>Search by tag endpoint.</p>
         * @param tagID - <p>Tag ID.</p>
         * @param [page = 1] - <p>Page ID.</p>
         * @returns <p>URL path.</p>
         */
        static searchTagged(tagID: number, page?: number): string;
        /**
         * <p>Search alike endpoint.</p>
         * @param bookID - <p>Book ID.</p>
         * @returns <p>URL path.</p>
         */
        static searchAlike(bookID: number): string;
        /**
         * <p>Book content endpoint.</p>
         * @param bookID - <p>Book ID.</p>
         * @returns <p>URL path.</p>
         */
        static book(bookID: number): string;
        /**
         * <p>Book's cover image endpoint.</p>
         * @param mediaID - <p>Media ID.</p>
         * @param extension - <p>Image extension.</p>
         * @returns <p>URL path.</p>
         */
        static bookCover(mediaID: number, extension: string): string;
        /**
         * <p>Book's page image endpoint.</p>
         * @param mediaID - <p>Media ID.</p>
         * @param page - <p>Page ID.</p>
         * @param extension - <p>Image extension.</p>
         * @returns <p>URL path.</p>
         */
        static bookPage(mediaID: number, page: number, extension: string): string;
        /**
         * <p>Book's page's thumbnail image endpoint.</p>
         * @param mediaID - <p>Media ID.</p>
         * @param page - <p>Page ID.</p>
         * @param extension - <p>Image extension.</p>
         * @returns <p>URL path.</p>
         */
        static bookThumb(mediaID: number, page: number, extension: string): string;
    }
    /**
     * <p>Applies provided options on top of defaults.</p>
     * @param options - <p>Options to apply.</p>
     */
    class API {
        constructor(options: nHentaiOptions);
        /**
         * <p>Get http(s) module depending on <code>options.ssl</code>.</p>
         */
        net: https | http;
        /**
         * <p>JSON get request.</p>
         * @param options - <p>HTTP(S) request options.</p>
         * @param options.host - <p>Host.</p>
         * @param options.path - <p>Path.</p>
         * @returns <p>Parsed JSON.</p>
         */
        request(options: {
            host: string;
            path: string;
        }): Promise<object>;
        /**
         * <p>Search by query.</p>
         * @param query - <p>Query.</p>
         * @param [page = 1] - <p>Page ID.</p>
         * @returns <p>Search instance.</p>
         */
        search(query: string, page?: number): Promise<Search>;
        /**
         * <p>Search related books.</p>
         * @param book - <p>Book instance or Book ID.</p>
         * @returns <p>Search instance.</p>
         */
        searchAlike(book: number | Book): Promise<Search>;
        /**
         * <p>Search by tag id.</p>
         * @param tag - <p>Tag or Tag ID.</p>
         * @param [page = 1] - <p>Page ID.</p>
         * @returns <p>Search instance.</p>
         */
        searchTagged(tag: number | Tag, page?: number): Promise<Search>;
        /**
         * <p>Get book by id.</p>
         * @param bookID - <p>Book ID.</p>
         * @returns <p>Book instance.</p>
         */
        getBook(bookID: number): Promise<Book>;
        /**
         * <p>Get image URL.</p>
         * @param image - <p>Image.</p>
         * @returns <p>Image URL.</p>
         */
        getImageURL(image: Image): string;
        /**
         * <p>Get image thumbnail URL.</p>
         * @param image - <p>Image.</p>
         * @returns <p>Image thumbnail URL.</p>
         */
        getThumbURL(image: Image): string;
    }
}

declare module "Book" {
    /**
     * <p>Book title.</p>
     * @property english - <p>Book english title.</p>
     * @property japanese - <p>Book japanese title.</p>
     * @property pretty - <p>Book short title.</p>
     */
    type BookTitle = {
        english: string;
        japanese: string;
        pretty: string;
    };
    /**
     * <p>Create book.</p>
     * @param [params] - <p>Book parameters.</p>
     * @param [params.title] - <p>Book title.</p>
     * @param [params.id = 0] - <p>Book ID.</p>
     * @param [params.media = 0] - <p>Book Media ID.</p>
     * @param [params.favorites = 0] - <p>Book favours count.</p>
     * @param [params.scanlator = ''] - <p>Book scanlator.</p>
     * @param [params.uploaded] - <p>Book upload date.</p>
     * @param [params.tags = []] - <p>Book tags.</p>
     * @param [params.cover] - <p>Book cover.</p>
     * @param [params.pages = []] - <p>Book pages.</p>
     */
    class Book {
        constructor(params?: {
            title?: BookTitle;
            id?: number;
            media?: number;
            favorites?: number;
            scanlator?: string;
            uploaded?: Date;
            tags?: Tag[];
            cover?: Image;
            pages?: Image[];
        });
        /**
         * <p>Unknown book instance.</p>
         */
        Unknown: UnknownBook;
        /**
         * <p>UnknownBook class.</p>
         */
        UnknownBook: UnknownBook;
        /**
         * <p>Parse book object into class instance.</p>
         * @param book - <p>Book.</p>
         * @returns <p>Book instance.</p>
         */
        static parse(book: APIBook): Book;
        /**
         * <p>Book title.</p>
         */
        title: BookTitle;
        /**
         * <p>Book ID.</p>
         */
        id: number;
        /**
         * <p>Book Media ID.</p>
         */
        media: number;
        /**
         * <p>Book favours count.</p>
         */
        favorites: number;
        /**
         * <p>Book scanlator.</p>
         */
        scanlator: string;
        /**
         * <p>Book upload date.</p>
         */
        uploaded: Date;
        /**
         * <p>Book tags.</p>
         */
        tags: Tag[];
        /**
         * <p>Book cover.</p>
         */
        cover: Image;
        /**
         * <p>Book pages.</p>
         */
        pages: Image[];
        /**
         * <p>Check whatever book is known.</p>
         */
        isKnown: boolean;
        /**
         * <p>Check if book has certain tag.</p>
         * @param tag - <p>Tag</p>
         * @param [strict = false] - <p>Strict comparison.</p>
         */
        hasTag(tag: Tag, strict?: boolean): void;
        /**
         * <p>Check if book has any tags with certain properties.</p>
         * @param tag - <p>Tag.</p>
         */
        hasTagWith(tag: any | Tag): void;
    }
    /**
     * <p>Create unknown book.</p>
     */
    class UnknownBook extends Book {
    }
}

/**
 * <p>Book object from API.</p>
 * @property title - <p>Book title.</p>
 * @property title.english - <p>Book english title.</p>
 * @property title.japanese - <p>Book japanese title.</p>
 * @property title.pretty - <p>Book short title.</p>
 * @property id - <p>Book ID.</p>
 * @property media_id - <p>Book Media ID.</p>
 * @property num_favorites - <p>Book favours count.</p>
 * @property num_pages - <p>Book pages count.</p>
 * @property scanlator - <p>Book scanlator.</p>
 * @property uploaded - <p>Upload UNIX timestamp.</p>
 * @property cover - <p>Book cover image.</p>
 * @property images - <p>Book pages' images.</p>
 * @property tags - <p>Book tags.</p>
 */
declare type APIBook = {
    title: {
        english: string;
        japanese: string;
        pretty: string;
    };
    id: number | string;
    media_id: number | string;
    num_favorites: number | string;
    num_pages: number | string;
    scanlator: string;
    uploaded: number | string;
    cover: APIImage;
    images: APIImage[];
    tags: APITag[];
};

declare module "Image" {
    /**
     * @property JPEG - <p>JPEG image type.</p>
     * @property PNG - <p>PNG image type.</p>
     */
    type ImageTypes = {
        JPEG: TagType;
        PNG: TagType;
    };
    /**
     * <p>Create image type.</p>
     * @param type - <p>Image type name.</p>
     * @param extension - <p>Image type extension.</p>
     */
    class ImageType {
        constructor(type: string, extension: string);
        knownTypes: ImageTypes;
        /**
         * <p>Image type name.</p>
         */
        type: string;
        /**
         * <p>Image type extension.</p>
         */
        extension: string;
        /**
         * <p>Whatever this tag type is unknown.</p>
         */
        isKnown: boolean;
    }
    /**
     * <p>Create unknown image type.</p>
     * @param type - <p>Unknown image type name.</p>
     * @param extension - <p>Unknown image type extension.</p>
     */
    class UnknownImageType extends ImageType {
        constructor(type: string, extension: string);
    }
    /**
     * <p>Known image types.</p>
     */
    var known: ImageType;
    /**
     * <p>Get image type class instance by name.</p>
     * @param type - <p>Image type.</p>
     * @returns <p>Image type class instance.</p>
     */
    function get(type: string): ImageType | UnknownImageType;
    /**
     * <p>Create image.</p>
     * @param [params] - <p>Image parameters.</p>
     * @param [params.id = 0] - <p>Image ID.</p>
     * @param [params.width = 0] - <p>Image width.</p>
     * @param [params.height = 0] - <p>Image height.</p>
     * @param [params.type = ImageTypes.JPEG] - <p>Image type.</p>
     * @param [params.book = Book.Unknown] - <p>Image's Book.</p>
     */
    class Image {
        constructor(params?: {
            id?: number;
            width?: number;
            height?: number;
            type?: string | ImageType;
            book?: Book;
        });
        /**
         * <p>Image types.</p>
         */
        types: ImageTypes;
        /**
         * <p>Parse pure image object from API into class instance.</p>
         * @param image - <p>Image object</p>
         * @param [id = 0] - <p>Image id (a.k.a. page number).</p>
         * @returns <p>Image instance.</p>
         */
        static parse(image: APIImage, id?: number): Image;
        /**
         * <p>Image ID.</p>
         */
        id: number;
        /**
         * <p>Image width.</p>
         */
        width: number;
        /**
         * <p>Image height.</p>
         */
        height: number;
        /**
         * <p>Image type.</p>
         */
        type: ImageType;
        /**
         * <p>Image parent book.</p>
         */
        book: Book;
        /**
         * <p>Whatever this image is book cover.</p>
         */
        isCover: boolean;
        /**
         * <p>Image filename.</p>
         */
        filename: string;
    }
}

/**
 * <p>Image object from API.</p>
 * @property t - <p>Image type.</p>
 * @property w - <p>Image width.</p>
 * @property h - <p>Image height.</p>
 */
declare type APIImage = {
    t: string;
    w: number | string;
    h: number | string;
};

/**
 * <p>Agent-like object or Agent class or it's instance.</p>
 */
declare type httpAgent = any | Agent | SSLAgent;

/**
 * <p>Common nHentai API hosts object.</p>
 * @property api - <p>Main API host.</p>
 * @property images - <p>Media API host.</p>
 * @property thumbs - <p>Media thumbnails API host.</p>
 */
declare type nHentaiHosts = {
    api: string;
    images: string;
    thumbs: string;
};

/**
 * <p>Common nHentai options object.</p>
 * @property hosts - <p>Hosts.</p>
 * @property ssl - <p>Prefer HTTPS over HTTP.</p>
 * @property agent - <p>HTTP(S) agent.</p>
 */
declare type nHentaiOptions = {
    hosts: nHentaiHosts;
    ssl: boolean;
    agent: httpAgent;
};

/**
 * <p>Applies provided options on top of defaults.</p>
 * @param options - <p>Options to apply.</p>
 * @returns <p>Unified options.</p>
 */
declare function processOptions(options: nHentaiOptions): nHentaiOptions;

declare module "Search" {
    /**
     * <p>Create search.</p>
     * @param [params] - <p>Search parameters.</p>
     * @param [params.page = 1] - <p>Search page ID.</p>
     * @param [params.pages = 1] - <p>Search pages count.</p>
     * @param [params.perPage = 0] - <p>Search books per page.</p>
     * @param [params.books = []] - <p>Books array.</p>
     */
    class Search {
        constructor(params?: {
            page?: number;
            pages?: number;
            perPage?: number;
            books?: Book[];
        });
        /**
         * <p>Parse search object into class instance.</p>
         * @param search - <p>Search object.</p>
         */
        static parse(search: APISearch): void;
        /**
         * <p>Page ID.</p>
         */
        page: number;
        /**
         * <p>Books per page.</p>
         */
        perPage: number;
        /**
         * <p>Books array.</p>
         */
        books: Book[];
        /**
         * <p>Pages count.</p>
         */
        pages: number;
    }
}

/**
 * <p>Search object from API.</p>
 * @property result - <p>Search results.</p>
 * @property num_pages - <p>Number of search pages available.</p>
 * @property per_page - <p>Number of books per page.</p>
 */
declare type APISearch = {
    result: APIBook[];
    num_pages: number | string;
    per_page: number | string;
};

declare module "Tag" {
    /**
     * @property Unknown - <p>Unknown tag type.</p>
     * @property Tag - <p>Tag tag type.</p>
     * @property Category - <p>Category tag type.</p>
     * @property Artist - <p>Artist tag type.</p>
     * @property Parody - <p>Parody tag type.</p>
     * @property Character - <p>Character tag type.</p>
     * @property Group - <p>Group tag type.</p>
     * @property Language - <p>Language tag type.</p>
     */
    type TagTypes = {
        Unknown: UnknownTagType;
        Tag: TagType;
        Category: TagType;
        Artist: TagType;
        Parody: TagType;
        Character: TagType;
        Group: TagType;
        Language: TagType;
    };
    /**
     * <p>Create tag type.</p>
     * @param type - <p>Tag type.</p>
     */
    class TagType {
        constructor(type: string);
        knownTypes: TagTypes;
        /**
         * <p>Tag type name.</p>
         */
        type: string;
        /**
         * <p>Check if this tag type is unknown.</p>
         */
        isKnown: boolean;
    }
    /**
     * <p>Create unknown tag type.</p>
     * @param [type = "unknown"] - <p>Unknown tag type name.</p>
     */
    class UnknownTagType extends TagType {
        constructor(type?: string);
    }
    /**
     * <p>Known tag types.</p>
     */
    var known: TagTypes;
    /**
     * <p>Get tag type class instance by name.</p>
     * @param type - <p>Tag type.</p>
     * @returns <p>Tag type class instance.</p>
     */
    function get(type: string): TagType | UnknownTagType;
    /**
     * <p>Create tag.</p>
     * @param [params] - <p>Tag parameters.</p>
     * @param [params.id = 0] - <p>Tag id.</p>
     * @param [params.type = TagTypes.Unknown] - <p>Tag type.</p>
     * @param [params.name = ""] - <p>Tag name.</p>
     * @param [params.count = 0] - <p>Tagged books count.</p>
     * @param [params.url = ""] - <p>Tag URL.</p>
     */
    class Tag {
        constructor(params?: {
            id?: number;
            type?: string | TagType;
            name?: string;
            count?: number;
            url?: string;
        });
        /**
         * <p>Tag types.</p>
         */
        types: TagTypes;
        /**
         * <p>Warp tag object with Tag class instance.</p>
         * @param tag - <p>Tag to wrap.</p>
         * @returns <p>Tag.</p>
         */
        static get(tag: APITag | Tag): Tag;
        /**
         * <p>Compare this to given one.</p>
         * @param tag - <p>Tag to compare with.</p>
         * @param [strict = false] - <p>Whatever all parameters must be the same.</p>
         * @returns <p>Whatever tags are equal.</p>
         */
        compare(tag: string | Tag, strict?: boolean): boolean;
    }
}

/**
 * <p>Tag object from API.</p>
 * @property id - <p>Tag id.</p>
 * @property type - <p>Tag type.</p>
 * @property name - <p>Tag name.</p>
 * @property count - <p>Tagged books count.</p>
 * @property url - <p>Tag URL.</p>
 */
declare type APITag = {
    id: number | string;
    type: string;
    name: string;
    count: number | string;
    url: string;
};

