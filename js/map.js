
    var locations = [
        ['Public Restroom', 37.50067, 23.45363, 'img/markers/wc.png'],
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

         function initMap() {
           var uluru = {lat: 37.500249, lng: 23.455073};
           var map = new google.maps.Map(document.getElementById('map'), {
             zoom: 18,
             center: uluru
           });
      var myLatlng = new google.maps.LatLng(37.49843, 23.45279);

      var infowindow = new google.maps.InfoWindow();
    var markers = [];
     var marker;
    var i;
     for (i = 0; i < locations.length; i++) {
       marker = new google.maps.Marker({
         position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      //     icon: locations[i][3],
         map: map

       });

       google.maps.event.addListener(marker, 'click', (function(marker, i) {
         return function() {
           infowindow.setContent(locations[i][0]);
           infowindow.open(map, marker);
         }

       })(marker, i));
    markers.push(marker[i]);


     }

    var li = document.getElementById('0');
     google.maps.event.addDomListener(li, "click", function(){
         google.maps.event.trigger(marker, "click");

    });



      }
