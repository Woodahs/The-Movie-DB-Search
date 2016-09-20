/*
 *  main controller of the application
 */
import databaseRequest from "./modules/databaseRequest.js";
import resultsController from "./modules/resultsController.js";

(function() {
    "use strict";

    var searchForm = document.getElementById("js-search");
    var searchInput = document.getElementById("js-search_input");

    var onSearchSuccess = function(response) {
        if (response.results && response.results.length > 0) {
            resultsController.displayResults(response.results);
        } else {
            resultsController.displayError("No results");
        }
    };

    var onSearchError = function(error) {
        resultsController.displayError(error);
    };

    var onSearchFormSubmit = function(e) {
        e.preventDefault();
        if (searchInput.value !== "") {
            databaseRequest.search(searchInput.value, onSearchSuccess, onSearchError);
        } else {
            resultsController.displayError("Type something to use search...");
        }
    };
    searchForm.addEventListener("submit", onSearchFormSubmit);
})();
