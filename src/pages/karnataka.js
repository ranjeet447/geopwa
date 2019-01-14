import React from 'react'
// import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import KarnatakaMap  from '../components/MyMap'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {districts} from '../districts'

// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
const Karnataka = () => (
  <Layout>
    <SEO title="Page two" />
    <KarnatakaMap center={{lat:15.3173, lng: 75.7139}} 
      style={{
        fillColor: '#4486f7',
        fillOpacity: 0.1,
        color: '#4486f7',
        weight: 1,
        opacity: 1,
        }}
      zoom={6}
      geojson={districts}
    />
  </Layout>
);

export default Karnataka
