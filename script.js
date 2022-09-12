//List of Parameters
var cuisine;
var protein;
var dessert;

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

//Gets value of protein choice
var choiceOneSection = document.getElementById('choice-1-section');

choiceOneSection.addEventListener('click', function (event) {
  var proteinChoice = event.target; //the button clicked
  protein = proteinChoice.innerHTML; //the string value of button 
  console.log(protein);
});

// Gets value for cuisine choice
var choiceTwoSection = document.getElementById('choice-2-section');

choiceTwoSection.addEventListener('click', function (event) {
  var cuisineChoice = event.target;
  cuisine = cuisineChoice.innerHTML;
  console.log(cuisine);
})

//Gets value of dessert choice
var choiceThreeSection = document.getElementById('choice-3-section');
choiceThreeSection.addEventListener('click', function (event) {
  var dessertChoice = event.target;
  dessert = dessertChoice.innerHTML;
  console.log(dessert);
})