/*
 *  utility for controlling results list
 */

var resultsController = (function() {
    var resultsContainer = document.getElementById("js-searchResults");

    // displays search results using built in template
    var displayResults = function(results) {
        resultsContainer.innerHTML = "";
        for (var i = 0; i < results.length; i++) {
            if (results[i].poster_path) {
                resultsContainer.innerHTML = resultsContainer.innerHTML +
                '<a href="http://www.themoviedb.org/movie/' + results[i].id + '" target="_blank" class="m-contentBox_item">' +
                    '<div class="m-contentBox_image">' +
                        '<img src="http://image.tmdb.org/t/p/w154' + results[i].poster_path + '" alt="' + results[i].original_title + '">' +
                    '</div>' +
                    '<div class="m-contentBox_content">' +
                        '<div class="m-contentBox_title">' + 
                            '<h2>' + results[i].original_title + '</h2>' +
                        '</div>' +
                    '</div>' +
                '</a>';
            }
        }
    }

    // displays error in results
    var displayError = function(error) {
        resultsContainer.innerHTML = '<p>' + error + '</p>';
    }
    
    return {
        displayResults: displayResults,
        displayError: displayError
    }
})();

module.exports = resultsController;
