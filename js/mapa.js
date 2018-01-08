var map;
var infowindow
var marker
var drop

function initMap() {
    var latlng = new google.maps.LatLng(-24.060424, -52.386508);
    var lat = -24.060424;
    var lgn = -52.386508;

    var mapOptions = {
        scrollwheel: false,
        draggable: true,
        // disableDefaultUI: true,
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: 'Estamos aqui!',
    });

    var contentString = '<div>' +
        '<h3 class="font-logo">haken</h3>' +
        '<p>Estamos localizados na Universidade Tecnológica Federal do Paraná, Campo Mourão</p>' +
        '</div>';

    infowindow = new google.maps.InfoWindow({
        content: contentString,
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    drop = false
}

// Resize map to show on a Bootstrap's modal
$('#mapModal').on('shown.bs.modal', function () {
    lastCenter = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(lastCenter);
    if (!drop) {
        marker.setAnimation(google.maps.Animation.DROP);
        drop = true;
    }
    infowindow.open(map, marker);
});