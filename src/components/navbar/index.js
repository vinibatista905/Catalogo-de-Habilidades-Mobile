import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { bgAzul, txBranco } from "../UI/variaveis";

export default function Navbar() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.logoWrap}>
          <Text style={styles.logo}>Skills Cat</Text>
          <Icon name="logo-octocat" size={30} color="#ffffff" />
        </View>
        <View style={styles.imageWrap}>
          <Image
            style={styles.image}
            source={require("../../assets/teste.jpg")}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 130,
    backgroundColor: bgAzul,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },

  logoWrap: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    marginTop: 30,
  },

  logo: {
    justifyContent: "center",
    alignItems: "center",
    color: txBranco,
    fontSize: 30,
    fontFamily: "ExtraBold",
    paddingRight: 10,
  },

  imageWrap: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 30,
  },

  image: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
});
