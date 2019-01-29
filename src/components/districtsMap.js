import {districts} from '../districts'
import React, { Component } from 'react'
import {Map, TileLayer, GeoJSON } from 'react-leaflet'
// const mapboxAPIkey = "pk.eyJ1IjoicmFuamVldDE1NiIsImEiOiJjanFxaWs4aGkwY3BrNDltcnRhNzAxMjYzIn0.M5XBb3laBxOPqx0D4pWDww";
// const basemapUrl = `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${mapboxAPIkey}`;
const basemapUrl = `https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png`



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
    this.zoomToFeature=this.zoomToFeature.bind(this)
    this.onEachFeature=this.onEachFeature.bind(this)
  }

  componentDidMount() {
    this.map = this.refs.leafletMap.leafletElement; // <= this is the Leaflet Map object
  }

  zoomToFeature(e) {
    this.map.fitBounds(e.target.getBounds());
    console.log('zoomToFeature')
  }

  highlightFeature(e) {
      var layer = e.target;
      layer.setStyle({
        weight: 2,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
      });
    //   if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    //   }
  }
  
  resetHighlight(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 1,
        color: '#4486f7',
        dashArray: '',
        fillOpacity: 0.3
    });
  }

//show district name on click
  onEachFeature=(feature,layer)=>{
    if(feature.properties && feature.properties.NAME_2){
        // layer.bindPopup('<table><tr><td>Country</td><td>'+feature.properties.NAME_0+'</td></tr><tr><td>State</td><td>'+feature.properties.NAME_1+'</td></tr><tr><td>District</td><td>'+feature.properties.NAME_2+'</td></tr></table>');
        layer.bindPopup(feature.properties.NAME_2);
    }
    layer.on({
        mouseover: this.highlightFeature,
        mouseout: this.resetHighlight,
        click: this.zoomToFeature
    });
  }
  
  render() {
    const position = [this.state.center.lat, this.state.center.lng];
    if (typeof window !== 'undefined') {
      return (
        <Map id="map1" ref='leafletMap' center={position} zoom={this.state.zoom} minZoom={5} touchZoom={true}  style={mapStyle}>
          <TileLayer url={basemapUrl} id='mapbox.light' />
          <GeoJSON ref='geojson'  data={districts} style= {this.state.style} onEachFeature={this.onEachFeature} />
        </Map>
      )
    }
    return null
  }
}