import React from 'react'
import { GoogleMapReact, LocationPin } from 'google-map-react'


const Map = ({ location, zoomLevel }) => {
const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}
return (
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
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

// export default Maps


export default GoogleApiWrapper({
    apiKey: ("AIzaSyDc5Br3kD_GVx6Wje02t1CHVAgl77hom7o")
  })(MapContainer)

{/* AIzaSyDc5Br3kD_GVx6Wje02t1CHVAgl77hom7o */}