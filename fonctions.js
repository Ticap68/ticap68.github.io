
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





