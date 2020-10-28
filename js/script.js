console.log(key); //key comes from external file mapKey.js
var script = '<script src="https://maps.googleapis.com/maps/api/js?key=' + key + '&callback=initMap&libraries=&v=weekly" defer></script>'
console.log (script);


// Initialize and add the map
function initMap() {

  var homes = [
    {
      address : '158 Hutt Road',
      latitude : -41.2565971,
      longitude : 174.7945892,
      photo : '158HuttRoad.jpg'
    },
    {
      address : '14 Witham Street, Island Bay',
      latitude : -41.3376144,
      longitude : 174.777408,
      photo : '14WithamStreet.jpg'
    },
    {
      address : '801/4 Elizabeth Street, Mount Victoria',
      latitude : -41.295752,
      longitude : 174.780983,
      photo : '801ElizabethStreet.jpeg'
    }
  ];
  // The location of Uluru
  const wellington = { lat: -41.2769, lng: 174.7731 };


  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: wellington,
  });

  var i;
  for (i = 0 ; i < homes.length; i++){
    var location = { lat : homes[i].latitude, lng: homes[i].longitude}

    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
      position: location,
      map: map,
    });

    var contentString = '<div class=""> <h3 class="my-2 text-primary">'+ homes[2].address+ ' </h3><img class="img-fluid" src="images/' + homes[2].photo + '" alt="Photo"></div>';

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });



  }
}

$(document).ready(function(){
  $('body').append(script);
});
