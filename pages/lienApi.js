import React, { Component } from 'react';
import Promos from '../components/getPromos'
import firebase from '@react-native-firebase/app';
import * as storage from '@react-native-firebase/storage';
import storageExport from '@react-native-firebase/storage';


class lienApi extends Component {
  constructor(props){
    super(props);
  }
  state = {
    promos: [],
    adds:[],
    check:[],
    check1:[],
    check2:"",
    check3:""
  }
  
  render() {
    console.log(this.state.check2)
    console.log(this.props.qrCode)
    if(this.state.check2==this.props.qrCode)
    {
      console.log("1er if")
    }
    else{
      console.log("else")      
      this.state.check3=this.props.qrCode
      this.state.check2=this.props.qrCode
    }
    
    fetch('http://192.168.137.1:3000/codepromo/'+this.state.check3)
    .then(res => res.json())
    .then((data) => {
      this.setState({ adds: data })     

    })
    .catch(console.log)
    
    /*console.log("adds")
    console.log(this.state.adds)*/
    this.state.adds.map((add)=>
    {
      this.state.promos.push(add);
    })
    this.state.check3=""
        
        
      

    return (
      <Promos promos={this.state.promos} />
    )
  }
}

export default lienApi