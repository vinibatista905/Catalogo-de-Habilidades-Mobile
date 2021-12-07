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
import UsersList from "../../../components/allUsers";


export default function AllUsers() {

  const navigation = useNavigation();

  const [allUsersList, setAllUsersList] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.2.125:5000/user/all_users")
      .then(({ data }) => {
        setAllUsersList(data);

        // eslint-disable-next-line
      });
  }, []);

  const [allProfile, setAllProfile] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.2.125:5000/user/all_profile")
      .then(({ data }) => {
        setAllProfile(data);
       
        // eslint-disable-next-line
      });
  }, []);

 

  // const listOfUsers = allUsersList.map((user, index) => ({
  //   name: user.name,
  //   email: user.email,
  //   id: index
  // }));

  // const listOfProfile = allProfile.map((user) => ({
  //   profile: user.profileImage
    
  // }));

  // const data = listOfUsers.concat(listOfProfile);

  // console.log(data);


  return (
    <>
      <View style={styles.container}>
        <Header />

        <Text style={styles.title}>Esses são todos os usuários</Text>
        <View style={styles.section}>
          <View style={styles.wrap}>
            <FlatList
              data={allUsersList}
              renderItem={({ item }) => <UsersList {...item}  />}
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
    marginBottom: 10,
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
