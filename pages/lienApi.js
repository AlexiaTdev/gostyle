import React, { Component } from 'react';
import Promos from '../components/getPromos.js'

class lienApi extends Component {

  state = {
    promos: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/codepromo')
    .then(res => res.json())
    .then((data) => {
      this.setState({ promos: data })
    })
    .catch(console.log)
  }
  render() {
    return (
      <Promos promos={this.state.promos} />
    )
  }
}

export default lienApi