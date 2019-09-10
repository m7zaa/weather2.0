import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { WeatherService } from './weather-service';
import { GiphyGenerator } from './weather-service';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
  $('#location').val("");


    let weatherService = new WeatherService(city);
    let giphyGenerator = new GiphyGenerator(); // create instance of WeatherService class. Change these values to custom your page.
    let promise = weatherService.getWeatherByCity(city);  // call the instance method and pass in user input.
    let promise2 = giphyGenerator.randomGiphy();

    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
      //target the img value and display with a img src to display
      //weather app display results.------\
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });



    promise2.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
      //target the img value and display with a img src to display
      $('.giphy').html(`<img src=${body.data.images.original.url}>`);


    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });





  });

});
