import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MyMap  from '../components/MyMap'
import {karnataka} from '../kgeojson'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <MyMap center={{lat:20.5937, lng: 78.9629}} 
      style={{
        fillColor: 'lime',
        fillOpacity: 0.1,
        color: 'green',
        weight: 1,
        opacity: 1,
      }}
      zoom={5}
      geojson={karnataka}
    />
  </Layout>
)

export default IndexPage
