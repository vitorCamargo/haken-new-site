function initMap() {
	var map;
    var lat = -24.060424; //Set your latitude.
    var lon = -52.386508; //Set your longitude.

    var centerLon = lon;

    var mapOptions = {
      scrollwheel: false,
        draggable: true,
        // disableDefaultUI: true,
        zoom: 15,
        center: new google.maps.LatLng('-24.060424', '-52.386508'),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map'),  mapOptions);

    var contentString = 'Estamos aqui!';
	
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(lat, lon),
    });
}

// Resize map to show on a Bootstrap's modal
// $('#mapModal').on('shown.bs.modal', function () {
// 	var currentCenter = new google.maps.LatLng('-24.060424', '-52.386508');  // Get current center before resizing
// 	google.maps.event.trigger(map, "resize");
// 	map.setCenter(currentCenter); // Re-set previous center
// });