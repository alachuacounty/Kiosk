"use strict";
//RSSFeed.js

import regeneratorRuntime from "regenerator-runtime";

function getRSS(rss, url, itemnum) {

    let Parser = require('rss-parser');
    let parser = new Parser();

    let mediaIdx = 0;

    (async () => {

        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

        let feed = await parser.parseURL(CORS_PROXY + url);

        console.log(feed);

        feed.items.forEach(item => {

            if (mediaIdx <= itemnum) {

                console.log(item.title + ':' + item.link)

                rss.innerHTML += `<ul><a href='${item.link}'>${item.title}</a></ul>`

            }

            mediaIdx += 1;

        });

    })();

    return rss;
}

export { getRSS }