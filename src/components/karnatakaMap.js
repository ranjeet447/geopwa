import {karnataka} from '../kgeojson'
import React, { Component } from 'react'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
// const mapboxAPIkey = "pk.eyJ1IjoicmFuamVldDE1NiIsImEiOiJjanFxaWs4aGkwY3BrNDltcnRhNzAxMjYzIn0.M5XBb3laBxOPqx0D4pWDww";
// const basemapUrl = `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${mapboxAPIkey}`;
const basemapUrl = `https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png`

var Loader = require('react-loader');


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
      loaded:false
    };
    this.removeLoader=this.removeLoader.bind(this)
  }

  removeLoader () {
    console.log('remove loader')
    this.setState({loaded:true });
  }

  render() {
    const position = [this.state.center.lat, this.state.center.lng];
    if (typeof window !== 'undefined') {
      return (
        <div>
          <Map id="map1" ref='map' center={position} zoom={this.state.zoom} minZoom={5} touchZoom={true}  style={mapStyle}>
            <TileLayer onLoad={this.removeLoader} url={basemapUrl} id='mapbox.light'/>
            <Loader loaded={this.state.loaded} lines={100} color={'#02b3e4'} radius={20} length={1}>         
              <GeoJSON  data={karnataka} style= {this.state.style} onclick={this.props.onclick}/>
            </Loader> 
          </Map>
        </div>
      )
    }
    return null
  }
}