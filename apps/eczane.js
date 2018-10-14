import React from 'react';
import {ImageBackground ,Image, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import axios from 'axios';
import Background from "./login.png";

export default class Eczane extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 1,
            allproducts : [],
        }
        this.apiUrl = "http://192.168.1.164:8000";
    }
    componentDidMount(){
        return fetch(this.apiUrl + '/products/')
            .then((response) => response.json())
            .then((responseJson) => {
    
            this.setState({
                allproducts: responseJson,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
    }
    func(a, title, price){
        if(this.props.products.includes(a)){
            return <View style = {{flexDirection : "row" , width :width(100), justifyContent: 'space-evenly', }}>
                <Text style = {{fontSize : 10, textAlign : "left"}}>{title}</Text>
                <Text style = {{fontSize : 10, textAlign : "right"}} >{"Fiyat => " + price}</Text>
                <TouchableOpacity style = {styles.button}><Text style = {{fontSize : 10, textAlign : "left"}}>Sepete ekle</Text></TouchableOpacity>
                </View>;
        }
    }
    render(){
        let allproducts = this.state.allproducts;
        return(
            <ImageBackground style = {styles.container} source = {Background}>
                <TouchableOpacity onPress = {() => this.props.navigation.goBack()}>
                    <Text style = {{color : "blue", textDecorationLine : "underline"}}></Text>
                </TouchableOpacity>
                <View style = {{height : 15}}></View>
                <View style = {styles.container}>
                    <View style = {styles.comp}>
                        <Text style = {styles.txt}>Eczane adi</Text>
                        <Text style = {styles.txt2}>{this.props.name}</Text>
                    </View>
                    <View style = {{height : 15}}/>
                    <View style = {styles.comp}>
                        <Text style = {styles.txt}>Adres </Text>
                        <Text style = {{fontSize : 10, textAlign : "right",textAlignVertical : "center"}}>{this.props.addr}</Text>
                    </View>
                    <View style = {{height : 15}}/>
                    <View style = {styles.comp}>
                        <Text style = {styles.txt}>Puan</Text>
                        <Text style = {styles.txt2}>{this.props.rating}</Text>
                    </View>
                    <View style = {{height : 30}}/>
                    <Text style = {{fontSize : 20, color : "white"}}>İlaclar</Text>
                    <FlatList
                        data={allproducts}
                        renderItem={({item}) => 
                        <View>
                            <View style = {{height : 10}}/>
                            {this.func(item.id, item.pill.title, item.price)}
                            <View style = {{height : 10}}/>
                        </View>
                        
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
    },
    button : {
        backgroundColor : "rgba(0, 0, 0, 0.1)",
        color : "rgba(255, 255, 255, 0.7)",
        justifyContent: 'center',
        alignItems : "center",
        borderRadius : 30,
        borderColor : "white",
        borderWidth : 1,
      },
  }) 