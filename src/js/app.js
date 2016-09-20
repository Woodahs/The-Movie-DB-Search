/*
 *  main controller of the application
 */

import searchController from "./modules/searchController.js";
import databaseRequest from "./modules/databaseRequest.js";
import resultsController from "./modules/resultsController.js";

searchController.init();
databaseRequest.search("fight", function(response) {
    console.debug(response);
});
resultsController.init();
