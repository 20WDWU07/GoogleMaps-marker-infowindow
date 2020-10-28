console.log(key); //key comes from external file mapKey.js
var script = '<script src="https://maps.googleapis.com/maps/api/js?key=' + key + '&callback=initMap&libraries=&v=weekly" defer></script>'
console.log (script);


// Initialize and add the map
function initMap() {
  // The location of Uluru
  const wellington = { lat: -41.2769, lng: 174.7731 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: wellington,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: wellington,
    map: map,
  });
}

$(document).ready(function(){
  $('body').append(script);
});
