import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin';
import Card from './Card'
import '../Map.css'

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
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <LocationPin 
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default GoogleMap