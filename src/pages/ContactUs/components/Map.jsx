import React from 'react'
import Card from './Card'
import LocationPin from './LocationPin'
import GoogleMapReact from 'google-map-react'
import '../ContactUs.css'

const Map = () => {
  const defaultProps = {
    center: {
      lat: 51.4064,
      lng: 0.0158
    },
    zoom: 17,
  }
  const location = {
      address: 'Roastar Specialty Coffee, 8 East St, Bromley',
      lat: 51.4064,
      lng: 0.0158,
  };
  return (
    <div className='maps'>
      <div className='title-background'>
        <h1 className='maps-title'>COME VISIT OUR CAFE</h1>
      </div>
      <div 
        style={{ 
          height: '90vh', 
          width: '160%', 
          display: 'flex',
          position: 'relative', 
          top: '-30vh',
          left: '-30vw',
          gap: '100px'
        }}
      >
        <Card />
        <GoogleMapReact
          /* Do NOT save/commit this API key to GitHub or any public platform */
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <LocationPin 
            lat={defaultProps.lat}
            lng={defaultProps.lng}
            text={location.address}
            position={defaultProps.center}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map

/*

const GoogleMap = () => {
    const defaultProps = {
      center: {
        lat: 51.4064,
        lng: 0.0158
      },
      zoom: 17,
}
    const location = {
        address: 'Roastar Specialty Coffee, 8 East St, Bromley',
        lat: 51.4064,
        lng: 0.0158,
    };

  return (
    <div className='maps'>
      <div className='title-background'>
        <h1 className='maps-title'>COME VISIT OUR CAFE</h1>
      </div>
        <div 
          style={{ 
            height: '90vh', 
            width: '160%', 
            display: 'flex',
            position: 'relative', 
            top: '-30vh',
            left: '-30vw',
            gap: '100px'
        }}>
          <Card />
        <GoogleMapReact
          /* Do NOT save/commit this API key to GitHub or any public platform */
          /*
          bootstrapURLKeys={{ key: "AIzaSyDjDtvTsEQE-vypuenFqAgolwslZGmAm_o" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <LocationPin 
            lat={defaultProps.lat}
            lng={defaultProps.lng}
            text={location.address}
            position={defaultProps.center}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default GoogleMap
*/