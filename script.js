//Spoonacular API documentation: https://spoonacular.com/food-api/docs
//Spoonacular Authentication: https://spoonacular.com/food-api/docs#Authentication
var page2Div = document.createElement("div"); //create dynamic div html element
var page3Div = document.createElement("div"); //create dynamic div html element
var page4Div = document.createElement("div"); //create dynamic div html element
var page5Div = document.createElement("div"); //create dynamic div html element
var page6Div = document.createElement("div"); //create dynamic div html element
var page7Div = document.createElement("div"); //create dynamic div html element
var homeBtn = document.createElement("button")
homeBtn.textContent = "Home";
var favoriteDiv = document.createElement('div')
var favoriteList = document.createElement('button')
var divOfChosen //!

var page1Div = document.querySelector(".page-1"); //selecting DOM element

var cuisineBtn = document.getElementById("cuisine"); //selecting DOM element
var dessertBtn = document.getElementById("dessert");
var backBtn = document.getElementById("back");
var mainDiv = document.querySelector("main"); //selecting DOM element
var favoriteHome = document.getElementById("favoriteHome")
var clearBtn = document.getElementById("clear")

var frenchStyle = document.getElementById("french"); //selecting DOM element

var spoonApiKey = "185e0d8912b7436abe73d61ec0df8d3c"; //key
var youTubeApiKey = "AIzaSyACILGJ0q_INibtI19CGtziAvBtf0O-d_I"; //youtube API key

var favoriteArray = []; //to hold array for favorite recipe

//var recipeInfoUrl = 'https://api.spoonacular.com/recipes/' + id +'/information'

//refresh the page
function refreshPage() {
  window.location.reload()
}

//once the user click the 'Cuisine' button, it calls the following function
function page2handler(event) {
  page1Div.style.display = "none"; //hide page 1

  page2Div.setAttribute("class", "page-2"); // create page 2

  var french = document.createElement("button"); //create DOM element (button)
  var american = document.createElement("button"); //create DOM element (button)
  var german = document.createElement("button"); //create DOM element (button)
  var italian = document.createElement("button"); //create DOM element (button)
  var backBtn = document.createElement("button"); //create DOM element (button)
  french.setAttribute("class", "page2btn"); //sets Page 2 Btn class
  american.setAttribute("class", "page2btn"); //sets Page 2 Btn class
  german.setAttribute("class", "page2btn"); //sets Page 2 Btn class
  italian.setAttribute("class", "page2btn"); //sets Page 2 Btn class

  mainDiv.appendChild(page2Div); //parent append child
  page2Div.appendChild(french); //parent append child
  page2Div.appendChild(american); //parent append child
  page2Div.appendChild(german); //parent append child¡
  page2Div.appendChild(italian); //parent append child
  page2Div.appendChild(homeBtn);
  homeBtn.addEventListener("click", refreshPage);
  homeBtn.setAttribute("class", "page2btn"); //sets Page 2 Btn class



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
          cuisineHeader.setAttribute("class", "headereffect"); //sets headereffect class
          

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
          page3Div.appendChild(homeBtn); //!!!
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
  var cuisineVideo = document.createElement("div"); //create element
  var favoriteBtn = document.createElement("button"); //creates the favorite ❤ button
  var backBtn = document.createElement("button"); //create DOM element (button)
  favoriteBtn.textContent = "Favorite ❤"; //sets favoriteBtn text to 'Favorite ❤'
  favoriteBtn.setAttribute("Id", "favorite-btn"); //sets favoriteBtn class to favorite-btn
  homeBtn.setAttribute("class", "home-btn"); //sets homeBtn class
  homeBtn.textContent = "Home";



  cuisineRecipe.setAttribute("class", "recipe");//sets recipe class to <p>


  mainDiv.appendChild(page4Div); // parent append child
  page4Div.appendChild(cuisineHeader); // parent append child

  page4Div.appendChild(cuisineImg); // parent append child
  page4Div.appendChild(cuisineRecipe); // parent append child

  homeBtn.addEventListener("click", refreshPage);

  var recipeInfoUrl =
    "https://api.spoonacular.com/recipes/" +
    id +
    "/information?" +
    "&apiKey=" +
    spoonApiKey; //spoonacular API

  console.log(recipeInfoUrl)

  //fetch request for spoonacular API
  fetch(recipeInfoUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (recipeInfo) {
      console.log(recipeInfo);
      cuisineHeader.textContent = recipeInfo.title; //add textContent to the header, recipeInfo.title will return the name of the recipe
      cuisineImg.src = recipeInfo.image; //add image to the image HTML, recipeInfo.image will return the src link
      cuisineRecipe.innerHTML = recipeInfo.summary; // add innerHTML to the body, recipeInfo.summary will return the text summary of the recipe

      // var youTubeApiKey = "AIzaSyCPVbJouFqqk56R4EteKzKMhY703BMSE_M"; //youtube API key
      var youTubeUrl =
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" +
        cuisineHeader.textContent +
        "&key=" +
        youTubeApiKey; // maxResults = 1 will return 1 video, q = cuisineHeader.textContent will return the video based on the recipe name

      console.log(cuisineHeader.textContent); //could remove later

      //fetch request for youTubeApi
      fetch(youTubeUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          console.log(data.items[0].id.videoId); //data.items[0].id.videoId will return the youtube videoId and we will use this inside the obj.video.value
          var videoId = data.items[0].id.videoId; //create a variable to store the youtube videoId and we will use this inside the obj.video.value
          var obj = {
            video: {
              value:
                "<iframe title='YouTube video player' type='text/html' width='640' height='390' src='https://www.youtube.com/embed/" +
                videoId +
                "' frameborder='0' allowFullScreen></iframe>", //create the obj object, and we will get the videoId from the variable we just created above
            },
          };

          console.log(obj.video.value); // could remove later
          //    document.write(obj.video.value) // remove
          cuisineVideo.innerHTML = obj.video.value; // add the obj.video.value to cusineVideo
          page4Div.appendChild(cuisineVideo); //parent append child
        });
    });

  //save function to store the favorite to localStorage 
  function save() {
    //get favorite from the header, single entry
    var recipeFavorite = cuisineHeader.textContent

    //if there is nothing saved at the start then save an empty array
    if (localStorage.getItem('favorite') == null) {
      localStorage.setItem('favorite', '[]')
    }

    //get old data and slap it to the new data
    favoriteArray = JSON.parse(localStorage.getItem('favorite'))

    if (!favoriteArray) {
      favoriteArray = [recipeFavorite]
    }

    var favoriteExist = favoriteArray.findIndex(function (element) {
      return element === recipeFavorite
    })

    console.log(favoriteExist)
    if (favoriteExist === -1) {

      favoriteArray.push(recipeFavorite)
    }

    //save the old + new data to local storage
    localStorage.setItem('favorite', JSON.stringify(favoriteArray))

  }

  page4Div.appendChild(favoriteBtn); // appends favorite button to the header
  page4Div.appendChild(homeBtn);
  // when favorite button clicked --> save name of the recipe to local storage 
  favoriteBtn.addEventListener("click", save)

  homeBtn.addEventListener("click", refreshPage)
}


function page5handler(event) {
  page1Div.style.display = "none"; //hide page 1
  page2Div.style.display = "none"; //hide page 2
  page3Div.style.display = "none"; //hide page 3
  page4Div.style.display = "none"; //hide page 4

  page5Div.setAttribute("class", "page-5"); // create page 2

  var cakes = document.createElement("button"); //create DOM element (button)
  var cookies = document.createElement("button"); //create DOM element (button)
  var pies = document.createElement("button"); //create DOM element (button)

  mainDiv.appendChild(page5Div); //parent append child
  page5Div.appendChild(cakes); //parent append child
  page5Div.appendChild(cookies); //parent append child
  page5Div.appendChild(pies); //parent append child
  page5Div.appendChild(homeBtn);
  homeBtn.addEventListener("click", refreshPage);

  cakes.innerHTML = "Cakes"; //assign innerHTML to button
  cookies.innerHTML = "Cookies"; //assign innerHTML to button
  pies.innerHTML = "Pies"; //assign innerHTML to button

  console.log(event.target.textContent); //could remove it; used to check the button the user clicks

  $("button").click(page6handler); // once the user click on any button, it will call page3handler function
  homeBtn.addEventListener("click", refreshPage); //home button
}

//the function is handling the page6
function page6handler(event) {
  page2Div.style.display = "none"; //hide page 2
  page3Div.style.display = "none"; //hide page 3
  page4Div.style.display = "none"; //hide page 4
  page5Div.style.display = "none"; //hide page 5

  page6Div.setAttribute("class", "page-6"); // create page 6

  console.log(event.target.textContent); // could remove it; used to check the button the user clicks

  var dessert = event.target.textContent; // get the content from the button

  var dessertUrl =
    "https://api.spoonacular.com/recipes/complexSearch?" +
    "type=dessert&query=" +
    dessert +
    "&apiKey=" +
    spoonApiKey; //api address

  console.log(dessertUrl); // could remove it

  //fetch request
  function getRecipeName() {
    fetch(dessertUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (recipeName) {
        console.log(recipeName);

        //the fetch request return 10 items per page, so I limited to 10 items/page
        for (var i = 0; i < 10; i++) {
          //limited to 10 per page, but why can't use i<recipeName.length?
          var dessertHeader = document.createElement("h2"); //create new element
          var dessertImg = document.createElement("img"); //create new element
          var dessertRecipe = document.createElement("p"); // create new element

          dessertHeader.textContent = recipeName.results[i].title; //iterate through the 10 items
          dessertImg.src = recipeName.results[i].image; //iterate through the 10 items
          dessertHeader.setAttribute("id", recipeName.results[i].id); //iterate through the 10 items

          dessertHeader.addEventListener("click", function () {
            //once the user click on the header, it goes to page 4
            console.log(this);
            var id = this.getAttribute("id");

            console.log(id);
            page7handler(id); //pass the id (variable) to page4handler
          });

          mainDiv.appendChild(page6Div); //parent append child
          page6Div.appendChild(dessertHeader); //parent append child
          page6Div.appendChild(dessertImg); //parent append child
          page6Div.appendChild(dessertRecipe); //parent append child
          page6Div.appendChild(homeBtn);
          homeBtn.addEventListener("click", refreshPage);
        }

        // cuisineHeader.addEventListener('click',page4handler)
      });
  }
  getRecipeName(); //call the getRecipeName function
  homeBtn.addEventListener("click", refreshPage); //add home button
}

//the function is handling the page7
function page7handler(id) {
  page2Div.style.display = "none"; //hide page 2
  page3Div.style.display = "none"; //hide page 3
  page4Div.style.display = "none"; //hide page 4
  page5Div.style.display = "none"; //hide page 5
  page6Div.style.display = "none"; //hide page 6

  page7Div.setAttribute("class", "page-7"); //create page 7

  var dessertHeader = document.createElement("h2"); //create element
  var dessertImg = document.createElement("img"); //create element
  var dessertRecipe = document.createElement("p"); //create element
  var dessertVideo = document.createElement("div"); //create element
  var favoriteBtn = document.createElement("button"); //creates the favorite ❤ button
  favoriteBtn.textContent = "Favorite ❤"; //sets favoriteBtn text to 'Favorite ❤'
  favoriteBtn.setAttribute("Id", "favorite-btn"); //sets favoriteBtn class to favorite-btn
  homeBtn.setAttribute("class", "home-btn");//sets home button
  homeBtn.textContent = "Home"
  dessertRecipe.setAttribute("class", "recipe");//sets recipe class

  mainDiv.appendChild(page7Div); // parent append child
  page7Div.appendChild(dessertHeader); // parent append child
  page7Div.appendChild(dessertImg); // parent append child
  page7Div.appendChild(dessertRecipe); // parent append child


  var dessertRecipeInfoUrl =
    "https://api.spoonacular.com/recipes/" +
    id +
    "/information?" +
    "&apiKey=" +
    spoonApiKey; //spoonacular API

  //fetch request for spoonacular API
  fetch(dessertRecipeInfoUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (dessertRecipeInfo) {
      console.log(dessertRecipeInfo);
      dessertHeader.textContent = dessertRecipeInfo.title; //add textContent to the header, recipeInfo.title will return the name of the recipe
      dessertImg.src = dessertRecipeInfo.image; //add image to the image HTML, recipeInfo.image will return the src link
      dessertRecipe.innerHTML = dessertRecipeInfo.summary; // add innerHTML to the body, recipeInfo.summary will return the text summary of the recipe

      // var youTubeApiKey = "AIzaSyCPVbJouFqqk56R4EteKzKMhY703BMSE_M"; //youtube API key
      var youTubeUrlDessert =
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" +
        dessertHeader.textContent +
        "&key=" +
        youTubeApiKey; // maxResults = 1 will return 1 video, q = cuisineHeader.textContent will return the video based on the recipe name

      console.log(youTubeUrlDessert)
      console.log(dessertHeader.textContent); //could remove later

      //fetch request for youTubeApi
      fetch(youTubeUrlDessert)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          console.log(data.items[0].id.videoId); //data.items[0].id.videoId will return the youtube videoId and we will use this inside the obj.video.value
          var videoId = data.items[0].id.videoId; //create a variable to store the youtube videoId and we will use this inside the obj.video.value
          var obj = {
            video: {
              value:
                "<iframe title='YouTube video player' type='text/html' width='640' height='390' src='https://www.youtube.com/embed/" +
                videoId +
                "' frameborder='0' allowFullScreen></iframe>", //create the obj object, and we will get the videoId from the variable we just created above
            },
          };

          console.log(obj.video.value); // could remove later
          //    document.write(obj.video.value) // remove
          dessertVideo.innerHTML = obj.video.value; // add the obj.video.value to cusineVideo
          page7Div.appendChild(dessertVideo); //parent append child
        });
      homeBtn.addEventListener("click", refreshPage);
    });

  //save function to store the favorite to localStorage 
  function save() {
    //get favorite from the header, single entry
    var recipeFavorite = dessertHeader.textContent

    //if there is nothing saved at the start then save an empty array
    if (localStorage.getItem('favorite') == null) {
      localStorage.setItem('favorite', '[]')
    }

    //get old data and slap it to the new data
    favoriteArray = JSON.parse(localStorage.getItem('favorite'))

    if (!favoriteArray) {
      favoriteArray = [recipeFavorite]
    }

    var favoriteExist = favoriteArray.findIndex(function (element) {
      return element === recipeFavorite
    })

    console.log(favoriteExist)
    if (favoriteExist === -1) {

      favoriteArray.push(recipeFavorite)
    }

    //save the old + new data to local storage
    localStorage.setItem('favorite', JSON.stringify(favoriteArray))

  }

  page7Div.appendChild(favoriteBtn);
  page7Div.appendChild(homeBtn);

  // when favorite button clicked --> save name of the recipe to local storage 
  favoriteBtn.addEventListener("click", save)

  homeBtn.addEventListener("click", refreshPage)

}

//how to remove the duplicate value? 
function display() {
  //if there is indeed data then continue 
  if (localStorage.getItem('favorite') != null) {

    //store the localStorage.getItem('favorite') to a variable favoriteArray; the || [] replaces possible null from localStorage with empty array
    favoriteArray = JSON.parse(localStorage.getItem('favorite')) || [];
    console.log(favoriteArray)

    //iterate through the favoriteItem 
    for (var i = 0; i < favoriteArray.length; i++) {
      var favoriteDiv = document.createElement('div')
      var favoriteList = document.createElement('button')
      favoriteList.textContent = favoriteArray[i]
      favoriteHome.appendChild(favoriteDiv)
      favoriteDiv.appendChild(favoriteList)

      favoriteList.addEventListener('click', function () {
        // var chosenFavorite = event.target.textContent
        console.log(this.innerText)
        var favoriteName = this.innerText
        displayFavorite(favoriteName)
      })
    }
  }
}


//displayFavorite Recipe instruction and video 
function displayFavorite(favoriteName) {
  console.log(favoriteName)
  // favoriteDiv = document.createElement('div')
  // favoriteList = document.createElement('button')
  favoriteHome.appendChild(favoriteDiv)
  favoriteDiv.appendChild(favoriteList)


  var youTubeUrl =
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" +
    favoriteName +
    "&key=" +
    youTubeApiKey;

  console.log(youTubeUrl)

  fetch(youTubeUrl)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      console.log(data.items[0].id.videoId)
      var videoId = data.items[0].id.videoId; //create a variable to store the youtube videoId and we will use this inside the obj.video.value
      var obj = {
        video: {
          value:
            "<iframe title='YouTube video player' type='text/html' width='640' height='390' src='https://www.youtube.com/embed/" +
            videoId +
            "' frameborder='0' allowFullScreen></iframe>", //create the obj object, and we will get the videoId from the variable we just created above
        },
      };
      console.log(obj.video.value)
      var favoriteVideo = document.createElement('p')
      favoriteVideo.innerHTML = obj.video.value
      favoriteList.appendChild(favoriteVideo)

      // for (var j = 0; j<favoriteList.length; j++){
      //   favoriteList[j].appendChild(favoriteVideo[j])
      // }
      
    })

}


//once the user clicks the 'Cuisine' button, it goes to page2
cuisineBtn.addEventListener("click", page2handler);

//once the user clicks the 'Dessert' button, it goes to page5
dessertBtn.addEventListener("click", page5handler);

//always display even refresh the page 
display()