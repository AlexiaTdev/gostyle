import React, { Component } from 'react';
import Promos from '../components/getPromos.js'

import StoreData from '../components/StoreData'
import GetData from '../components/GetData'
import getData from '../components/GetData';

class lienApi extends Component {
  constructor(props){
    super(props);
    
    abc={"abcdefz":"abcd"};
  
  }
  state = {
    promos: [],
    myData:[],
    mydata2:[]
  }

 
  
  render() {
    GetData().then((getdata)=>{
      this.state.mydata2=getdata
      this.state.myData=this.state.mydata2==null?[]:this.state.mydata2
      console.log("avantgetData")
      console.log(this.state.myData)
      console.log("apresgetData")
    })
    fetch('http://192.168.137.1:3000/codepromo/'+this.props.qrCode)
    .then(res => res.json())
    .then((datas) => {      
      datas.map((data)=>(
        this.state.myData.push(data)
      ))
      console.log("avantmap")
        console.log(this.state.myData)
        console.log("apresmap")
      //console.log(data)
      this.setState({ promos: this.state.myData })
      StoreData(this.state.myData)
    })
    .catch(console.log)
    
    return (
      <Promos promos={this.state.promos} />
    )
  }
}

export default lienApi