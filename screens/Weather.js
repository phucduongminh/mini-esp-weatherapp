import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import {useEffect, useState} from 'react'
import { useFonts, Montserrat_300Light } from '@expo-google-fonts/montserrat';

import { db, ref, onValue } from '../firebase';

import background from "../assets/background.png"

const Weather = () => {
  const [temp,setTemp] = useState(0)
  const [humidity,setHumidity] = useState(0)
  const [pressure,setPressure] = useState(0)

  useEffect( () => {
    const data = ref(db)
    onValue(data, (snapshot) => {
      setTemp(snapshot.val().temp);
      setHumidity(snapshot.val().humidity)
      setPressure(snapshot.val().pressure)
    });
  }, [db]);
  
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
        <Text style={styles.text}>{temp}°</Text>
      </View>
    <View style={styles.data}>
      <View style={styles.spacer}></View>
        <View style={styles.dataWrapper}>
          <View style={styles.humid}>
            <Text style={styles.dataText}>{humidity}%</Text>
            <Text style={styles.title}>Humidity</Text>
          </View>
          <View style={styles.pressure}>
            <Text style={styles.dataText}>{pressure}</Text>
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
        resizeMode: 'cover',
        backgroundColor: 'black',
        opacity: 0.7,
    },
    tempWrapper : {
      flex : 1,
      justifyContent: 'center',
    },
    text: {
      fontSize: 150,
      fontWeight: '100',
      textAlign: 'left',
      color: 'white',
      //paddingRight: 20,
      paddingLeft:35,
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