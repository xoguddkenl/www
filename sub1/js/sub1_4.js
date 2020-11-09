     window.onload = function () {
        var container = document.getElementById('map');
        var options = {
            center: new daum.maps.LatLng(37.574282, 126.983975),
            level: 2
        };

        var map = new daum.maps.Map(container, options);

        var mapTypeControl = new daum.maps.MapTypeControl();
        map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

        var zoomControl = new daum.maps.ZoomControl();
        map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);

        var markerPosition = new daum.maps.LatLng(37.574282, 126.983975);
        var marker = new daum.maps.Marker({
            position: markerPosition
        });

        marker.setMap(map);

        var overlay = new daum.maps.CustomOverlay({
            map: map,
            position: marker.getPosition()
        });


    };

    $(document).ready(function () {
        $('#content_area .box1').addClass('box_move');

        $(window).on('scroll', function () {
            var scroll_top = $(window).scrollTop();

            if (scroll_top > 500) {
                $('#content_area .way').addClass('box_move');

            };
        })
    });
