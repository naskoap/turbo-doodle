new Vue({
  el: '#app',
  data: {
    map: null,
    tileLayer: null,
    layers: []
  },
  mounted() {
    this.initMap();
    this.initLayers();
    this.map.on('click', this.onMapClick);
  },
  methods: {
    initMap() {
      var latlng = L.latLng(40.783037, -73.96463); // NYC coordinates
      this.map = L.map('map').setView(latlng, 14);
      this.tileLayer = L.tileLayer(
        'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
        }
      );

      this.tileLayer.addTo(this.map);
    },
    onMapClick(e) {
      var popup = L.popup();
      popup
      		.setLatLng(e.latlng)
      		.setContent("You clicked the map at " + e.latlng.toString())
      		.openOn(this.map);
      },
    initLayers() {}
  },

});
