# Node.JS implementation of nhentai.net's undocumented APIs.

[![npm version](https://img.shields.io/npm/v/nhentai-api?style=for-the-badge)](https://www.npmjs.com/package/nhentai-api)![node version](https://img.shields.io/node/v/nhentai-api?style=for-the-badge)[![Build status - Linux/OSX](https://img.shields.io/travis/Zekfad/nhentai-api?style=for-the-badge&logo=linux&logoColor=white)](https://travis-ci.org/github/Zekfad/nhentai-api)[![Build status - Windows](https://img.shields.io/appveyor/build/Zekfad/nhentai-api?style=for-the-badge&logo=windows&logoColor=white)](https://ci.appveyor.com/project/Zekfad/nhentai-api)[![Codecov](https://img.shields.io/codecov/c/gh/Zekfad/nhentai-api?style=for-the-badge)](https://codecov.io/gh/Zekfad/nhentai-api)


Node.JS module for handling nhentai.net API.

Please refer the docs of source code to see main features, such as:
* Classes instances for every type of data from API.
* Return URLs for binary data (images).
* Easy proxy support by using custom Agent (like [this one](https://www.npmjs.com/package/https-proxy-agent)).


## Install

Install via npm:

```
npm i nhentai-api
```

Install via yarn:

```
yarn add nhentai-api
```

## Docs

[Read the docs on GitHub pages.](https://zekfad.github.io/nhentai-api/)

## Example

### CommonJS
```js
const { API, } = require('nhentai-api');
```
### ES6
```js
import { API, } from 'nhentai-api';
```

### Common
```js
const api = new API();

api.getBook(177013).then(book => {
	api.getImageURL(book.cover);    // https://t.nhentai.net/galleries/987560/cover.jpg
	api.getImageURL(book.pages[1]); // https://i.nhentai.net/galleries/987560/2.jpg
});
```