let map;
//var bounds = new google.maps.LatLngBounds();

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 29.6516344, lng: -82.3248262 },
    zoom: 12,
    mapId: 'fdfa1f14231eb459'
  });

  const beachMarker = new google.maps.Marker({
    position: { lat: 29.646126638775236, lng: -82.34788034625916},
    map,
    icon: "Orange_Marker.png",
  });

}

//var fs = require('fs');

// Use fs.readFile() method to read the file
//fs.readFile('DiningHours.txt', 'utf8', function(err, data){

  // Display the file content
 // console.log(data);
//});

console.log('readFile called');