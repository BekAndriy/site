import React from 'react';
import { withGoogleMap, GoogleMap, Polygon } from "react-google-maps";
import apiProps from '../../api/google.api.js';

const region = require('../../json/region.json');
require('react')

const coordinatPoligon = region.map(function(elem,index){   // convert JSON coordinat
    for(let i = 0; i < elem['coordinat'].length; i++){
        var currentPolygon = elem['coordinat'][i];
        var nameRegion = elem['name_eng'];
        var arrCoordinat = currentPolygon.split(',0.0');
        var newArrCoordinat = [];
        for (let u = 0; u < arrCoordinat.length; u++){
            var onePoint = {};
            var arrCoordOnePoint = arrCoordinat[u].split(',');
            onePoint.lng = Number(arrCoordOnePoint[0]);
            onePoint.lat = Number(arrCoordOnePoint[1]);
            newArrCoordinat.push(onePoint);
        }
        return newArrCoordinat;
    }
})

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    bootstrapURLKeys={{
        key: apiProps.MAP_API_KEY,
      }}
    // ref={props.onMapLoad}
    defaultZoom={6}
    defaultCenter={{ lat: 49.341409, lng: 31.2264792 }}
  >

    <Polygon 
        strokeColor="rgb(255,0,0)"
        onClick={function(elem){console.log(this);}}
        paths={coordinatPoligon}
    />
  </GoogleMap>
));

var Gmap = React.createClass({
    handlePoligonSelect: function(el){
        console.log(el);
    },
    render: function(){
        return (
            <div className="gmap-wrap">
                <GettingStartedGoogleMap
                    containerElement={
                    <div style={{ height: `500px` }} />
                    }
                    mapElement={
                    <div style={{ height: `500px` }} />
                    }
                    // onMapLoad={_.noop}
                    // onMapClick={_.noop}
                    // markers={markers}
                    // onMarkerRightClick={_.noop}
                />
            </div>
        )
    }
});

module.exports = Gmap;

