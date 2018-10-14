import React from 'react';
import {ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import axios from 'axios';
import Background from "./login.png";
import Pb from "./PillBasket.png";
import Ham from "./hamburger.png";
import Bground from "./Katman1.png";
import Search from "./search.png";

export default class Ilaclar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pills: [] 
        };
        this.apiUrl = "http://192.168.1.164:8000";
    }
    componentDidMount(){
        return fetch(this.apiUrl + '/pills/') 
            .then((response) => response.json())
            .then((responseJson) => {
    
            this.setState({
              pills: responseJson,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
    }

    render(){
        let array = [6, 12, 8, 10, 11, 13, 4, 3, 15, 8];
        let pills = this.state.pills;
        return(
            <ImageBackground style = {styles.container} source = {Background}>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate("home")}>
                    <Text style = {{color : "blue", textDecorationLine : "underline"}}></Text>     
                </TouchableOpacity>
                <ImageBackground source = {Bground} style = {styles.name}>
                    <TouchableOpacity><Image style = {styles.up1} source = {Search}/></TouchableOpacity>
                    <TouchableOpacity style = {styles.up2}><Text style = {styles.up2}>Ilaclar</Text></TouchableOpacity>
                    <TouchableOpacity><Image style = {styles.up3} source = {Ham}/></TouchableOpacity>
                </ImageBackground>
                <FlatList
                    data={pills}
                    renderItem={({item}) => 
                    <TouchableOpacity
                    style = {styles.container}
                    onPress = {() => this.props.navigation.navigate("satin", {title : item.title, price : array[item.id-1],
                    image : item.image, desc : item.desc, pharmacies : item.pharmacies})}> 
                    <View style = {{width : width(100), height : 20}}></View>
                    <View style = {styles.comp}>
                        <Text style = {styles.txt}>{item.title}</Text>
                        <Text style = {styles.txt2}>{array[item.id-1]} TL</Text>
                    </View>
                    </TouchableOpacity>
                    }
                    keyExtractor={({id}, index) => id}
                />
            </ImageBackground>
        );
    }
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems : "center",
      },
      name: {
        height : 50,
        width : width(100),
        justifyContent : "space-evenly",
        alignItems : "center",
        flexDirection : "row",
      },
      up1 : {
        width : 17,
        height : 25,
      
      },
      up2 : {
        width : 150,
        height : 40,
        color : "white",
        textAlign : "center",
        fontSize : 30,
      },
      up3 : {
        width : 17,
      height : 25,
      },
    goback : {
        textAlign : "left",
        alignItems : "flex-start",
        flexDirection : "row",
        alignSelf : "flex-start",
        justifyContent : "flex-start",
    },
    bot : {
        width : width(100),
        height : height(100) -100
    },
    comp : {
        width : width(100),
        height : 40,
        backgroundColor : "#9c2413",
        justifyContent : "center",
        alignItems : "stretch"
    },
    txt : {
        textAlign : "left",
        textAlignVertical : "top",
    },
    txt2 : {
        textAlign : "right",
        textAlignVertical : "top",
    }
  })