/*
** Ce component reçoit le contenu du qrCode via le menu Home
** Il envoi ensuite une requête GET à l'API de gostyle pour obtenir toutes les données liées à ce code
** Ces données sont ensuite envoyées au component Promos.js
*/

import React, { Component } from 'react';
import Promos from '../components/Promos.js'

class GetPromos extends Component {
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
    
    return (
      <Promos promos={this.state.promos} qrCode={this.props.qrCode}/>
    )
  }
}

export default GetPromos