/*
 *  main controller of the application
 */
"use strict";
import databaseRequest from "./modules/databaseRequest.js";
import resultsController from "./modules/resultsController.js";


var searchForm = document.getElementById("js-search");
var searchInput = document.getElementById("js-search_input");

var onSearchFormSubmit = function(e) {
    e ? e.preventDefault() : "";
    if (searchInput.value !== "") {
        databaseRequest.search(searchInput.value, function(response) {
            if (response.results && response.results.length > 0) {
                resultsController.displayResults(response.results);
            } else {
                resultsController.displayError("Brak wyników");
            }
        });
    }
};
searchForm.addEventListener("submit", onSearchFormSubmit)
onSearchFormSubmit();
