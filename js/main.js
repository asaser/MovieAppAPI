// all script run in stack
$(document).ready(() => {
    $("#findMovie").submit((e) => {

        // write text from input
        let searchMovie = $('#searchMovie').val();

        // function call
        getContent(searchMovie);

        // stop submitting the file
        e.preventDefault();
    });
});

//create my variables
const APIkey = "869e4dd6";

// body function with all values
function getContent(searchMovie) {


    // Make a request for a user with a given ID by search strings
    axios.get('https://www.omdbapi.com?s=' + searchMovie + "&apikey=" + APIkey)

        .then(function (response) {
            // handle success
            console.log(response);

            let mainValues = response.data.Search;

            let show = '';
            //get values to content
            $.each(mainValues, (index, mainValue) => {
                //loop for all kind movies to show their
                show += `

            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center">
                        <h2 class="font-weight-bold mb-3">${mainValue.Title}</h2>

                        <div class="text-dark ulItem">
                            <ul class="list-group">
                            <li class="list-group-item liGroupItem"><p class="text-uppercase">type</p> <p>Movie or Series: ${mainValue.Type}</p></li>
                            <li class="list-group-item liGroupItem"><p class="text-uppercase">Release date</p> <p>Year: ${mainValue.Year}</p></li>
                            <li class="list-group-item liGroupItem"><p class="text-uppercase">id</p> <p>Movie's ID on IMDB: ${mainValue.imdbID}</p></li>
                            </ul>
                        </div>
                        <a href="http://imdb.com/title/${mainValue.imdbID}" target="_blank" class="btn btn-primary btn-lg btn-block mb-2">View on IMDB website</a>

                    </div>

                    <div class="col-md-6 text-center">
                        <img class="jumbotron" src="${mainValue.Poster}">
                    </div>
                </div>
            </div>

                `;
            });
            //callback all content code
            $('#movieContent').html(show);

        })

        .catch(function (error) {

            // handle error
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                console.log(error);

            } else if (error.request) {

                console.log(error.request);
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log('Error', error.message);
            }
            console.log(error);
        })


        .then(function () {
            // always executed
        });
}