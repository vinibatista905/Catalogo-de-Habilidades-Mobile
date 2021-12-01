import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import HomeItem from "../../../components/homeItem";
import Navbar from "../../../components/navbar";
import { bgCinza, txBranco } from "../../../components/UI/variaveis";
import { HomeData } from "../../../utils/data";

function Home(params) {

  console.log(HomeData);
  
  return (
    <>
      <ScrollView>
        <Navbar />
        <SafeAreaView style={styles.container}>
          <View style={styles.wrap}>
            <View style={styles.welcomeCard}>
              <Image
                style={styles.welcomeImage}
                source={require("../../../assets/welcome-1.png")}
              />
              <Text style={styles.welcomeText}>Seja Bem Vindo(a)</Text>
              <Text style={styles.welcomeText}>Nome</Text>
              <Text style={styles.welcomeInfo}>
                O que você quer fazer hoje?
              </Text>
            </View>
          </View>

          <View style={styles.wrap}>
            <FlatList
              numColumns={2}
              data={HomeData}
              renderItem={({ item }) => <HomeItem {...item} />}
              keyExtractor={(item) => item.id}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: bgCinza,
  },

  wrap: {
    justifyContent: "center",
    alignItems: "center",
  },

  welcomeCard: {
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 500,
    backgroundColor: txBranco,
    borderRadius: 12,
    marginTop: 30,
    marginBottom: 20,
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
    marginTop: 40,
  },
});

export default Home;
