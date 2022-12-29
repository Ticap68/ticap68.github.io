const map = L.map('map').setView([51.505, -0.09], 13);
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.on('click', function (e) {
  var coord = e.latlng.lat + "," + e.latlng.lng;
  document.getElementById('latlng').innerHTML = coord;

  var config = {
    method: 'get',
    url: 'https://api.open-elevation.com/api/v1/lookup?locations=' + coord,
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

});

const numberInput = document.getElementById('number-input');
const valueDisplay = document.getElementById('resultat');

numberInput.addEventListener('input', () => {
  let number = numberInput.value;
  number += 10;
  valueDisplay.textContent = number;
});