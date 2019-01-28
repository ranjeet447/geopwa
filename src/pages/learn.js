// import React, { createRef,Component} from 'react'
// import { GeoJSON, Map } from "react-leaflet";
// import { render } from 'react-dom'
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
// import L from 'leaflet'

// class Hello extends React.Component {
//     constructor(props) {
//      super(props);
//        // Define your state object here
//        this.state = {
//          name: 'Jane Doe'
//        }
//      }
//      render(){
//        return <h1>Hello { this.state.name }</h1>;
//      }
//   }
//   export default Hello


// export default class SimpleExample extends Component {
//     state = {
//       lat: 51.505,
//       lng: -0.09,
//       zoom: 13,
//     }
  
//     render() {
//       const position = [this.state.lat, this.state.lng]
//       return (
//         <div style={{margin:'2em'}}>
//             <Map center={position} zoom={this.state.zoom} style={{'height':'600px'}}>
//             <TileLayer
//                 attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <Marker position={position}>
//                 <Popup>
//                 A pretty CSS3 popup. <br /> Easily customizable.
//                 </Popup>
//             </Marker>
//             </Map>
//         </div>
//       )
//     }
//   }

// export default class EventsExample extends Component {
//     state = {
//       hasLocation: false,
//       latlng: {
//         lat: 51.505,
//         lng: -0.09,
//       },
//     }
  
//     mapRef = createRef()
  
//     handleClick = () => {
//       const map = this.mapRef.current
//       if (map != null) {
//         map.leafletElement.locate()
//       }
//     }
  
//     handleLocationFound = (e) => {
//       this.setState({
//         hasLocation: true,
//         latlng: e.latlng,
//       })
//     }
  
//     render() {
//       const marker = this.state.hasLocation ? (
//         <Marker position={this.state.latlng}>
//           <Popup>You are here</Popup>
//         </Marker>
//       ) : null
  
//       return (
//         <Map
//           center={this.state.latlng}
//           length={4}
//           onClick={this.handleClick}
//           onLocationfound={this.handleLocationFound}
//           ref={this.mapRef}
//           zoom={13}
//           style={{'height':'600px'}}>
//           <TileLayer
//             attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           {marker}
//         </Map>
//       )
//     }
//   }



//   import {
//     Circle,
//     FeatureGroup,
//     LayerGroup,
//     Rectangle,
//   } from 'react-leaflet'
//   const center = [51.505, -0.09]
// const rectangle = [[51.49, -0.08], [51.5, -0.06]]
// export default class OtherLayersExample extends Component {
//   render() {
//     return (
//       <Map center={center} zoom={13} style={{'height':'600px'}}>
//         <TileLayer
//           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <LayerGroup>
//           <Circle center={center} fillColor="blue" radius={200} />
//           <Circle center={center} fillColor="red" radius={100} stroke={false} />
//           <LayerGroup>
//             <Circle
//               center={[51.51, -0.08]}
//               color="green"
//               fillColor="green"
//               radius={100}
//             />
//           </LayerGroup>
//         </LayerGroup>
//         <FeatureGroup color="yellow">
//           <Popup>Popup in FeatureGroup</Popup>
//           <Circle center={[51.51, -0.06]} radius={200} />
//           <Rectangle bounds={rectangle} />
//         </FeatureGroup>
//       </Map>
//     )
//   }
// }

// export default class Component extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {count: props.initialCount};
//         this.onClick = this.onClick.bind(this);
//     }
    
//     render() {
//         return <div onClick={this.onClick}>{this.state.count}</div>;
//     }
    
//     onClick() {
//         this.setState({count: this.state.count + 1});
//     }
// }

// export default class Clock extends Component { 
//     constructor(props) 
//     { 
//         super(props); 
//         this.state = { val:0 }; 
//         this.update = this.update.bind(this);   
//     } 

//     componentWillMount(){
//         console.log('componentWillMount')
//     }

//     componentDidMount(){
//         console.log('componentDidMount')
//     }
//     update(){
//         this.setState({val:this.state.val+1});
//     }
  
//     render() 
//     { 
//         return ( 
//             <button onClick={this.update}>{this.state.val}</button> 
//     ); 
//   } 
// }


