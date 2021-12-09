import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Navbar from "../../../components/navbar";
import {
  bgCinza,
  btnAzul,
  txBranco,
  txCinzaEscuro,
} from "../../../components/UI/variaveis";
import { HomeData } from "../../../utils/data";
import { useAuth } from "../../../contexts/auth";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Home() {
  const navigation = useNavigation();
  const { user_id, logOut } = useAuth();

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
          <View style={styles.welcomeWrap}>
            <View style={styles.welcomeCard}>
              <Image
                style={styles.welcomeImage}
                source={require("../../../assets/welcome-1.png")}
              />
              <Text style={styles.welcomeText}>Seja Bem Vindo(a)</Text>
              {userInfo?.map((user) => (
                <Text key={user.id} style={styles.welcomeText}>
                  {user.name}
                </Text>
              ))}
              <Text style={styles.welcomeInfo}>
                O que você quer fazer hoje?
              </Text>
            </View>
          </View>

          <View style={styles.optionsWrap}>
            {HomeData.map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={styles.card}
                  activeOpacity={0.75}
                  onPress={() => navigation.push(item.navigate)}
                >
                  <View style={styles.wrap}>
                    <Text style={styles.title}>{item.titulo}</Text>
                    {item.icon1 === "" ? null : (
                      <Icon style={styles.icon} name={item.icon1} size={35} />
                    )}
                    {item.icon2 === "" ? null : (
                      <Icon2 style={styles.icon} name={item.icon2} size={35} />
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}

            <TouchableOpacity
              style={styles.card}
              activeOpacity={0.75}
              onPress={logOut}
            >
              <View style={styles.wrap}>
                <Text style={styles.title}>Encerrar Sessão</Text>
                <Icon2 style={styles.icon} name="logout" size={35} />
              </View>
            </TouchableOpacity>
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

  welcomeWrap: {
    justifyContent: "center",
    alignItems: "center",
  },

  optionsWrap: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  welcomeCard: {
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 460,
    backgroundColor: txBranco,
    borderRadius: 12,
    marginTop: 30,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },

  welcomeImage: {
    width: 280,
    height: 280,
  },

  welcomeText: {
    fontFamily: "BoldFont",
    fontSize: 32,
  },

  welcomeInfo: {
    fontFamily: "RegularFont",
    fontSize: 20,
    marginTop: 35,
    marginBottom: 20
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: btnAzul,
    width: 100,
    height: 50,
    borderRadius: 12,
    marginTop: 30,
  },

  btnText: {
    color: txBranco,
    fontSize: 25,
  },

  card: {
    width: 160,
    height: 140,
    backgroundColor: txBranco,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 12,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },

  wrap: {
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontFamily: "BoldFont",
    fontSize: 18,
    textAlign: "center",
    color: txCinzaEscuro,
  },

  icon: {
    color: txCinzaEscuro,
    textAlign: "center",
  },
});

export default Home;
