









var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1Ijoic2VyZy0xMjEyIiwiYSI6ImNqbHpndDE1ajBwNGszdm53azIwajR1bjUifQ.-1NJchgY5Hx3kYqCJalPxw';
var map = new mapboxgl.Map({
container: 'YOUR_CONTAINER_ELEMENT_ID',
style: 'mapbox://styles/mapbox/streets-v10'
});