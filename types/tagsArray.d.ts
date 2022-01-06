export default TagsArray;
/**
 * Array of Tags with helper methods.
 * @class
 * @extends Array<Tag>
 */
declare class TagsArray extends Array<Tag> {
    constructor(...args: any[]);
    /**
     * Get array of tags names.
     * @param {?boolean} [includeCount=false] Include count.
     * @returns {String[]}
     */
    toNames(includeCount?: boolean | null): string[];
}
import { Tag } from "./tag";
