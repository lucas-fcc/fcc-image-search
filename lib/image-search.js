'use strict';

var request = require('request');

function searchForImages(query, offset, callback) {
  
    // Make a request to Google CSE using parameters specified by requester.
    request.get(buildQuery(query, offset), function(err, response) {

        if (err) {
            console.log("Error: " + err);
            callback(err);
        } else {
      
            const results = JSON.parse(response.body);
      
            if (results.items) {
        
                const images = results.items.map(item => {
                	return {
				        "url": item.link, 
				        "snippet": item.snippet, 
				        "thumbnail": item.image.thumbnailLink, 
				        "context": item.image.contextLink 
				    };
                });
        
                callback(null, images);
        
            } else {
                callback(null, null);
            }
      
        }
    });
  
};

function buildQuery(searchQuery, offset) {

    const CSE_URL = 'https://www.googleapis.com/customsearch/v1';
    const CSE_SEARCH = 'image';
    const CSE_CX = process.env.CSE_CX
    const CSE_KEY = process.env.CSE_KEY

    return {
        url: CSE_URL,
        qs: {
            key: CSE_KEY,
            cx: CSE_CX,
            searchType: CSE_SEARCH,
            q: searchQuery,
            start: offset
        }
    };
};

module.exports = searchForImages;