import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './css/styles.css';
import GifSearch from './js/giphy'


function getElements(response) {

  if(response) {
    $('#showGif').src(`${response}`);
    console.log("getElements", response);  
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(choice) {
  try{
    console.log("choice",choice)
    const response = await GifSearch.getGif(choice);
    console.log("makeApiCall",response.data[0].images.original.url);
    getElements(response.data[0].images.original.url);
  }
  catch(err) {
    console.log("await failed", err);
  }
}
//added a try and catch to the async function 

$(document).ready(function() {
  console.log("document.ready")
  $('#gif-form').submit(function(event) {
    // const inputtedChoice = $("gif-parameter option: selected").val();
    event.preventDefault();
    let choice = $("#gif").val("");
    console.log(choice);
    makeApiCall(choice)
    $(".showGif").html(choice);
    $(".showErrors").text(`ERROR`);
  });
});












// fetch("https://tarot.p.rapidapi.com/fetch/", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "a072a3dfabmshafad6132191eec7p195c47jsn8acf2904356e",
// 		"x-rapidapi-host": "tarot.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// let url = 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=10'


// const request = new XMLHttpRequest();

// request.open("GET", url);
// request.send();

// request.onload = () => {
//   console.log(request);
//   if(request.status === 200 && request.readyState === 4) {
//     let info = JSON.parse(request.response)
//     console.log("let", info)
    
//   } else {
//     console.log("error", request.status)
//   }
// }

// fetch(url)
//   .then(response => {
//     return response.json()
//   })
//   .then(json=>{
//     console.log("the object fetched", json)
//   })

// async function getWeather(){
//   let response = await fetch(url);
//   let data = await response.json();
//   return data;
// }

// getWeather().then(tarotTenCards=>{
//   console.log("card meaning", tarotTenCards.cards[0].meaning_up)
// })


/*
promise2.then(function(response) {
  const body = JSON.parse(response);
  console.log(body);
  $('.showHumidity').text(`The humidity is ${body.main.humidity}%`);
  $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
  $('.showPressure').text(`The pressure is ${body.main.pressure} inHg²`);
  $('.showClouds').text(`The cloud coverage is: ${body.weather[0].description}`)
  $('.coordinates').text(`The coordinate location is ${body.coord.lat}, ${body.coord.lon} `)
  $('.showErrors').text("");
}, function(error) {
  $('.showErrors').text(`There was an error processing your request: ${error}`);
  $('showHumidity').text("");
  $('.showTemp').text("");
  $('.showPressure').text("");
  $('.showClouds').text("");
  $('.coordinates').text("");
});
*/
