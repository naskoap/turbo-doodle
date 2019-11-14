new Vue({
  el: '#app',
  data: {
    map: null,
    tileLayer: null,
    control: null,
    container: null,
    layers: []
  },
  mounted() {
    this.initMap();
    this.initLayers();
    this.setControl();
    this.setContainer();
    this.map.on('click', this.onMapClick);
  },
  methods: {
    initMap() {
      let latlng = L.latLng(40.735864, -73.980492);
      this.map = L.map('map').setView(latlng, 11);
      this.tileLayer = L.tileLayer(
        'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
        }
      );
      this.tileLayer.addTo(this.map);
    },
    setControl() {
      let c = L.Routing.control({
        waypoints: [
          L.latLng(40.702518, -74.014961), //Battery Park
          L.latLng(40.730623, -73.997602) //Washington Sq. Park
        ]
      });
      c.addTo(this.map);
      this.control = c;
    },
    setContainer() {
      let c = L.DomUtil.create('div');
      return c;
    },
    onMapClick(e) {
      var popup = L.popup();
      popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString())
          .openOn(this.map);
      this.container = this.setContainer();
    },
    initLayers() {}
  },

});
