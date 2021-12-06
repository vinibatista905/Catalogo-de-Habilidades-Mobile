import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import HomeItem from "../../../components/homeItem";
import Navbar from "../../../components/navbar";
import { bgCinza, btnAzul, txBranco } from "../../../components/UI/variaveis";
import { HomeData } from "../../../utils/data";
import { useAuth } from "../../../contexts/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Home() {
  const { user_id } = useAuth();

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://192.168.2.125:5000/user/info/${user_id}`)
      .then(({ data }) => {
        setUserInfo(data);

        // eslint-disable-next-line
      });
  }, []);

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
              {userInfo?.map((user) => (
                <Text style={styles.welcomeText}>{user.name}</Text>
              ))}
              <Text style={styles.welcomeInfo}>
                O que você quer fazer hoje?
              </Text>
              <TouchableOpacity onPress={()=>{AsyncStorage.clear()}} style={styles.button}><Text style={styles.btnText} >Sair</Text></TouchableOpacity>
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

  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: btnAzul,
    width: 100,
    height: 50,
    borderRadius: 12,
    marginTop: 30
  },

  btnText: {
   color: txBranco,
   fontSize: 25
  },
});

export default Home;
