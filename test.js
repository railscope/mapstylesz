var openrailwaymap = new ol.layer.Tile({
    title: 'OpenRailwayMap',
    visible: true,
    source : new ol.source.XYZ({
                attributions : [
                    ol.source.OSM.ATTRIBUTION,
                    new ol.Attribution({
                        html : 'Style: <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA 2.0</a> <a href="https://www.openrailwaymap.org/">OpenRailwayMap</a> and <a href="https://osm.org/copyright"</a>OpenStreetMap</a>'
                    })
                ],
                url : 'https://tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png',
                crossOrigin: null, //make it work inside canvas
                tilePixelRatio: 2, //server returns 512px img for 256 tiles
                maxZoom: 19, // XYZ's default is 18
                opaque: true
            })
        })
map.addLayer(openrailwaymap);
