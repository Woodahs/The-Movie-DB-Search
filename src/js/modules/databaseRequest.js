/*
 *  utility for connection with movie database
 */

var databaseRequest = (function() {
    // API key from The Movie DB
    var apiKey = "cd3830f6d23cb81d7f9def86dce69b68";

    // function for searching movie in database
    var search = function(query, onSuccess, onError) {
        var request = new XMLHttpRequest();
        var requestUrl = "http://api.themoviedb.org/3/search/movie?query=" + query + "&api_key=" + apiKey;

        request.open('POST', requestUrl);

        request.setRequestHeader('Accept', 'application/json');

        request.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    onSuccess(JSON.parse(this.response));
                } else {
                    onError(this.statusText);
                }
            }
        };

        request.send();
    }

    return {
        search: search
    }
})();

module.exports = databaseRequest;
