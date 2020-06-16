import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = () => <div><span className="fa fa-star fa-3x" style={{color:'red'}}></span></div>;
 
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 38,
      lng: 250
    },
    zoom: 1
  };
 
  render() {
   
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBNt7ZBq7Zrjx43pDpEacqn9Mhh-px9mJQ'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;