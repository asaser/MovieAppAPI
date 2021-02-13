## MovieAppAPI

# Program
# https://asaser.github.io/MovieAppAPI/

# About the application
The application allows you to search for any movie and check the technical data of that movie (ID movie in imdb website, type, year production) I used an API which retrieves information from the imdb website.

# About APP on the technical side
When creating this project, I used only JavaScript and the lightweight jQuery library. Connecting to an external API I used axios because I wanted to see the difference between axios and ajax. Also in this project i used bootstrap to style elements.

# Instalation
Please download all files contained in github and open them in some program, eg Visual Studio Code or run main index.html file in console

# Checking errors
Automatic error checking of the application using the console

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
    
# JEST unit testing
1. Install to the project
2. JEST (npm install --save-dev is)
3. jasmin (npm install -g jasmine)
4. Adding the test script to e.g. a .json file testScript: "jest"

Create a special file for testing

# Testing (tests are not implemented in the source code of the program)

I. At the beginning you must add

describe('getContent()', () => {
    ...the rest of the code...
    };
    
II. The rest of the code

test 1: check working API

it('API', async () => {
    mockedAxios.mockResolvedValueOnce({ data: [{test:'WORKD'}]})
    const data = await getContent(searchMovie)
    expect(mockedAxios).toBeCalledTimes(1)
  })
  };

test 2: check time to get result by API

it('time to return', async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
    const time = await getContent();
    console.log(time);
  });
  
Checking the result of a single test by entering the command into the terminal: 

npm run testScript name
