import React, { Component } from 'react';
import {Image, TouchableHighlight, ImageBackground, Alert, AppRegistry, TextInput, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Background from "./login.png";
import Logo from "./logo.png";
import { width, height, totalSize } from 'react-native-dimension';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
        username: "user",
        password :  "password",
    };
  }
  handleClick(){
    if(this.state.username == "user" && this.state.password == "password"){
      this.props.navigation.navigate("home", {username : this.state.username}, {password : this.state.password});
    }
    else{
      Alert.alert("Yanlış şifre ya da kullanıcı adı");
    }
  }
  
  render() { 
    return (
      <ImageBackground style = {styles.bground} source = {Background}>
        <View style = {styles.logo}>
          <Image source = {Logo} style = {styles.img}/>
        </View>
        <View style = {{height : 10}}></View>
        <View>
          <TextInput
            placeholder = "Kullanıcı adı"
            placeholderTextColor = "rgba(255, 255, 255, 0.7)"
            underlineColorAndroid = "transparent"
            style = {styles.input}
            onChangeText = {(username) => this.setState({username})}
          />
          <View style = {{height : 5}}></View>
          <TextInput
            placeholder = "Şifre"
            placeholderTextColor = "rgba(255, 255, 255, 0.7)"
            underlineColorAndroid = "transparent"
            style = {styles.input}
            onChangeText = {(password) => this.setState({password})}
          />
          <View style = {{height : 20}}></View>
          <TouchableOpacity style = {styles.button} onPress = {() => this.handleClick()}>
            <Text style =  {styles.text}>Onayla</Text>
          </TouchableOpacity> 
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
    bground: {
      flex: 1,
      justifyContent: 'center',
      alignItems : "center",
      backgroundColor : "#f6f6f6"
    },
    logo : {
      alignItems : "center"
    },
    input : {
      width : width(100)-55,
      height : 35,
      borderRadius : 50,
      fontSize : 13,
      paddingLeft : 45,
      backgroundColor : "rgba(0, 0, 0, 0.1)",
      color : "rgba(255, 255, 255, 0.7)",
      marginHorizontal : 25
    },
    button : {
      width : width(100)-55,
      height : 35,
      borderRadius : 25,
      backgroundColor : "rgba(0, 0, 0, 0.1)",
      color : "rgba(255, 255, 255, 0.7)",
      marginHorizontal : 25,
      
      justifyContent: 'center',
      alignItems : "center",
    },
    text : {
      fontSize : 15,
      textAlignVertical : "center",
      color : "rgba(0, 0, 0, 0.5)",
    },
    img : {
      width : 200,
      height : 200,
    },
  })