const map = L.map('map').setView([48.043, 7.156], 10);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 20,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function addMarker(coord) {
  var marker = L.marker(coord).addTo(map);
}



map.on('click', function (e) {
  var coord = e.latlng;
  document.getElementById('latlng').innerHTML = coord;

  addMarker(e.latlng);

  var config = {
    method: 'get',
    url: 'https://api.open-elevation.com/api/v1/lookup?locations=' + coord.lat + ',' + coord.lng,
    headers: {}
  };

  axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      // console.log(response.data.results[0].elevation);
      document.getElementById('altitude').innerHTML = response.data.results[0].elevation;
    })
    .catch(function (error) {
      console.log(error);
    });

});





const calculatorForm = document.getElementById('calculator-form');
const resultat = document.getElementById('resultat');

calculatorForm.addEventListener('submit', event => {
  event.preventDefault();
  const vitesse = Number(document.getElementById('vitesse').value);
  const tauxChute = Number(document.getElementById('tauxChute').value);
  const result = (vitesse * 1000 / 3600) / tauxChute;
  resultat.textContent = `Résultat : ${result}`;
});

