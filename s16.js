
function iniciarMap(){
    var coord = {lat:-34.9030298 ,lng: -56.1360138};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}