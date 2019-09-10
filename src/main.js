import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { WeatherService } from './weather-service';

$(document).ready(function() {
  $('#weatherLocation').click(function() {


    let weatherService = new WeatherService();  // create instance of WeatherService class. Change these values to custom your page.
    let promise = weatherService.getWeatherByCity();  // call the instance method and pass in user input.

    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
      //target the img value and display with a img src to display
      $('.showHumidity').html(`<img src=${body.data.images.original.url}>`);

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
