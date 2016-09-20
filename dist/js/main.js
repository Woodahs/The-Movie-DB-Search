/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	"use strict";

	var _databaseRequest = __webpack_require__(2);

	var _databaseRequest2 = _interopRequireDefault(_databaseRequest);

	var _resultsController = __webpack_require__(3);

	var _resultsController2 = _interopRequireDefault(_resultsController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 *  main controller of the application
	 */
	(function () {
	    "use strict";

	    var searchForm = document.getElementById("js-search");
	    var searchInput = document.getElementById("js-search_input");

	    var onSearchSuccess = function onSearchSuccess(response) {
	        if (response.results && response.results.length > 0) {
	            _resultsController2.default.displayResults(response.results);
	        } else {
	            _resultsController2.default.displayError("No results");
	        }
	    };

	    var onSearchError = function onSearchError(error) {
	        _resultsController2.default.displayError(error);
	    };

	    var onSearchFormSubmit = function onSearchFormSubmit(e) {
	        e.preventDefault();
	        if (searchInput.value !== "") {
	            _databaseRequest2.default.search(searchInput.value, onSearchSuccess, onSearchError);
	        } else {
	            _resultsController2.default.displayError("Type something to use search...");
	        }
	    };
	    searchForm.addEventListener("submit", onSearchFormSubmit);
	})();


/***/ },
/* 2 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/


	"use strict";

	/*
	 *  utility for connection with movie database
	 */

	var databaseRequest = function () {
	    // API key from The Movie DB
	    var apiKey = "cd3830f6d23cb81d7f9def86dce69b68";

	    // function for searching movie in database
	    var search = function search(query, onSuccess, onError) {
	        var request = new XMLHttpRequest();
	        var requestUrl = "//api.themoviedb.org/3/search/movie?query=" + query + "&api_key=" + apiKey;

	        request.open('POST', requestUrl);

	        request.setRequestHeader('Accept', 'application/json');

	        request.onreadystatechange = function () {
	            if (this.readyState === 4) {
	                if (this.status === 200) {
	                    onSuccess(JSON.parse(this.response));
	                } else {
	                    onError(this.statusText);
	                }
	            }
	        };

	        request.send();
	    };

	    return {
	        search: search
	    };
	}();

	module.exports = databaseRequest;


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/


	"use strict";

	/*
	 *  utility for controlling results list
	 */

	var resultsController = function () {
	    var resultsContainer = document.getElementById("js-searchResults");

	    // displays search results using built in template
	    var displayResults = function displayResults(results) {
	        resultsContainer.innerHTML = "";
	        for (var i = 0; i < results.length; i++) {
	            if (results[i].poster_path) {
	                resultsContainer.innerHTML = resultsContainer.innerHTML + '<a href="//www.themoviedb.org/movie/' + results[i].id + '" target="_blank" class="m-contentBox_item">' + '<div class="m-contentBox_image">' + '<img src="//image.tmdb.org/t/p/w154' + results[i].poster_path + '" alt="' + results[i].original_title + '">' + '</div>' + '<div class="m-contentBox_content">' + '<div class="m-contentBox_title">' + '<h2>' + results[i].original_title + '</h2>' + '</div>' + '</div>' + '</a>';
	            }
	        }
	    };

	    // displays error in results
	    var displayError = function displayError(error) {
	        resultsContainer.innerHTML = '<p>' + error + '</p>';
	    };

	    return {
	        displayResults: displayResults,
	        displayError: displayError
	    };
	}();

	module.exports = resultsController;


/***/ }
/******/ ]);