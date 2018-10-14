import React from 'react';
import {ScrollView, ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import axios from 'axios';
import Background from "./login.png";
import Pb from "./PillBasket.png";
import Ham from "./hamburger.png";
import Bground from "./Katman1.png";
import Search from "./search.png";

export default class Eczane extends React.Component{
    constructor(){
        super();
        this.state = {
            details : [],
            count : 1,
        }
        this.apiUrl = "http://192.168.1.164:8000";
    }
    componentDidMount(){
        return fetch(this.apiUrl + '/pharmacies/')
            .then((response) => response.json())
            .then((responseJson) => {
    
            this.setState({
              details: responseJson,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
    }
    func(array){
        return(array.includes(this.state.count))
    }
    render(){
        let details = this.state.details;
        let imageSource = this.apiUrl + this.props.image;
        return(
            <ImageBackground style = {styles.container} source = {Background} >
                        <ImageBackground source = {Bground} style = {styles.name}>
                            <TouchableOpacity><Image style = {styles.up1} source = {Search}/></TouchableOpacity>
                            <TouchableOpacity style = {styles.up2}><Text style = {{fontSize : 12, color : "white", textAlign : "center", textAlignVertical : "center" }}>{this.props.title}</Text></TouchableOpacity>
                            <TouchableOpacity><Image style = {styles.up3} source = {Ham}/></TouchableOpacity>
                        </ImageBackground>
                        <View style = {{height : 10}}/>
                        <View style = {{alignSelf : "center"}}>
                            <Image
                                style={{width: 150, height: 75}} 
                                source = {{uri : imageSource}}
                            />
                        </View>
                        <View style = {styles.comp}>
                            <Text style = {styles.txt}>Fiyat : {this.props.price} TL</Text>
                        </View>
                        <TouchableOpacity style = {styles.comp} onPress = {() =>this.props.navigation.navigate("explain", {desc : this.props.desc})}>
                            <Text style = {styles.txt}>Kullanim detaylari</Text> 
                        </TouchableOpacity>
                        <View style = {{flexDirection : "row"}}>
                            <View style = {{width : width(60)}}/>
                            <TouchableOpacity style = {styles.button}><Text> Sepete ekle </Text></TouchableOpacity>
                        </View>
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
        justifyContent : "center",
        alignSelf : "center",
        alignItems : "center",
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
        height : 30,
        backgroundColor : "#9c2413",
        justifyContent : "center",
        alignItems : "center",
        alignSelf : "center",
    },
    txt : {
        textAlign : "center",
        textAlignVertical : "center",
    },
    txt2 : {
        textAlign : "center",
        textAlignVertical : "center",
    },
    button : {
        borderRadius : 25,
        backgroundColor : "rgba(0, 0, 0, 0.5)",
        color : "rgba(255, 255, 255, 0.7)",
        justifyContent: 'center',
        alignItems : "center",
        height : 25,
        width : 100,
    },
  })