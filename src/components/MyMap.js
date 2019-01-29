import React, { Component } from 'react'

import KarnatakaMap from './karnatakaMap'
import DistrictsMap from './districtsMap' 
export default class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDistricts:false
    };
    this.outlineDistricts=this.outlineDistricts.bind(this);
    this.outlineKarnataka=this.outlineKarnataka.bind(this)
  }

  
  outlineKarnataka () {
    this.setState({
      showDistricts:false
    },()=>{
      console.log(this.state)
    });
  }
  outlineDistricts () {
    this.setState({
      showDistricts:true
     },()=>{
      console.log(this.state)
     });
  }

  render() {
      if (this.state.showDistricts) {
        return(
         <div>
            <button onClick={this.outlineKarnataka} >&larr;</button>
            <DistrictsMap onclick={this.outlineKarnataka.bind(this)}></DistrictsMap>
         </div>
        )
      }else{
        return(
          <KarnatakaMap onclick={this.outlineDistricts.bind(this)}></KarnatakaMap>
        )
      }
    }    
}