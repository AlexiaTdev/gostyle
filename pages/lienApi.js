import React, { Component } from 'react';
import Promos from '../components/getPromos.js'
import GetData from '../components/GetData.js'

class lienApi extends Component {
  constructor(props){
    super(props);
  }
  state = {
    promos: []
  }

  
  render() {
    fetch('http://192.168.137.1:3000/codepromo/'+this.props.qrCode)
    .then(res => res.json())
    .then((data) => {
      this.setState({ promos: data })
    })
    .catch(console.log)

    GetData().then((data)=>{
      console.log("data")
      console.log(data)
    })

    return (
      <Promos promos={this.state.promos} />
    )
  }
}

export default lienApi