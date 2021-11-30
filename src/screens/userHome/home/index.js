import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Navbar from '../../../components/navbar';

function Home(params) {
    return(
        <>
        <View style={styles.container}>
        <Navbar />
        <Text>Tela de Home!</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
      },
})

export default Home;