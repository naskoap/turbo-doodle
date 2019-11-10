const app = new Vue({
    el: '#app',
    data: {
      greeting: 'Welcome to the mini weather app!',
      apiUrl: 'http://api.openweathermap.org/data/2.5/weather',
      apiKey: secret,
      system: 'metric',
      city: 'new york',
      weatherInfo: null
    },
    methods: {
      fetchWeatherData: function() {
        const url = `${this.apiUrl}?q=${this.city}&units=${this.system}&appid=${this.apiKey}`;
        const weather = []; //store weather points of interest for each city
        //HTTP handling
        fetch(url)
          .then((resp) => resp.json()) //transform the data into json
          .then(function(data) {
            const poi = {
                temperature: data.main.temp, pressure: data.main.pressure,
                humidity: data.main.humidity, temp_max: data.main.temp_max,
                temp_min: data.main.temp_min, city: data.name
            };
            weather.push(poi);
            console.log(weather);
          })
          .catch(function(error) {
            console.log(error);
          });
          this.weatherInfo = weather;
      },
    },
    created: function() {
      this.fetchWeatherData();
    },
});
