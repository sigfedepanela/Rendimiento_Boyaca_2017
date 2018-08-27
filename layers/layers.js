var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental '
            });var format_Boyac_1 = new ol.format.GeoJSON();
var features_Boyac_1 = format_Boyac_1.readFeatures(json_Boyac_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boyac_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Boyac_1.addFeatures(features_Boyac_1);var lyr_Boyac_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Boyac_1, 
                style: style_Boyac_1,
                title: '<img src="styles/legend/Boyac_1.png" /> Boyacá'
            });var format_RendimientoToneladaaHectareaBoyac2017_2 = new ol.format.GeoJSON();
var features_RendimientoToneladaaHectareaBoyac2017_2 = format_RendimientoToneladaaHectareaBoyac2017_2.readFeatures(json_RendimientoToneladaaHectareaBoyac2017_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RendimientoToneladaaHectareaBoyac2017_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RendimientoToneladaaHectareaBoyac2017_2.addFeatures(features_RendimientoToneladaaHectareaBoyac2017_2);var lyr_RendimientoToneladaaHectareaBoyac2017_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RendimientoToneladaaHectareaBoyac2017_2, 
                style: style_RendimientoToneladaaHectareaBoyac2017_2,
    title: 'Rendimiento (Toneladaa/Hectarea) - Boyacá-2017<br />\
    <img src="styles/legend/RendimientoToneladaaHectareaBoyac2017_2_0.png" />  2 - 4 <br />\
    <img src="styles/legend/RendimientoToneladaaHectareaBoyac2017_2_1.png" />  4 - 5 <br />\
    <img src="styles/legend/RendimientoToneladaaHectareaBoyac2017_2_2.png" />  5 - 7 <br />\
    <img src="styles/legend/RendimientoToneladaaHectareaBoyac2017_2_3.png" />  7 - 8 <br />\
    <img src="styles/legend/RendimientoToneladaaHectareaBoyac2017_2_4.png" />  8 - 12 <br />'
        });

lyr_LimiteDepartamental_0.setVisible(true);lyr_Boyac_1.setVisible(true);lyr_RendimientoToneladaaHectareaBoyac2017_2.setVisible(true);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_Boyac_1,lyr_RendimientoToneladaaHectareaBoyac2017_2];
lyr_LimiteDepartamental_0.set('fieldAliases', {'nombre_dep': 'nombre_dep', });
lyr_Boyac_1.set('fieldAliases', {'nombre_dep': 'nombre_dep', });
lyr_RendimientoToneladaaHectareaBoyac2017_2.set('fieldAliases', {'Id': 'Id', 'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'R.(Ton/Ha)': 'R.(Ton/Ha)', 'No': 'No', });
lyr_LimiteDepartamental_0.set('fieldImages', {'nombre_dep': 'TextEdit', });
lyr_Boyac_1.set('fieldImages', {'nombre_dep': 'TextEdit', });
lyr_RendimientoToneladaaHectareaBoyac2017_2.set('fieldImages', {'Id': 'TextEdit', 'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'R.(Ton/Ha)': 'TextEdit', 'No': 'TextEdit', });
lyr_LimiteDepartamental_0.set('fieldLabels', {'nombre_dep': 'inline label', });
lyr_Boyac_1.set('fieldLabels', {'nombre_dep': 'inline label', });
lyr_RendimientoToneladaaHectareaBoyac2017_2.set('fieldLabels', {'Id': 'inline label', 'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'R.(Ton/Ha)': 'inline label', 'No': 'inline label', });
lyr_RendimientoToneladaaHectareaBoyac2017_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});