import {karnataka} from '../kgeojson'
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
      center:{lat:20.5937, lng: 78.9629},
      style:{
        fillColor: 'lime',
        fillOpacity: 0.1,
        color: 'green',
        weight: 1,
        opacity: 1,
      },
      zoom:5,
    };
  }

  render() {
    const position = [this.state.center.lat, this.state.center.lng];
    // if (typeof window !== 'undefined') {
      return (
        <Map id="map1" ref={m => { this.leafletMap = m; }} center={position} zoom={this.state.zoom} minZoom={5} touchZoom={true}  style={mapStyle}>
          <TileLayer url={basemapUrl} id='mapbox.light' />
          <GeoJSON  data={karnataka} style= {this.state.style} onclick={this.props.onclick}/>
        </Map>
      )
    // }
    // return null
  }
}