var routes = L.Control.extend({
    options: {
        position: 'topright',
    },

    onAdd: function (map) {
        var controlDiv = L.DomUtil.create('div', 'leaflet-control-command');
        L.DomEvent

        .addListener(controlDiv, 'click', function () { document.getElementById('abc').style.display = "block"; });

        var controlUI = L.DomUtil.create('div', 'leaflet-control-command-routes', controlDiv);
        controlUI.title = 'Routes';
        return controlDiv;
    }
});
