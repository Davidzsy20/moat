import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const defaultProps = {
    center: {lat: 40.747, lng: -73.943},
    zoom: 11
  };

export default class GMAP extends Component {

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: ['AIzaSyCoSa78JNR_o2wkT4pkyJz9l1BO8qDP8Uo'] }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={40.7479725}
          lng={-73.9432818}
          text={'LINC'}
        />
      </GoogleMapReact>
    );
  }
}