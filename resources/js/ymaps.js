window.init = function () {
    let myMap = new ymaps.Map("map", {
        center: [55.560845, 37.639860],
        zoom: 17,
        controls: ["typeSelector", "zoomControl", "fullscreenControl"],
        behaviors: ["default", "scrollZoom"]
    });

    myMap.behaviors.disable("scrollZoom");

    let myPlacemark10 = new ymaps.Placemark([55.560845, 37.639860], {
        hintContent: '28 июля 2023 в 16:00',
        balloonContentHeader: '28 июля 2023 в 16:00',
        balloonContent: 'Встречаемся на улице перед залом на фуршете'
    }, {
        preset: "islands#icon",
        iconColor: '#0095b6',
    });

    myMap.geoObjects.add(myPlacemark10);
}
