import React, { useEffect } from 'react';
import { AdvancedMarker, Pin, APIProvider, Map } from '@vis.gl/react-google-maps'

const GoogleMaps = () => {
  const position = {lat: 51.4064, lng: 0.0158};
  const markerPosition = {lat: 51.40648, lng: 0.01576}

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <section id="location" className='map-container'>
      {/* Map title */}
      <h1>WHERE WE'RE LOCATED</h1>
      <h2>ROASTAR SPECIALTY COFFEE</h2>
      <p>8 East St, Bromley, BR1 1QX</p>
      {/* Map content */}
      <div  className='google-maps'>
        <APIProvider apiKey={'AIzaSyDUVwjF0wbf6ISGD8KaQBiRgAIKz0W6c4w'}>
          <Map 
            style={{width: '100%', height: '100vh'}}
            defaultCenter={position} 
            defaultZoom={20} 
            mapId="DEMO_MAP_ID"
          >
            <AdvancedMarker position={markerPosition}>
              <Pin 
                background={'var(--main-green)'}
                borderColor={'black'}
                glyphColor={'black'}
                scale={1.2}
              />
            </AdvancedMarker>
          </Map>
        </APIProvider>
      </div>
    </section>
  )
}

export default GoogleMaps