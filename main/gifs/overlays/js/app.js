const app = new Vue({
  el: '#app',
  data: {
    apiUrl: 'http://api.giphy.com/v1/gifs',
    apiKey: secret, //visit https://developers.giphy.com to get one
    gifs: null
  },
  methods: {
    fetchGifs: function() {
      const url = `${this.apiUrl}/trending?api_key=${this.apiKey}`;
      fetch(url) //axios.get for backward compatibility
        .then(response => response.json())
        .then(data => this.gifs = data.data);
    }
  },
  created: function() {
    this.fetchGifs();
  }
});
