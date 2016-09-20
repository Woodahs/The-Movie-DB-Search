/*
 *  utility for connection with movie database
 */

var databaseRequest = (function() {
    var init = function() {
        console.log("databaseRequest initialized");
    }
    return {
        init: init
    }
})();

module.exports = databaseRequest;
