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

  getRandomColor =()=> {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  onEachFeature=(feature,layer)=>{
    if(feature.properties && feature.properties.NAME_2){
        layer.bindPopup(feature.properties.NAME_2)
    }
  }
  render() {
    const position = [this.state.center.lat, this.state.center.lng];
    if (typeof window !== 'undefined') {
      return (
        <Map id="map2" center={position} zoom={this.state.zoom} minZoom={7} touchZoom={true}  style={mapStyle}>
          <TileLayer url={basemapUrl} id='mapbox.light' />
          {/* {this.state.geojson.map((feature,i)=>{ */}
            {/* return <GeoJSON data={this.state.geojson} style={this.state.style} onClick={} /> */}
          {/* })} */}
          <GeoJSON  data={this.state.geojson} style= {this.state.style} onClick={this.onEachFeature} />
        </Map>
      )
    }
    return null
  }
}