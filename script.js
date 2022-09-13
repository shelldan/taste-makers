//Erica's Task - creating .fetch to spoonacular API

//Spoonacular API documentation: https://spoonacular.com/food-api/docs
//Spoonacular Authentication: https://spoonacular.com/food-api/docs#Authentication
var page2Div = document.createElement("div"); //create dynamic div html element
var page3Div = document.createElement("div"); //create dynamic div html element
var page4Div = document.createElement("div"); //create dynamic div html element

var page1Div = document.querySelector(".page-1"); //selecting DOM element

var cuisineBtn = document.getElementById("cuisine"); //selecting DOM element
var mainDiv = document.querySelector("main"); //selecting DOM element

var frenchStyle = document.getElementById("french"); //selecting DOM element
var spoonApiKey = "c95dcc6d89ab47a384f18b2f989d7286"; //key

var ids = []; //placeholder - might need to use array to remove duplicate id

//var recipeInfoUrl = 'https://api.spoonacular.com/recipes/' + id +'/information'

//once the user click the 'Cuisine' button, it calls the following function
function page2handler(event) {
  page1Div.style.display = "none"; //hide page 1

  page2Div.setAttribute("class", "page-2"); // create page 2

  var french = document.createElement("button"); //create DOM element (button)
  var american = document.createElement("button"); //create DOM element (button)
  var german = document.createElement("button"); //create DOM element (button)
  var italian = document.createElement("button"); //create DOM element (button)

  mainDiv.appendChild(page2Div); //parent append child
  page2Div.appendChild(french); //parent append child
  page2Div.appendChild(american); //parent append child
  page2Div.appendChild(german); //parent append child
  page2Div.appendChild(italian); //parent append child

  french.innerHTML = "French"; //assign innerHTML to button
  american.innerHTML = "American"; //assign innerHTML to button
  german.textContent = "German"; //assign innerHTML to button
  italian.textContent = "Italian"; //assign innerHTML to button

  console.log(event.target.textContent); //could remove it; used to check the button the user clicks

  $("button").click(page3handler); // once the user click on any button, it will call page3handler function
}

//the function is handling the page3
function page3handler(event) {
  page2Div.style.display = "none"; //hide page 1

  page3Div.setAttribute("class", "page-3"); // create page 3

  console.log(event.target.textContent); // could remove it; used to check the button the user clicks

  var cuisine = event.target.textContent; // get the content from the button

  var cuisineUrl =
    "https://api.spoonacular.com/recipes/complexSearch?" +
    "&cuisine=" +
    cuisine +
    "&apiKey=" +
    spoonApiKey; //api address

  console.log(cuisineUrl); // could remove it

  //fetch request
  function getRecipeName() {
    fetch(cuisineUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (recipeName) {
        console.log(recipeName);

        //the fetch request return 10 items per page, so I limited to 10 items/page
        for (var i = 0; i < 10; i++) {
          //limited to 10 per page, but why can't use i<recipeName.length?
          var cuisineHeader = document.createElement("h2"); //create new element
          var cuisineImg = document.createElement("img"); //create new element
          var cuisineRecipe = document.createElement("p"); // create new element

          cuisineHeader.textContent = recipeName.results[i].title; //iterate through the 10 items
          cuisineImg.src = recipeName.results[i].image; //iterate through the 10 items
          cuisineHeader.setAttribute("id", recipeName.results[i].id); //iterate through the 10 items

          cuisineHeader.addEventListener("click", function () {
            //once the user click on the header, it goes to page 4
            console.log(this);
            var id = this.getAttribute("id");

            console.log(id);
            page4handler(id); //pass the id (variable) to page4handler
          });

          mainDiv.appendChild(page3Div); //parent append child
          page3Div.appendChild(cuisineHeader); //parent append child
          page3Div.appendChild(cuisineImg); //parent append child
          page3Div.appendChild(cuisineRecipe); //parent append child
        }

        // cuisineHeader.addEventListener('click',page4handler)
      });
  }
  getRecipeName(); //call the getRecipeName function
}

//the function is handling the page3
function page4handler(id) {
  page2Div.style.display = "none"; //hide page 2
  page3Div.style.display = "none"; //hide page 3

  page4Div.setAttribute("class", "page-4"); //create page 4

  var cuisineHeader = document.createElement("h2"); //create element
  var cuisineImg = document.createElement("img"); //create element
  var cuisineRecipe = document.createElement("p"); //create element

  mainDiv.appendChild(page4Div); // parent append child
  page4Div.appendChild(cuisineHeader); // parent append child
  page4Div.appendChild(cuisineImg); // parent append child
  page4Div.appendChild(cuisineRecipe); // parent append child

  //var id = localStorage.getItem('id')

  var recipeInfoUrl =
    "https://api.spoonacular.com/recipes/" +
    id +
    "/information?" +
    "&apiKey=" +
    spoonApiKey; //api

  //fetch request
  fetch(recipeInfoUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (recipeInfo) {
      //console.log(recipeInfo)
      cuisineHeader.textContent = recipeInfo.title;
      cuisineImg.src = recipeInfo.image;
      cuisineRecipe.innerHTML = recipeInfo.summary;
    });
}

// once the user click the 'Cuisine' button, it goes to page2
cuisineBtn.addEventListener("click", page2handler);
