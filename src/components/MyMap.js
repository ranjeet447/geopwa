import React, { Component } from 'react'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import { navigate } from "gatsby"

const mapboxAPIkey = "pk.eyJ1IjoicmFuamVldDE1NiIsImEiOiJjanFxaWs4aGkwY3BrNDltcnRhNzAxMjYzIn0.M5XBb3laBxOPqx0D4pWDww";
const basemapUrl = `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${mapboxAPIkey}`;

const mapStyle = {
  height:'500px',
  margin:'aut0'
}


export default class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount(){
    this.setState({
      center:this.props.center,
      style:this.props.style,
      zoom:this.props.zoom,
      geojson:this.props.geojson
    });
  }
  start = () => {
    navigate('/karnataka'); 
  }
  
  render() {
    const position = [this.state.center.lat, this.state.center.lng];
    if (typeof window !== 'undefined') {
      return (
        <Map id="map1" center={position} zoom={this.state.zoom} minZoom={5} touchZoom={true}  style={mapStyle}>
          <TileLayer url={basemapUrl} id='mapbox.light' />
          <GeoJSON  data={this.state.geojson} style= {this.state.style} onclick={this.start} />
        </Map>
      )
    }
    return null
  }
}