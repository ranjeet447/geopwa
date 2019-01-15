import React, { Component } from 'react'
import { Map, TileLayer, GeoJSON,Marker,Popup } from 'react-leaflet'
// import { navigate } from "gatsby"
import {districts} from '../districts'
import {karnataka} from '../kgeojson'

// const mapboxAPIkey = "pk.eyJ1IjoicmFuamVldDE1NiIsImEiOiJjanFxaWs4aGkwY3BrNDltcnRhNzAxMjYzIn0.M5XBb3laBxOPqx0D4pWDww";
// const basemapUrl = `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${mapboxAPIkey}`;
const basemapUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

const mapStyle = {
  height:'500px',
  margin:'aut0'
}


export default class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center:this.props.center,
      style:this.props.style,
      zoom:this.props.zoom,
      geojson:this.props.geojson,
      detailedView:false
    };
    this.toggleView=this.toggleView.bind(this);
  }

  // componentWillMount(){
  //   this.setState({
      
  //   });
  // }

  toggleView () {
    if(this.state.detailedView){
      this.setState({
        center:{lat:20.5937, lng: 78.9629},
      style:{
        fillColor: 'lime',
        fillOpacity: 0.1,
        color: 'green',
        weight: 1,
        opacity: 1,
      },
      zoom:5,
      geojson:karnataka,
      detailedView:false
    },()=>{
      console.log(this.state)
     });
    }else{
     this.setState({
      center:{lat:15.3173, lng: 75.7139},
      style:{
        fillColor: '#4486f7',
        fillOpacity: 0.3,
        color: '#4486f7',
        weight: 1,
        opacity: 1,
        },
      zoom:6,
      geojson:districts,
      detailedView:true
     },()=>{
      console.log(this.state)
     });
    }
  
  }
  
  render() {
    console.log('render')
    let data=this.state.geojson;
    let style = this.state.style;
    const position = [this.state.center.lat, this.state.center.lng];
    if (typeof window !== 'undefined') {
      return (
        <Map id="map1" center={position} zoom={this.state.zoom} minZoom={5} touchZoom={true}  style={mapStyle}>
          <TileLayer url={basemapUrl} id='mapbox.light' />
          <GeoJSON  data={data} style= {style} onclick={this.toggleView} />
        </Map>
      )
    }
    return null
  }
}