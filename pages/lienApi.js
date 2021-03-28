import React, { Component } from 'react';
import Promos from '../components/getPromos'

class lienApi extends Component {
  constructor(props){
    super(props);
  }
  state = {
    promos: []
  }


/*componentWillReceiveProps(){
  console.log("avantw")
  console.log(this.props.qrCode)
  console.log("apresww")
  fetch('http://192.168.137.1:3000/codepromo/'+this.props.qrCode)
  .then(res => res.json())
  .then((data) => {
    this.setState({ promos: data })
  })
  .catch(console.log)
}*/

  componentDidMount() {
    fetch('http://192.168.137.1:3000/codepromo/'+this.props.qrCode)
    .then(res => res.json())
    .then((data) => {
      this.setState({ promos: data })
    })
    .catch(console.log)
  }
  
  render() {
    fetch('http://192.168.137.1:3000/codepromo/'+this.props.qrCode)
    .then(res => res.json())
    .then((data) => {
      this.setState({ promos: data })
    })
    .catch(console.log)
    return (
      <Promos promos={this.state.promos} />
    )
  }
}

export default lienApi