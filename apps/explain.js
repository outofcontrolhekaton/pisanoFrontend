import React from 'react';
import {ScrollView, ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import axios from 'axios';
import Background from "./login.png";
import Pb from "./PillBasket.png";
import Ham from "./hamburger.png";
import Bground from "./Katman1.png";
import Search from "./search.png";

export default class Explain extends React.Component{
    render(){
        return(
            <ImageBackground source = {Background} style = {{flex : 1}}>
                <ScrollView>    
                    <Text>{this.props.desc}</Text>
                </ScrollView>
            </ImageBackground>
        );
    }
}