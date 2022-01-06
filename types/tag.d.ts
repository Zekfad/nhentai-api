/**
 * Tag object from API.
 */
export type APITag = {
    /**
     * Tag id.
     */
    id: number | string;
    /**
     * Tag type.
     */
    type: string;
    /**
     * Tag name.
     */
    name: string;
    /**
     * Tagged books count.
     */
    count: number | string;
    /**
     * Tag URL.
     */
    url: string;
};
export type TagTypes = {
    /**
     * Unknown tag type.
     */
    Unknown: UnknownTagType;
    /**
     * Tag tag type.
     */
    Tag: TagType;
    /**
     * Category tag type.
     */
    Category: TagType;
    /**
     * Artist tag type.
     */
    Artist: TagType;
    /**
     * Parody tag type.
     */
    Parody: TagType;
    /**
     * Character tag type.
     */
    Character: TagType;
    /**
     * Group tag type.
     */
    Group: TagType;
    /**
     * Language tag type.
     */
    Language: TagType;
};
/**
 * Class representing tag.
 * @class
 */
export class Tag {
    /**
     * Tag types.
     * @type {TagTypes}
     * @static
     */
    static types: TagTypes;
    /**
     * Warp tag object with Tag class instance.
     * @param {APITag|Tag} tag Tag to wrap.
     * @returns {Tag} Tag.
     * @static
     */
    static get(tag: APITag | Tag): Tag;
    /**
     * Create tag.
     * @param {object}         [params]                       Tag parameters.
     * @param {number}         [params.id=0]                  Tag id.
     * @param {string|TagType} [params.type=TagTypes.Unknown] Tag type.
     * @param {string}         [params.name=""]               Tag name.
     * @param {number}         [params.count=0]               Tagged books count.
     * @param {string}         [params.url=""]                Tag URL.
     */
    constructor({ id, type, name, count, url, }?: {
        id?: number;
        type?: string | TagType;
        name?: string;
        count?: number;
        url?: string;
    });
    /**
     * Tag ID.
     * @type {number}
     * @default 0
     */
    id: number;
    /**
     * Tag type.
     * @type {TagType|UnknownTagType}
     * @default TagTypes.Unknown
     */
    type: TagType | UnknownTagType;
    /**
     * Tag name.
     * @type {string}
     * @default ""
     */
    name: string;
    /**
     * Count of books tagged with this tag.
     * @type {number}
     * @default 0
     */
    count: number;
    /**
     * Tag URL.
     * @type {string}
     * @default ""
     */
    url: string;
    /**
     * Compare this to given one.
     * By default tags with different id will return false.
     * If you want to check whatever tag has any of properties from another tag pass `'any'` to `strict` parameter.
     * @param {string|Tag} tag                Tag to compare with.
     * @param {boolean|string} [strict=false] Whatever all parameters must be the same.
     * @returns {boolean} Whatever tags are equal.
     */
    compare(tag: string | Tag, strict?: boolean | string): boolean;
    /**
     * Get tag name or tag name with count of tagged books.
     * @param {?boolean} [includeCount=false] Include count.
     * @returns {string}
     */
    toString(includeCount?: boolean | null): string;
}
/**
 * @module Tag
 */
/**
 * Tag object from API.
 * @global
 * @typedef {object} APITag
 * @property {number|string} id    Tag id.
 * @property {string}        type  Tag type.
 * @property {string}        name  Tag name.
 * @property {number|string} count Tagged books count.
 * @property {string}        url   Tag URL.
 */
/**
 * @typedef {object} TagTypes
 * @property {UnknownTagType} Unknown   Unknown tag type.
 * @property {TagType}        Tag       Tag tag type.
 * @property {TagType}        Category  Category tag type.
 * @property {TagType}        Artist    Artist tag type.
 * @property {TagType}        Parody    Parody tag type.
 * @property {TagType}        Character Character tag type.
 * @property {TagType}        Group     Group tag type.
 * @property {TagType}        Language  Language tag type.
 */
/**
 * Class representing tag type.
 * @class
 */
export class TagType {
    /**
     * @type {TagTypes}
     * @static
     * @default {}
     */
    static knownTypes: TagTypes;
    /**
     * Create tag type.
     * @param {string} type Tag type.
     */
    constructor(type: string);
    /**
     * Tag type name.
     * @type {?string}
     * @default null
     */
    type: string | null;
    /**
     * Check if this tag type is unknown.
     * @type {boolean}
     */
    get isKnown(): boolean;
    /**
     * Tag type name.
     * @returns {string}
     */
    toString(): string;
}
/**
 * Class representing unknown tag type.
 * @class
 * @extends TagType
 */
export class UnknownTagType extends TagType {
    /**
     * Create unknown tag type.
     * @param {string} [type="unknown"] Unknown tag type name.
     */
    constructor(type?: string);
}
