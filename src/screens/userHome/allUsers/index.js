import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import { btnAmarelo, btnAzul, txBranco, txCinzaEscuro, txPreto } from "../../../components/UI/variaveis";
import Header from "../../../components/header";
import { useNavigation } from "@react-navigation/core";
import AllUsers from "../../../components/allUsers";


export default function AllSkills() {

  const navigation = useNavigation();

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.2.125:5000/user/all_users")
      .then(({ data }) => {
        setAllUsers(data);
        console.log(data);

        // eslint-disable-next-line
      });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Header />

        <Text style={styles.title}>Esses são todos os usuários</Text>
        <View style={styles.section}>
          <View style={styles.wrap}>
            <FlatList
              numColumns={2}
              data={allUsers}
              renderItem={({ item }) => <AllUsers {...item} />}
              keyExtractor={(item) => item.id}
            />
          </View>

        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  section: {
    height: 550,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    fontFamily: "BoldFont",
    textAlign: "center",
    padding: 20,
    marginBottom: 20,
    color: txCinzaEscuro
  },

  wrap: {
    justifyContent: "center",
    alignItems: "center",
  },

  btnWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },

  btn1: {
    justifyContent: "center",
    alignContent: "flex-end",
    flexDirection: "row",
    width: 100,
    height: 45,
    backgroundColor: btnAzul,
    borderRadius: 15,
    padding: 10,
    marginTop: 15,
    marginRight: 20,
  },

  btn2: {
    justifyContent: "center",
    alignContent: "flex-end",
    flexDirection: "row",
    width: 100,
    height: 45,
    backgroundColor: btnAmarelo,
    borderRadius: 15,
    padding: 10,
    marginTop: 15,
    marginRight: 20,
  },

  btnText1: {
    fontSize: 15,
    fontFamily: "BoldFont",
    color: txBranco,
    textAlign: "center",
  },

  btnText2: {
    fontSize: 15,
    fontFamily: "BoldFont",
    color: txPreto,
    textAlign: "center",
  },
});
