const map = L.map('map').setView([51.505, -0.09], 13);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var config = {
  method: 'get',
  url: 'https://api.open-elevation.com/api/v1/lookup?locations=41.161758,-8.583933',
  headers: {}
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    console.log(response.data.results[0].elevation);
    document.getElementById('altitude').innerHTML = response.data.results[0].elevation;
  })
  .catch(function (error) {
    console.log(error);
  });

map.on('click', function (e) {
  var lat = event.latLng.lat();
  var lng = event.latLng.lng();
  document.getElementById('lat').innerHTML = lat;
});