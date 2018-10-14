import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Ayarlar extends React.Component{
    render(){
        return(
            <View>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate("home")}>
                    <Text style = {{color : "blue", textDecorationLine : "underline"}}>Go back</Text>
                </TouchableOpacity>
            </View>
        );
    }
} 