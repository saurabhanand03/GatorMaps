let map;
//var bounds = new google.maps.LatLngBounds();
const UF_Bounds = {
  north:29.652127882560325,
  south:29.63041832222747,
  east:-82.3393812215348,
  west:-82.37254046414034,
};
function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 29.6516344, lng: -82.3248262 },
    restriction:{
      latLngBounds: UF_Bounds,
      strictBounds: false,
    },
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