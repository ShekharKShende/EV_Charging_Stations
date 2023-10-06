import GoogleMapReact from 'google-map-react'
import locationIcon from '@iconify/icons-mdi/car-outline'
import { Icon } from '@iconify/react'
import React from 'react';

const llocation = {
  location: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
  address: '1600 Amphitheatre Parkway, Mountain View, california.'
}

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)


const Map = ({ location, zoomLevel = 11 }) => (
  <div style={{ height: '80vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyDvPWILuXHr4SkX9fNHmTa6aS76Ym85n_s', libraries: ['places', 'geometry',] }}
      defaultCenter={location}
      defaultZoom={zoomLevel}
    >
      <LocationPin
        lat={location.lat}
        lng={location.lng}
        text={location.location}
      />
    </GoogleMapReact>
  </div>

)

export default Map;