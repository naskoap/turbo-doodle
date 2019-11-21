const app = new Vue({
    el: '#app',
    data: {
      greeting: 'Welcome to the mini weather app!',
      apiUrl: 'http://api.openweathermap.org/data/2.5/group',
      apiKey: secret, //get apiKey from https://openweathermap.org/appid#get
      system: 'metric',
      city: ['727011', '5809844', '4650946', '5128862', '4984500'], //Sofia, Seattle, Portland, Norfolk, Atlanta
      weatherInfo: []
    },
    methods: {
      fetchWeatherData: function() {
        const url = `${this.apiUrl}?id=${this.city}&units=${this.system}&appid=${this.apiKey}`,
              weather = [];
        //HTTP handling
        fetch(url)
          .then((resp) => resp.json()) //transform the data into json
          .then(function(data) {
            for(i=0; i<data.list.length; i++) {
              let poi = {
                  temperature: data.list[i].main.temp, pressure: data.list[i].main.pressure,
                  humidity: data.list[i].main.humidity, temp_max: data.list[i].main.temp_max,
                  temp_min: data.list[i].main.temp_min, city: data.list[i].name
              };
              weather.push(poi);
            }
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
