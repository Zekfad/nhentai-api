import API from './api';
import Book from './book';
import Image from './image';
import Search from './search';
import { Tag, } from './tag';


export {
	API,
	Search,
	Book,
	Image,
	Tag,
};

/**
 * @typedef { import("./tag").TagTypes } TagTypes
 */

/**
 * @type {TagTypes}
 */
export const TagTypes = {
	Unknown  : Tag.types.Unknown,
	Tag      : Tag.types.Tag,
	Category : Tag.types.Category,
	Artist   : Tag.types.Artist,
	Parody   : Tag.types.Parody,
	Character: Tag.types.Character,
	Group    : Tag.types.Group,
	Language : Tag.types.Language,
};
