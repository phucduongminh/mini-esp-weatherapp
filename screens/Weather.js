import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { useFonts, Montserrat_300Light } from '@expo-google-fonts/montserrat';

import background from "../assets/background.png"

const Weather = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
  });

  if (!fontsLoaded) {
    return null; // Or display a loading screen
  }
  return (
    <ImageBackground 
    source={background}
    style={styles.container}
    >
      <View style={styles.tempWrapper}>
        <Text style={styles.text}>75°</Text>
      </View>
    <View style={styles.data}>
      <View style={styles.spacer}></View>
        <View style={styles.dataWrapper}>
          <View style={styles.humid}>
            <Text style={styles.dataText}>23%</Text>
            <Text style={styles.title}>Humidity</Text>
          </View>
          <View style={styles.pressure}>
            <Text style={styles.dataText}>22</Text>
            <Text style={styles.title}>Pressure</Text>
          </View>
        </View>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        resizeMode: 'cover'
    },
    tempWrapper : {
      flex : 1,
      justifyContent: 'center',
    },
    text: {
      fontSize: 150,
      fontWeight: '100',
      textAlign: 'center',
      color: 'white'
    },
    data: {
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
      width: '100%',
      //backgroundColor:'white'
    },
    spacer:{
      height:'30%',
    },
    dataWrapper: {
      backgroundColor:'rgba(255,255,255,0.3)',
      flexDirection:'row',
      height:'20%',
      justifyContent:'center',
      alignItems:'center',
      width:'80%',
      borderRadius:20,
      borderColor:'white',
      borderWidth:1,
    },
    humid: {
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
    },
    pressure: {
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
    },
    dataText: {
      fontSize:20,
      fontWeight:'200',
      color:'white',
      textAlign:'center',
      fontFamily:'Montserrat_300Light',
    },
    title: {
      fontSize:20,
      fontWeight:'200',
      color:'white',
      textAlign:'center',
      fontFamily:'Montserrat_300Light',
    }
});

export default Weather