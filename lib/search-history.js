'use strict';

function SearchHistory() {
    this._history = [];
};

SearchHistory.prototype.save = function(searchTerm) {

    const item = {
        term: searchTerm,
        when: new Date()
    };

    if (this._history.length >= 10) // Stores only the last 10 searches
        this._history.pop();
    
    this._history.unshift(item);

};

SearchHistory.prototype.getHistory = function() {
    return this._history;
};

module.exports = SearchHistory;