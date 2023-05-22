window.init = function () {
    let myMap = new ymaps.Map("map", {
        center: [55.560845, 37.639860],
        zoom: 17,
        controls: ["typeSelector", "zoomControl", "fullscreenControl"],
        behaviors: ["default", "scrollZoom"]
    });

    myMap.behaviors.disable("scrollZoom");

    let myPlacemark20 = new ymaps.Placemark([55.561983, 37.638724], {
        hintContent: '28 июля 2023 в 16:00',
        balloonContentHeader: '28 июля 2023 в 16:00',
        balloonContent: 'Встречаемся на улице перед залом на фуршете'
    }, {
        preset: "islands#icon",
        iconColor: '#0095b6',
    });

    window.multiRoute = new ymaps.multiRouter.MultiRoute({
        referencePoints: [
            [55.560608, 37.640268],
            [55.561983, 37.638724]
        ],
        params: {
            routingMode: 'pedestrian',
        },
    }, {
        wayPointVisible: false,
        routeActiveMarkerVisible: false,
        routeOpenBalloonOnClick: false,
        boundsAutoApply: true,
    });

    // multiRoute.editor.start({
    //     addWayPoints: true,
    //     removeWayPoints: true
    // });

    myMap.geoObjects.add(myPlacemark20);
    myMap.geoObjects.add(window.multiRoute);
}
