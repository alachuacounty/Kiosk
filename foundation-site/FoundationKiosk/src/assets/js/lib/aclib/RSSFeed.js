"use strict";
//RSSFeed.js

import regeneratorRuntime from "regenerator-runtime";

function getSPMediaRSS(rss) {

    let Parser = require('rss-parser');
    let parser = new Parser();

    let mediaIdx = 0;
 
    (async () => {
     
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

        let feed = await parser.parseURL(CORS_PROXY + 'http://alachuacounty.us/news/Article/_layouts/listfeed.aspx?List=%7BFC4D6F7C-8C12-4574-B8CE-B9F62401A444%7D');
        
        console.log(feed);

        feed.items.forEach(item => {
                    
            if(mediaIdx <= 5) {

            console.log(item.title + ':' + item.link)

            rss.innerHTML += `<ul><a href='${item.link}'>${item.title}</a></ul>`

            }

            mediaIdx += 1;

        });
    
    })();

    return rss;
}

export { getSPMediaRSS }