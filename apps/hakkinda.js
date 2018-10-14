import React from 'react';
import {ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Background from "./login.png";

export default class IlacSorgu extends React.Component{
    render(){
        return (
            <ImageBackground source = {Background} style = {styles.container}>
                <View style = {styles.row1}>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate("home")}>
                        <Text style = {{color : "blue", textDecorationLine : "underline"}}></Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.row2}>
                    <Text>
                        Tasarladığımız uygulama eve ilaç dağıtımı sağlar. Uygulamamızda ilaçları değişik kategorilere göre sınıflandırabilirsiniz.
                        Fiyat aralığı, ilacın reçeteli mi reçetesiz olduğu ve de fiyatı görünebilir. Nöbetçi eczaneler kısmından, yakınınızdaki nöbetçi
                        eczanelere, yakındaki eczaneler kısmından ise diğer eczanelere ulaşılabilir. Aynı zamanda ilaç sorgulama kısmından qr kod sistemi
                        sayesinde size getirilen ilaçların durumunu kontrol edebilirsiniz.
                    </Text>
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 2,
      justifyContent: 'space-evenly',
      alignItems: 'stretch',
      backgroundColor: 'white',
    },
    row1 : {
        flex : 1,
    },
    row2 : {
        flex : 9,
    }
  })