import React, { useState } from 'react';
import { Flex, Spacer, Text, useMediaQuery, Icon, Button } from '@chakra-ui/react';

import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

let coords = [];

const containerStyle = {
  width: '400px',
  height: '400px'
};

let state = {
  center: { lat: -33.867, lng: 151.195 },
  coordsResult: []
};

export function EventSearch() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBtZBdM-KmcMjW2kpsdDyUPNMhnJuzDO-0"
  })

  const [map, setMap] = React.useState(null)
  const [center, setCenter] = React.useState(null)
  const [coordsResult, setCoordsResult] = React.useState([])

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    let request = {
      query: "Museum of Contemporary Art Australia",
      fields: ["name", "geometry"]
    };

    let service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          coords.push(results[i]);
        }

      setCenter(results[0].geometry.location)
      setCoordsResult(coords)
      }
    });

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  console.log("this is working");

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
      //   zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      // >
      //   { /* Child components, such as markers, info windows, etc. */ }
      //   <></>
        // center={this.state.center}
        zoom={13}
        // onLoad={map => this.onMapLoad(map)}
        // mapContainerStyle={{ height: "400px", width: "800px" }}
      >
        {coordsResult !== [] &&
          coordsResult.map(function(results, i) {
            // return (
            //   <Marker key={i} position={results.geometry.location}>
            //     <InfoWindow 
            //   options={{ maxWidth: 300 }}>
                  
            //         <span>{results.name}</span>
                  
            //     </InfoWindow>
            //   </Marker>
            // );

            <Marker key={i} position={results.geometry.location}>
              <InfoWindow 
            options={{ maxWidth: 300 }}>
                
                  <span>{results.name}</span>
                
              </InfoWindow>
            </Marker>;
            
          })}
      </GoogleMap>
  ) : <></>
}

export default React.memo(EventSearch)