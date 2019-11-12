const app = new Vue({
  el: '#app',
  data: {
    apiUrl: 'http://api.giphy.com/v1/gifs',
    apiKey: secret, //visit https://developers.giphy.com to get one
    trendingGifs: null,
    searchedGifs: null,
    query: ''
  },
  methods: {
    fetchGifs: function() {
      const url = `${this.apiUrl}/trending?api_key=${this.apiKey}&limit=5`;
      fetch(url)
        .then(response => response.json())
        .then(data => this.trendingGifs = data.data);
    },
    searchGifs: function() {
      const url = `${this.apiUrl}/search?api_key=${this.apiKey}&q=${this.query}&limit=5`;
      fetch(url)
        .then(response => response.json())
        .then(data => this.searchedGifs = data.data)

    }
  },
  created: function() {
    this.fetchGifs();
  }
});
