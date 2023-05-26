const accessKey = 'f4fe55c2464763fa5ab7b9b7c5c5d81c';

const countryElem = document.getElementById('country');
const button = document.getElementById('button');

function getGeolocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    console.log('Geolocation is not supported by your browser');
  }
}

function onSuccess(position) {
    fetch(`http://api.ipstack.com/check?access_key=${accessKey}`)
      .then(response => response.json())
      .then(data => {
        const ipAddress = data.ip;
        console.log(ipAddress);

        return fetch(`http://api.ipstack.com/${ipAddress}?access_key=${accessKey}`);
      })
      .then(response => response.json())
      .then(data => {
        const countryName = data.country_name;
        const cityName = data.city;
        console.log(countryName);

        sessionStorage.setItem('countryName', countryName);
        countryElem.textContent = cityName + ', ' + countryName;
        console.log(sessionStorage.getItem('countryName'));
      })
      .catch(error => {
        console.log('Error:', error);
      });
}

function onError(error) {
  console.log('Error:', error.message);
}

button.addEventListener('click', event => {
  getGeolocation();
});
