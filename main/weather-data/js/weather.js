const Weather = {
  data: function() {
    return {
      apiUrl: 'http://api.openweathermap.org/data/2.5/group',
      apiKey: secret,
      system: 'imperial',
      city: ['727011', '5809844', '4650946', '5128862', '4984500'], //Sofia, Seattle, Portland, Norfolk, Atlanta
      tabulator: null,
      tableData: []
    }
  },
  watch: {
    tableData:{
      handler: function (newData) {
        this.tabulator.replaceData(newData);
      },
      deep: true,
    }
  },
  methods: {
    fetchWeatherData: function() {
      const url = `${this.apiUrl}?id=${this.city}&units=${this.system}&appid=${this.apiKey}`,
            weather = []; //store weather points of interest for each city
      //HTTP handling
      fetch(url)
        .then((resp) => resp.json()) //transform the data into json
        .then(function(data) {
          for(i=0; i<data.list.length; i++) {
            let poi = {
                temp: data.list[i].main.temp, pressure: data.list[i].main.pressure,
                humidity: data.list[i].main.humidity, temp_max: data.list[i].main.temp_max,
                temp_min: data.list[i].main.temp_min, city: data.list[i].name
            };
            weather.push(poi);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
        this.tableData = weather;
    },
  },
  mounted() {
    //instantiate Tabulator when element is mounted
    this.tabulator = new Tabulator(this.$refs.table, {
      data: this.tableData,
      layout:"fitColumns",
      responsiveLayout:"hide",
      columns: [
        {title:"City", field:"city", align:"center"},
        {title:"Temperature", field:"temp", sorter:"number", align:"center"},
        {title:"Humidity", field:"humidity", align:"center"},
        {title:"Pressure", field:"pressure", align:"center"},
        {title:"Min Temperature", field:"temp_min", align:"center"},
        {title:"Max Temperature", field:"temp_max", align:"center"},
      ],
    });
  },
  created: function() {
    this.fetchWeatherData();
  },
  template: '<div ref="table" id="weather-table"></div>'
};
