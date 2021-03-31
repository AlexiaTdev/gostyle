import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { render } from 'react-dom';
import GetData from '../components/GetData'





export default function ListCode(props){

    const [myList, setMyList]=useState([])

    useEffect(()=>{
        setMyList([])
        console.log("list1")
                console.log(myList)
                console.log("list1")
        GetData().then((datas)=>{
            datas.map((data)=>{
                myList.push(data)
                console.log("list2")
                console.log(myList)
                console.log("list2")
            })
        })
        

    },[])
    return (        
        <View style={styles.container}>
            <Text  style={styles.itemTitle}>Liste des promos</Text>
            
            <Text  style={styles.item}>{myList.map((l)=>(
                <View style={styles.container}>
                    <Text  style={styles.item}>{l.codePromo}</Text>
                    <Text  style={styles.item}>{l.reduction}</Text>            
                </View>))}
            </Text>
            
        </View>
        )
    
}



const styles = StyleSheet.create({
container: {
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
},
itemTitle: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  qrCode: {
    width: '30%'
  },
item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
})

/*class ListCode extends React.Component {
    constructor(props){
        super(props);

      
      }
    state = {
        list: [],
        a:"aaaaaaaaa"
      }
      componentWillMount(){
        GetData().then((datas)=>{
            datas.map((data)=>{
                this.state.list.push(data)
                console.log("list")
                console.log(this.state.list)
                console.log("list")
            })
        })

        this.state.list.map((l)=>{
            console.log("l")
            console.log(l)
            console.log("l")
        })
        console.log(this.state.a)
      }

    render(){
       
        
        return (        
            <View style={styles.container}>
                <Text  style={styles.itemTitle}>Liste des promos</Text>
                
                <Text  style={styles.item}>{this.state.list}</Text>
                <Text  style={styles.item}>{this.state.a}</Text>
                
            </View>
            )
        };
    }



const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    itemTitle: {
        padding: 10,
        fontSize: 18,
        height: 44,
        backgroundColor: 'rgba(247,247,247,1.0)',
      },
      qrCode: {
        width: '30%'
      },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        backgroundColor: 'rgba(247,247,247,1.0)',
      },
    })

  export default ListCode*/