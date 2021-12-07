import React from 'react'
import { View, StyleSheet } from 'react-native'

import LottieView from 'lottie-react-native';

export default function Loader() {
    return (
        <View style={[ StyleSheet.absoluteFillObject, styles.container]}>
            <LottieView source={require('../../assets/loading.json')} autoPlay loop></LottieView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignContent: "center",
      backgroundColor: "rgba(0,0,0,0.3)",
      zIndex: 1
    },
})