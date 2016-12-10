/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function () {

    function initMap() {
        var poros = new google.maps.LatLng(37.500249, 23.455073);

        var map;
        var bounds = new google.maps.LatLngBounds();
        var mapOptions = {
            center: poros,
            mapTypeId: 'roadmap'
        };

    // Display a map on the page
        map = new google.maps.Map(document.getElementById("map"), mapOptions);
        map.setTilt(45);

        var locations = [
            ['Public Restroom', 37.50067, 23.45363, 'C:\Users\Nindian\Documents\emarina\startbootstrap-agency-1.0.6\img\pin-icons\church.png'],
            ['Church', 37.50043, 23.4534, 'C:\Users\Nindian\Documents\emarina\startbootstrap-agency-1.0.6\img\pin-icons\church.png'],
            ['Garbage Bin 1', 37.50051, 23.45232, 'C:\Users\Nindian\Documents\emarina\startbootstrap-agency-1.0.6\img\pin-icons\church.png'],
            ['Water Supply', 37.50073, 23.45279, 'C:\Users\Nindian\Documents\emarina\startbootstrap-agency-1.0.6\img\pin-icons\church.png'],
            ['Water Supply', 37.50035, 23.45189, 'C:\Users\Nindian\Documents\emarina\startbootstrap-agency-1.0.6\img\pin-icons\church.png'],
            ['Berthing Assistance', 37.50022, 23.45139, 'C:\Users\Nindian\Documents\emarina\startbootstrap-agency-1.0.6\img\pin-icons\church.png'],
            ['Public shower', 37.50013, 23.45184, 'C:\Users\Nindian\Documents\emarina\startbootstrap-agency-1.0.6\img\pin-icons\church.png'],
            ['Hospital', 37.49997, 23.45206, 'C:\Users\Nindian\Documents\emarina\startbootstrap-agency-1.0.6\img\pin-icons\church.png'],
            ['Garbage Bin 2', 37.49951, 23.45124, 'C:\Users\Nindian\Documents\emarina\startbootstrap-agency-1.0.6\img\pin-icons\church.png'],
            ['Cronos SuperMarket', 37.49954, 23.45158, 'C:\Users\Nindian\Documents\emarina\startbootstrap-agency-1.0.6\img\pin-icons\church.png'],
            ['Pharmacy', 37.49927, 23.4517, 'C:\Users\Nindian\Documents\emarina\startbootstrap-agency-1.0.6\img\pin-icons\church.png'],
            ['Electricity', 37.49909, 23.45128, 'C:\Users\Nindian\Documents\emarina\startbootstrap-agency-1.0.6\img\pin-icons\church.png'],
            ['Electricity', 37.49881, 23.45167, 'C:\Users\Nindian\Documents\emarina\startbootstrap-agency-1.0.6\img\pin-icons\church.png'],
            ['Kiosk', 37.49865, 23.45225, 'C:\Users\Nindian\Documents\emarina\startbootstrap-agency-1.0.6\img\pin-icons\church.png'],
            ['Costguard Office', 37.49843, 23.45279, 'C:\Users\Nindian\Documents\emarina\startbootstrap-agency-1.0.6\img\pin-icons\church.png']
        ];

        var infoWindow = new google.maps.InfoWindow(), marker, i;

        for (i = 0; i < locations.length; i++) {
            var position = new google.maps.LatLng(locations[i][1], locations[i][2]);
            bounds.extend(position);
            marker = new google.maps.Marker({
                position: position,
                map: map,
            });
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infoWindow.setContent(locations[i][0]);
                    infoWindow.open(map, marker);
                };
            })(marker, i));
            map.fitBounds(bounds);
        }


    }
    google.maps.event.addDomListener(window, 'load', initMap);
});
