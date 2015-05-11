var routes = L.Control.extend({
    options: {
        position: 'topright',
    },

    onAdd: function (map) {
        var controlDiv = L.DomUtil.create('div', 'leaflet-control-command');
        L.DomEvent

        .addListener(controlDiv, 'click', function () { alert(''); });

        var controlUI = L.DomUtil.create('div', 'leaflet-control-command-routes', controlDiv);
        controlUI.title = 'Routes';
        return controlDiv;
    }
});
