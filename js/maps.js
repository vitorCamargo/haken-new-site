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

    var icon = {
        url: "./images/mark-map.png",
        scaledSize: new google.maps.Size(45, 45),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0, 0)
    };

    marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: 'Estamos aqui!',
        icon: icon
    });

    var contentString =
        '<div class = "font-logo">' +
            '<h3> Haken </h3>' +
            '<p> Estamos localizados na Universidade Tecnológica Federal do Paraná, Campo Mourão </p>' +
        '</div>';

    infowindow = new google.maps.InfoWindow({
        content: contentString,
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    drop = false
}