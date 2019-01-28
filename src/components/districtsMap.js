import {districts} from '../districts'
import React, { Component } from 'react'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
const mapboxAPIkey = "pk.eyJ1IjoicmFuamVldDE1NiIsImEiOiJjanFxaWs4aGkwY3BrNDltcnRhNzAxMjYzIn0.M5XBb3laBxOPqx0D4pWDww";
const basemapUrl = `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${mapboxAPIkey}`;


const mapStyle = {
  height:'500px',
  margin:'aut0'
}
export default class KarnatakaMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
        center:{lat:15.3173, lng: 75.7139},
        style:{
          fillColor: '#4486f7',
          fillOpacity: 0.3,
          color: '#4486f7',
          weight: 1,
          opacity: 1,
          },
        zoom:6,
    };
  }

//show district name on click
  onEachFeature=(feature,layer)=>{
    if(feature.properties && feature.properties.NAME_2){
        layer.bindPopup(feature.properties.NAME_2)
    }
  }
  
  render() {
    const position = [this.state.center.lat, this.state.center.lng];
    if (typeof window !== 'undefined') {
      return (
        <Map id="map1" ref={m => { this.leafletMap = m; }} center={position} zoom={this.state.zoom} minZoom={5} touchZoom={true}  style={mapStyle}>
          <TileLayer url={basemapUrl} id='mapbox.light' />
          <GeoJSON  data={districts} style= {this.state.style} onEachFeature={this.onEachFeature} />
        </Map>
      )
    }
    return null
  }
}