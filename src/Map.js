import GoogleMapReact from 'google-map-react'
import locationIcon from '@iconify/icons-mdi/car-outline'
import { Icon } from '@iconify/react'
import EV from './ev.png'
import React from 'react';

const llocation = {
  location: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
  address: '1600 Amphitheatre Parkway, Mountain View, california.'
}

const LocationPin = ({ text }) => {
  return (
    <div className="pin">
      <img style={{ width: 50 }} src={EV} />
      <p className="pin-text">{text}</p>
    </div>
  )
}


const Map = ({ location, zoomLevel = 11 }) => {

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        key={new Date().getTime()}
        bootstrapURLKeys={{ key: 'AIzaSyDvPWILuXHr4SkX9fNHmTa6aS76Ym85n_s', libraries: ['places', 'geometry',] }}
        center={{ lat: location.lat, lng: location.lng }}
        defaultZoom={zoomLevel}
      >
        {location?.lng && (<LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />)}
      </GoogleMapReact>
    </div>

  )
}

export default Map;