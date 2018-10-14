import React from 'react';
import {ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import axios from 'axios';
import Background from "./login.png";
import Pb from "./PillBasket.png";
import Ham from "./hamburger.png";
import Bground from "./Katman1.png";
import Search from "./search.png";

export default class Nobetci extends React.Component{
    constructor(){
        super();
        this.state = {
            pharmacies: [],
        };
        this.apiUrl = "http://192.168.1.164:8000";
    }
    
    componentDidMount(){
        return fetch(this.apiUrl + '/pharmacies/')
            .then((response) => response.json())
            .then((responseJson) => {
    
            this.setState({
                pharmacies: responseJson,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
    }

    render(){
        let pharmacies = this.state.pharmacies;
        let ar = [3, 6, 13, 16, 25, 23];
        return(
            <ImageBackground style = {styles.container} source = {Background}>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate("home")} style = {styles.goback}>
                    <Text style = {{color : "blue", textDecorationLine : "underline"}}></Text>     
                </TouchableOpacity>
                <ImageBackground source = {Bground} style = {styles.name}>
                    <TouchableOpacity><Image style = {styles.up1} source = {Search}/></TouchableOpacity>
                    <TouchableOpacity style = {styles.up2}><Text style = {styles.up2}>Eczaneler</Text></TouchableOpacity>          
                    <TouchableOpacity><Image style = {styles.up3} source = {Ham}/></TouchableOpacity>
                </ImageBackground>
                <View style = {styles.bot}>
                    <FlatList  style = {{flex : 1}}
                        data={pharmacies}
                        renderItem={({item}) => 
                        <TouchableOpacity
                        style = {styles.container}
                        onPress = {() => this.props.navigation.navigate("eczane", {name : item.name, addr : item.addr,
                        rating : item.rating, pills : item.pills, products : item.products})}> 
                        <View style = {{width : width(100), height : 20}}></View>
                        <View style = {styles.comp}>
                            <Text style = {styles.txt}>{item.name}</Text>
                            <Text style = {styles.txt2}>{ar[item.id-1]} dakika</Text>
                        </View>
                        </TouchableOpacity>
                        }
                        keyExtractor={({id}, index) => id}
                    />
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
        alignSelf : "center",
        justifyContent : "center",
    },
    txt : {
        textAlign : "left",
        textAlignVertical : "center",
    },
    txt2 : {
        textAlign : "right",
        textAlignVertical : "center",
    }
  })