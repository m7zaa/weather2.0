// Back-end
export class WeatherService {
  getWeatherByCity() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}`; // watch for back ticks.
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
