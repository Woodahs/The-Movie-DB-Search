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

	var _searchController = __webpack_require__(2);

	var _searchController2 = _interopRequireDefault(_searchController);

	var _databaseRequest = __webpack_require__(3);

	var _databaseRequest2 = _interopRequireDefault(_databaseRequest);

	var _resultsController = __webpack_require__(4);

	var _resultsController2 = _interopRequireDefault(_resultsController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_searchController2.default.init(); /*
	                                    *  main controller of the application
	                                    */

	_databaseRequest2.default.init();
	_resultsController2.default.init();
	

/***/ },
/* 2 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/


	"use strict";

	/*
	 *  utility for controlling search
	 */

	var searchController = function () {
	    var init = function init() {
	        console.log("searchController initialized");
	    };
	    return {
	        init: init
	    };
	}();

	module.exports = searchController;
	

/***/ },
/* 3 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/


	"use strict";

	/*
	 *  utility for connection with movie database
	 */

	var databaseRequest = function () {
	    var init = function init() {
	        console.log("databaseRequest initialized");
	    };
	    return {
	        init: init
	    };
	}();

	module.exports = databaseRequest;
	

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/


	"use strict";

	/*
	 *  utility for controlling results list
	 */

	var resultsController = function () {
	    var init = function init() {
	        console.log("resultsController initialized");
	    };
	    return {
	        init: init
	    };
	}();

	module.exports = resultsController;
	

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map