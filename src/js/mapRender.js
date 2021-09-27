mapboxgl.accessToken =
  "pk.eyJ1Ijoic2VyZy0xMjEyIiwiYSI6ImNqbHpndDE1ajBwNGszdm53azIwajR1bjUifQ.-1NJchgY5Hx3kYqCJalPxw";
var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/serg-1212/cjn67c54h11882rlpojtf4h65",
  center: [-75.5, 42], // starting position
  zoom: 3, // starting zoom
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

map.on("click", function (e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ["gdp-all"],
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
      "<h3>" +
        feature.properties.name +
        "</h3><p>" +
        feature.properties.expdta +
        "</p><p>" +
        feature.properties.gdpdta +
        "</p><p>" +
        feature.properties.impdta +
        "</p>"
    )
    .setLngLat(feature.geometry.coordinates)
    .addTo(map);
});
