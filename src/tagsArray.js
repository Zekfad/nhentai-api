// eslint-disable-next-line no-unused-vars
import { Tag, } from './tag';


/**
 * Array of Tags with helper methods.
 * @class
 * @extends Array<Tag>
 */
class TagsArray extends Array {
	constructor(...args) {
		super(...args);
	}

	/**
	 * Get array of tags names.
	 * @param {?boolean} [includeCount=false] Include count.
	 * @returns {String[]}
	 */
	toNames(includeCount = false) {
		return Array.from(this, tag => tag.toString(includeCount));
	}
}

export default TagsArray;
