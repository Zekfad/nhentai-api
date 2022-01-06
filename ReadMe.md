# Node.JS client for nhentai.net undocumented APIs.

[![npm version](https://img.shields.io/npm/v/nhentai-api?style=for-the-badge)](https://www.npmjs.com/package/nhentai-api)![node version](https://img.shields.io/node/v/nhentai-api?style=for-the-badge)[![Build status - Linux/OSX](https://img.shields.io/travis/Zekfad/nhentai-api?style=for-the-badge&logo=linux&logoColor=white)](https://travis-ci.org/github/Zekfad/nhentai-api)[![Build status - Windows](https://img.shields.io/appveyor/build/Zekfad/nhentai-api?style=for-the-badge&logo=windows&logoColor=white)](https://ci.appveyor.com/project/Zekfad/nhentai-api)[![Codecov](https://img.shields.io/codecov/c/gh/Zekfad/nhentai-api?style=for-the-badge)](https://codecov.io/gh/Zekfad/nhentai-api)


Node.JS module for handling nhentai.net API.

## Features

* Objective-oriented API abstraction.
* Bidirectional inspecting (get image from book/get book from image).
* Easy proxy support by using custom Agent (like [this one](https://www.npmjs.com/package/https-proxy-agent)).
* Return URLs for binary data (images).

## Install

Install via yarn:

```
yarn add nhentai-api
```

Install via npm:

```
npm i nhentai-api
```

## Docs

[Read the docs on GitHub pages.](https://zekfad.github.io/nhentai-api/)

## Example

### Import

#### CommonJS

```js
const { API, TagTypes, } = require('nhentai-api');
```

#### ES6

```js
import { API, TagTypes, } from 'nhentai-api';
```

### Use

#### Initialize API client

```js
const api = new API();
```

#### Get the book

```js
api.getBook(177013).then(book => {
	api.getImageURL(book.cover);    // https://t.nhentai.net/galleries/987560/cover.jpg
	api.getImageURL(book.pages[1]); // https://i.nhentai.net/galleries/987560/2.jpg
});
```

#### Get random book
```js
await api.getRandomBook(); // Book instance
````

#### Search for the books

```js
api.search('test').then(async search => {
	console.log(search); /*
	Search {
		api: API { hosts: [Object], ssl: true, agent: [Agent] },
		query: 'test',
		page: 1,
		perPage: 25,
		books: [
			[Book], [Book], [Book], [Book],
			[Book], [Book], [Book], [Book],
			[Book], [Book], [Book], [Book],
			[Book], [Book], [Book], [Book],
			[Book], [Book], [Book], [Book],
			[Book], [Book], [Book], [Book],
			[Book]
		],
		pages: 67
	} */
	search = await search.getNextPage(); // Same as api.search('text', 2);
	console.log(search); /*
	Search {
		// Same as above
		page: 2,
		// Same as above
		books: [
			// Books from 2nd page of search
		],
		// Same as above
	} */
});
```

In case you need to change API implementation (e.g. change proxy) you can pass `api` to
```js
search.getNextPage(api);
```

You can also use async generator:
```js
// Get first 2 pages
for await (const search of api.searchGenerator('test')) {
	console.log(search);
	if (search.page >= 2)
		break;
}
```

#### Working with tags

`book.tags` has type of `TagsArray`, it is just an `Array<Tag>` with helper methods.

```js
const tag = book.tags[0]; // Tag
```

##### Get tag id
```js
tag.id;
```

##### Get tag name (without count)
```js
tag.name;
// or
tag.toString();
```

##### Get tag name (with count)
```js
tag.toString(true);
```

##### Get tag type (as string)
```js
tag.type.type;
// or
tag.type.toString();
```

##### Pre-filtered tags

```js
book.pureTags;   // pure tags (with type 'tag')
book.categories; // category tags
book.artists;    // artist tags
book.parodies;   // parody tags
book.characters; // character tags
book.groups;     // group tags
book.languages;  // language tags
```

##### Filter tags

Get artists:
```js
book.artists;
// or
book.getTagsWith({
	type: TagTypes.Artist, // you may also use Tag.types.Artist or Tag.types.get('artist') 
}); // TagsArray (subclass of Array<Tag>)
// or
book.getTagsWith({ type: 'artist', }); // TagsArray (subclass of Array<Tag>)
```

Get tag with name `english`:
```js
book.getTagsWith({ name: 'english', }); // TagsArray (subclass of Array<Tag>)
```

Get categories
```js
book.categories;
// or
book.getTagsWith({ type: TagTypes.Category, }); // Recommended
// or
book.getTagsWith({ type: Tag.types.Category, });
// or
book.getTagsWith({ type: Tag.types.get('category'), });
// or
book.getTagsWith({ type: 'category', });
```

##### Get tags comma separated

Without counts:
```js
book.tags.toNames().join(', ');
// or
book.tags.join(', ');
```

With counts:
```js
book.tags.toNames(true).join(', ');
// or
book.tags.map(tag => tag.toString(true)).join(', ')
```

Get all artists:
```js
// With counts
book.artists.toNames(true).join(', ');
// or
book.getTagsWith({ type: TagTypes.Artist, }).toNames(true).join(', ');
// Without counts
book.artists.join(', ');
// or
book.artists.toNames().join(', ');
// or
book.getTagsWith({ type: TagTypes.Artist, }).join(', ');
```
