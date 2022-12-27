function getAltitudeGpxz() {
    fetch('https://gpxz.com/api/elevation?lat=48.856614&lon=2.3522219000000177')
      .then(response => response.json())
      .then(data => {
        document.getElementById('altitude').innerHTML = data.elevation;
      });
  }
  


 function getAltitude() {
    fetch('https://maps.googleapis.com/maps/api/elevation/json?locations=48.856614,2.3522219&key=AIzaSyA8A69egVsPgDDrAXVWXdtW_HrpKLvmiOM', {mode: 'no-cors'})
    .then(response => response.json())
    .then(data => {
        console.log(data.results[0].elevation);
        document.getElementById('altitude').innerHTML = data.results[0].elevation;
    })
    .catch(error => alert("Erreur : " + error));
 }


 window.onload = getAltitude;


  
