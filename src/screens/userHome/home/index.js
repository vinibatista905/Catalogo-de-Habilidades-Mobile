import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, SafeAreaView, FlatList } from "react-native";
import HomeItem from "../../../components/homeItem";
import Navbar from "../../../components/navbar";
import { bgCinza, txBranco } from "../../../components/UI/variaveis";
import { HomeData } from "../../../utils/data";

function Home(params) {
  return (
    <>
      <ScrollView>
        <Navbar />
        <SafeAreaView style={styles.container}>
          <View style={styles.welcomeCard}>
            <Image
              style={styles.welcomeImage}
              source={require("../../../assets/welcome-1.png")}
            />
            <Text style={styles.welcomeText}>Seja Bem Vindo(a)</Text>
            <Text style={styles.welcomeText}>Nome</Text>
            <Text style={styles.welcomeInfo}>O que você quer fazer hoje?</Text>
          </View>

          <FlatList
          numColumns={2}
          data={HomeData}
          renderItem={({item}) => <HomeItem {...item} />}
          keyExtractor={item => item.id}
          />

        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      height: 1300,
      justifyContent: "center",
      alignContent: "center",
      backgroundColor: bgCinza,
  },

  welcomeCard: {
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 500,
    backgroundColor: txBranco,
    borderRadius: 12,
  },

  welcomeImage: {
    width: 250,
    height: 250,
  },

  welcomeText: {
    fontFamily: "BoldFont",
    fontSize: 30,
  },

  welcomeInfo: {
    fontFamily: "RegularFont",
    fontSize: 20,
  },
});

export default Home;
