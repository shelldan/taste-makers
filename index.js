let x = 5;
let y = 10;
let sum = (x + y);

//Erica's Task - creating .fetch to spoonacular API

//List of Parameters
var cuisine;
var protein; //? Not sure about how to add this to API on line 11

//Spoonacular API Information
var spoonUrl = 'https://api.spoonacular.com/recipes/complexSearch?query=' + protein + '&cuisine=' + cuisine;
var spoonApiKey = 'bff7143ee08c4a6aa8d53b4a91fc839f'

//searchSpoon function fetches response from Spoonacular API
var searchSpoon = function () {
  fetch(spoonUrl)
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      }

      return response.json();
    })

    .then(function (response) {
      console.log('Response is good!');
      console.log(response);
    });
};