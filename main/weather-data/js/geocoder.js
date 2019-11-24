const geoApp = new Vue({
  el: '#geoApp',
  data: {
    apiUrl: 'https://geocoder.api.here.com/6.2/geocode.json',
    appId: appId,
    appCode: appCode,
    searchText: '100+Broad+St+New+York',
    display: []
  },
  methods: {
    fetchData: function() {
      const url = `${this.apiUrl}?app_id=${this.appId}&app_code=${this.appCode}&searchtext=${this.searchText}`,
            d = [];

      //HTTP handling
      fetch(url)
        .then((resp) => resp.json()) //transform the data into json
        .then(function(data) {
          d.push(data);
        })
        .catch(function(error) {
          console.log(error);
        });
        this.display = d;
    },
  },
  created: function() {
    this.fetchData();
  },
});
