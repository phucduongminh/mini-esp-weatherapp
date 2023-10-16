import { StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

import background from "../assets/background.jpg"

const Weather = () => {
  return (
    <ImageBackground 
    source={background}
    style={styles.container}
    ></ImageBackground>
  )
}

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        resizeMode : "cover",
        justifyContent: "center",
    },
});

export default Weather