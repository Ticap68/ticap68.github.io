//const Key = 'AIzaSyA8A69egVsPgDDrAXVWXdtW_HrpKLvmiOM';

function getAltitudeGpxz() {
  fetch('https://gpxz.com/api/elevation?lat=48.856614&lon=2.3522219000000177')
    .then(response => response.json())
    .then(data => {
      document.getElementById('altitude').innerHTML = data.elevation;
    });
}

function getAltitude() {
  fetch('https://maps.googleapis.com/maps/api/elevation/json?locations=48.856614,2.3522219&key=' , { mode: 'cors' })
    .then(response => response.json())
    //.catch(error=>console.log(error))
    .then(data => {
      console.log(data.results[0].elevation);
    });
}

//.catch(error => alert("Erreur : " +error));}
//document.getElementById('altitude').innerHTML = data.results[0].elevation;

var axios = require('axios');
var config = {
  method: 'get',
  url: 'https://api.open-elevation.com/api/v1/lookup?locations=41.161758,-8.583933',
  headers: {}
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });



//window.onload = getAltitude;



