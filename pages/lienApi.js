import React, { Component } from 'react';
import Promos from '../components/getPromos.js'

class lienApi extends Component {
  constructor(props){
    super(props);
  }
  state = {
    promos: []
  }

  componentDidMount() {
    fetch('http://localhost:19002/codepromo/'+this.props.qrCode)
    .then(res => res.json())
    .then((data) => {
      this.setState({ promos: data })
    })
    .catch(console.log)
  }
  
  render() {
    fetch('http://localhost:19002/codepromo/'+this.props.qrCode)
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