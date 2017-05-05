'use strict';

const express = require('express');
const imageSearch = require('./lib/image-search');

const SearchHistory = require('./lib/search-history');
const searchHistory = new SearchHistory();

const app = express();

require('dotenv').config();

app.use(express.static('public'));

// Routes
app.get('/search/:search*', function(req, res, next) {
  
    let searchQuery = req.params.search;
  
    searchHistory.save(searchQuery);
  
    let offset = 1;

    if (req.query.offset)
        offset = parseInt(req.query.offset) * 10;
  
    imageSearch(searchQuery, offset, function(err, result) {
        if (err)
            next(err);
        if (result)
            res.send(result);
        else
            res.send({"error" : "Unable to perform search."});
    });
  
});

app.get('/history', function(req, res) {
    res.json(searchHistory.getHistory());
});

// Error Handlers
app.use((req, res, next) => {
    res.status(404).json({ status: 404, message: 'Not Found' });
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ status: err.status, message: err.message });
});

app.listen(3000, () => {
    console.log('Running on port 3000');
});