// //Spoonacular API documentation: https://spoonacular.com/food-api/docs
// //Spoonacular Authentication: https://spoonacular.com/food-api/docs#Authentication
// var page2Div = document.createElement('div')
// var page3Div = document.createElement('div')
// var page4Div = document.createElement('div')

// var page1Div = document.querySelector('.page-1')

// var cuisineBtn = document.getElementById('cuisine')
// var mainDiv = document.querySelector('main')

// var frenchStyle = document.getElementById('french')
// var spoonApiKey = 'c95dcc6d89ab47a384f18b2f989d7286'

// var ids = [] //might need to use array to remove duplicate id
// //var recipeInfoUrl = 'https://api.spoonacular.com/recipes/' + id +'/information'



// function page2handler (event){

//     page1Div.style.display = 'none'

//     page2Div.setAttribute('class','page-2')

//     var french = document.createElement('button')
//     var american = document.createElement('button')
//     var german = document.createElement('button')
//     var italian = document.createElement('button')

//     mainDiv.appendChild(page2Div)
//     page2Div.appendChild(french)
//     page2Div.appendChild(american)
//     page2Div.appendChild(german)
//     page2Div.appendChild(italian)

//     french.innerHTML = 'French'
//     american.innerHTML = 'American'
//     german.textContent = 'German'
//     italian.textContent = 'Italian'

//     console.log(event.target.textContent) //cuisine

//     $("button").click(page3handler) //how to get ID of button user just clicked? 
//     //$("button").click(getRecipeName)
// }


// function page3handler(event){

//     page2Div.style.display = 'none';

//     page3Div.setAttribute('class','page-3')


//     console.log(event.target.textContent) // French 

//     //cuisineHeader.textContent = 'Bake Ratatouille' //for testing, will delete later 

//     var cuisine = event.target.textContent
    
//     var cuisineUrl = 'https://api.spoonacular.com/recipes/complexSearch?' +'&cuisine=' + cuisine + '&apiKey=' + spoonApiKey
    
//     console.log(cuisineUrl)

//     function getRecipeName(){
//         fetch(cuisineUrl)
//         .then(function(response){
//             return response.json()
//         })
//         .then(function(recipeName){
//             console.log(recipeName)
            

//             for (var i=0; i<10; i++){ //limited to 10 per page, butwhy can't use i<recipeName.length? 
//                 var cuisineHeader = document.createElement('h2')
//                 var cuisineImg = document.createElement('img')
//                 var cuisineRecipe = document.createElement('p') // not sure if we want to add here

//                 cuisineHeader.textContent = recipeName.results[i].title
//                 cuisineImg.src=recipeName.results[i].image
//                 cuisineHeader.setAttribute('id',recipeName.results[i].id)

//                 cuisineHeader.addEventListener('click',function(){
//                     console.log(this)
//                     var id = this.getAttribute('id')

//                     console.log(id)
//                     page4handler(id)
//                 })

//                 mainDiv.appendChild(page3Div)
//                 page3Div.appendChild(cuisineHeader)
//                 page3Div.appendChild(cuisineImg)
//                 page3Div.appendChild(cuisineRecipe)

//             }

//            // cuisineHeader.addEventListener('click',page4handler)
            
            
//         })
//     }
//     getRecipeName()
// }


// function page4handler(id){
//     page2Div.style.display= 'none';
//     page3Div.style.display= 'none';

//     page4Div.setAttribute('class','page-4')

//     var cuisineHeader = document.createElement('h2')
//     var cuisineImg = document.createElement('img')
//     var cuisineRecipe = document.createElement('p')

//     mainDiv.appendChild(page4Div)
//     page4Div.appendChild(cuisineHeader)
//     page4Div.appendChild(cuisineImg)
//     page4Div.appendChild(cuisineRecipe)

//     //var id = localStorage.getItem('id')

//     var recipeInfoUrl = 'https://api.spoonacular.com/recipes/' + id +'/information?' + '&apiKey=' + spoonApiKey

//     fetch(recipeInfoUrl)
//     .then(function(response){
//         return response.json()
// //List of Parameters
// var cuisine;
// var protein;
// var dessert;

// //Spoonacular API Information
// var spoonUrl = 'https://api.spoonacular.com/recipes/complexSearch?query=' + protein + '&cuisine=' + cuisine;
// var spoonApiKey = 'bff7143ee08c4a6aa8d53b4a91fc839f'

// //searchSpoon function fetches response from Spoonacular API
// var searchSpoon = function () {
//   fetch(spoonUrl)
//     .then(function (response) {
//       if (!response.ok) {
//         throw response.json();
//       }

//       return response.json();
//     })
//     .then(function(recipeInfo){
//         //console.log(recipeInfo)
//         cuisineHeader.textContent = recipeInfo.title
//         cuisineImg.src=recipeInfo.image
//         cuisineRecipe.innerHTML=recipeInfo.summary
//     })

// }


// cuisineBtn.addEventListener('click',page2handler)





//     .then(function (response) {
//       console.log('Response is good!');
//       console.log(response);
//     });


// //Gets value of protein choice
// var choiceOneSection = document.getElementById('choice-1-section');

// choiceOneSection.addEventListener('click', function (event) {
//   var proteinChoice = event.target; //the button clicked
//   protein = proteinChoice.innerHTML; //the string value of button 
//   console.log(protein);
// });

// // // Gets value for cuisine choice
// // var choiceTwoSection = document.getElementById('choice-2-section');

// // choiceTwoSection.addEventListener('click', function (event) {
// //   var cuisineChoice = event.target;
// //   cuisine = cuisineChoice.innerHTML;
// //   console.log(cuisine);
// // })

// //Gets value of dessert choice
// // var choiceThreeSection = document.getElementById('choice-3-section');
// // choiceThreeSection.addEventListener('click', function (event) {
// //   var dessertChoice = event.target;
// //   dessert = dessertChoice.innerHTML;
// //   console.log(dessert);
// // })
