import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MyMap  from '../components/MyMap'

{/* <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css"></link> */}


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <MyMap/>
    </div>
    
    <Link to="/karnataka/">map</Link>
  </Layout>
)

export default IndexPage
