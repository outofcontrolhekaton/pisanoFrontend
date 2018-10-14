import React from 'react';
import {ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Background from "./login.png";
import Pb from "./PillBasket.png";
import Ham from "./hamburger.png";
import Bground from "./Katman1.png";
import Search from "./search.png";

export default class Home extends React.Component {
  render() {
    return (
      <ImageBackground source = {Background} style={styles.container}>
        <View style =  {{height : 10}}></View>
        <ImageBackground source = {Bground} style = {styles.name}>
            <TouchableOpacity><Image style = {styles.up1} source = {Search}/></TouchableOpacity>
            <TouchableOpacity><Image style = {styles.up2} source = {Pb}/></TouchableOpacity>          
            <TouchableOpacity><Image style = {styles.up3} source = {Ham}/></TouchableOpacity>
        </ImageBackground>
        <View style = {styles.row}>
          <TouchableOpacity onPress = {() => {this.props.navigation.navigate("nobetci")}}><Image style = {styles.img} source = {require('./lt.png')} /></TouchableOpacity>
          <View style = {styles.dis} ></View>
          <TouchableOpacity onPress = {() => {this.props.navigation.navigate("yakin")}}><Image style = {styles.img} source = {require('./rt.png')} /></TouchableOpacity>
        </View>
        <View style = {styles.row}>
          <TouchableOpacity onPress = {() => {this.props.navigation.navigate("ilaclar")}}><Image style = {styles.img} source = {require('./lb.png')} /></TouchableOpacity>
          <View style = {styles.dis} ></View>
          <TouchableOpacity onPress = {() => {this.props.navigation.navigate("ilacsorgu")}}><Image style = {styles.img} source = {require('./rb.png')}/></TouchableOpacity>
        </View>
        <View style = {styles.row}>
          <TouchableOpacity onPress = {() => {this.props.navigation.navigate("ayarlar")}}><Image style = {styles.img} source = {require('./s.png')} /></TouchableOpacity>
          <View style = {styles.dis} ></View>
          <TouchableOpacity onPress = {() => {this.props.navigation.navigate("hakkinda")}}><Image style = {styles.img} source = {require('./i.png')}/></TouchableOpacity>
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
    backgroundColor : "#f6f6f6"
  },
  row: {
    flex : 3,
    flexDirection : "row",
    justifyContent : "space-evenly",
    alignItems : "center",
  },
  name: {
    flex : 1,
    width : width(100),
    justifyContent : "space-evenly",
    alignItems : "center",
    flexDirection : "row",
  },
  img : {
    width : 100,
    height : 100,
  },
  dis : {
    width : 20,
    height : 100,
  },
  up1 : {
    width : 17,
    height : 25,
  
  },
  up2 : {
    width : 150,
    height : 25,
  },
  up3 : {
    width : 17,
    height : 25,
  },
})
