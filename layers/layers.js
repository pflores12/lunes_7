var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_agrupamientos_2 = new ol.format.GeoJSON();
var features_agrupamientos_2 = format_agrupamientos_2.readFeatures(json_agrupamientos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agrupamientos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agrupamientos_2.addFeatures(features_agrupamientos_2);cluster_agrupamientos_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_agrupamientos_2
});
var lyr_agrupamientos_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_agrupamientos_2, 
                style: style_agrupamientos_2,
                interactive: true,
                title: '<img src="styles/legend/agrupamientos_2.png" /> agrupamientos'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_agrupamientos_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_OSMStandard_1,lyr_agrupamientos_2];
lyr_agrupamientos_2.set('fieldAliases', {'municipio_': 'Test', 'municipi_1': 'Muni', 'localidad': 'localidad', 'nombre_agr': 'nombre_agr', 'tipologia': 'tipologia', 'iniciativa': 'iniciativa', 'tipo_segun': 'tipo_segun', 'numero_dec': 'numero_dec', 'numero_d_1': 'numero_d_1', 'ubicacion': 'ubicacion', 'latitud': 'latitud', 'longitud': 'longitud', 'nombre_de_': 'nombre_de_', 'institucio': 'institucio', 'telefono': 'telefono', 'mail_1': 'mail_1', 'mail_2': 'mail_2', 'superficie': 'superficie', 'cantidad_l': 'cantidad_l', 'lotes_parc': 'lotes_parc', 'reglamento': 'reglamento', 'area_de_re': 'area_de_re', 'infraestru': 'infraestru', 'servicio_': 'servicio_', 'centro_de_': 'centro_de_', 'vinculaci�': 'vinculaci�', 'numero_emp': 'numero_emp', 'numero_e_1': 'numero_e_1', 'seccion_el': 'seccion_el', 'interior_c': 'interior_c', });
lyr_agrupamientos_2.set('fieldImages', {'municipio_': 'Hidden', 'municipi_1': 'TextEdit', 'localidad': 'TextEdit', 'nombre_agr': 'TextEdit', 'tipologia': 'TextEdit', 'iniciativa': 'TextEdit', 'tipo_segun': 'TextEdit', 'numero_dec': 'TextEdit', 'numero_d_1': 'TextEdit', 'ubicacion': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'nombre_de_': 'TextEdit', 'institucio': 'TextEdit', 'telefono': 'TextEdit', 'mail_1': 'TextEdit', 'mail_2': 'TextEdit', 'superficie': 'TextEdit', 'cantidad_l': 'TextEdit', 'lotes_parc': 'TextEdit', 'reglamento': 'TextEdit', 'area_de_re': 'TextEdit', 'infraestru': 'TextEdit', 'servicio_': 'TextEdit', 'centro_de_': 'TextEdit', 'vinculaci�': 'TextEdit', 'numero_emp': 'TextEdit', 'numero_e_1': 'TextEdit', 'seccion_el': 'TextEdit', 'interior_c': 'TextEdit', });
lyr_agrupamientos_2.set('fieldLabels', {'municipi_1': 'no label', 'localidad': 'no label', 'nombre_agr': 'no label', 'tipologia': 'no label', 'iniciativa': 'no label', 'tipo_segun': 'no label', 'numero_dec': 'no label', 'numero_d_1': 'no label', 'ubicacion': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'nombre_de_': 'no label', 'institucio': 'no label', 'telefono': 'no label', 'mail_1': 'no label', 'mail_2': 'no label', 'superficie': 'no label', 'cantidad_l': 'no label', 'lotes_parc': 'no label', 'reglamento': 'no label', 'area_de_re': 'no label', 'infraestru': 'no label', 'servicio_': 'no label', 'centro_de_': 'no label', 'vinculaci�': 'no label', 'numero_emp': 'no label', 'numero_e_1': 'no label', 'seccion_el': 'no label', 'interior_c': 'no label', });
lyr_agrupamientos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});