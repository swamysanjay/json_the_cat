const request = require('request');

const fetchDescription = function(breedName) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, function(error, response, body) {
    if (error) {
      return console.error('error:', error); // Print the error if one occurred
    }
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
    const breed = JSON.parse(body)[0];
    
    if (breed) {
      console.log('body:', breed.description); // Print the HTML for the Google homepage.
    } else {
      console.log("Couldn't find the breed");
    }
  });
};

const breed = process.argv[2];
fetchDescription(breed);

