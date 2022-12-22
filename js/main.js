var map = L.map('map', {
  center: [31.82, -111.471],
  zoom: 7
});

var Stamen_TonerLite = L.tileLayer('https://api.mapbox.com/styles/v1/alwheat/cl18hj0qg000n15pmbh63rqhr/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWx3aGVhdCIsImEiOiJja3FxeDQ4eWMxandhMnVxcTgzaXBhcjV5In0.Mt7_l0tnv-7I8elw166noA', {
  attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

var myMarkers = makeMarkers(azdata[0].features);
console.log(myMarkers);

plotMarkers(myMarkers);
