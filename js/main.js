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
const url = 'http://www.omdbapi.com?';

// body function with all values
function getContent(searchMovie) {


    // Make a request for a user with a given ID by search strings
    axios.get(url + 's=' + searchMovie + "&apikey=" + APIkey)

        .then(function (response) {
            // handle success
            console.log(response);

            let mainValues = response.data.Search;

            let show = '';
            //get values to content
            $.each(mainValues, (index, mainValue) => {

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