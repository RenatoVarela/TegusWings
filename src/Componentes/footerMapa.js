import React, { useState } from 'react';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
  } from '@react-google-maps/api';



const libraries = ["places"]

const mapContainerStyle ={
    width: "53.3vw",
    height: "40vh",
    
};//parameters of the map

const center= {
    lat: 14.056190, 
    lng: -87.254847,
};//initial position of the map

const options={
  //styles: MapStyles,
  streetViewControl: false,
}

  export default function MapFooter() {
    const{isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyAPzlrOIVrzK-QQQ7wMaBsxSC2BdM4_wnc", 
        libraries,
    });

    //const [Selected, setSelected] = useState(null);

    if (loadError) return "Error al cargar el mapa";
    if (!isLoaded) return "Cargando Mapa";

    /*const mapRef = useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

    const panTo = React.useCallback(({lat, lng}) => {

    },[])*/

    return(
    <div style={{}}>
        <GoogleMap 
          mapContainerStyle={mapContainerStyle} 
          zoom={18} 
          center= {center}
          options={options}
         // onLoad={onMapLoad}
          >
            
          </GoogleMap>
    </div>
    );
  }


  /*{location.features.map(clinic => (
              <Marker  
              key = {clinic.properties.CLINIC_ID}
              position={{lat: clinic.geometry.coordinates[0], lng: clinic.geometry.coordinates[1]}} 
              onClick={() => {
                setSelected(clinic);
              }}
              />
            ))}
            {Selected && (
              <InfoWindow
              position ={{
                lat: Selected.geometry.coordinates[0],
                lng: Selected.geometry.coordinates[1]
              }}
              onCloseClick={() => {
                setSelected(null);
              }}>
                <div>
                  <h2>Clinica dental Reynaud</h2>
                </div>
              </InfoWindow>
            )}*/