import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import OrderIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  btnAmarelo,
  btnAzul,
  txBranco,
  txCinza,
  txCinzaEscuro,
  txPreto,
} from "../../../components/UI/variaveis";
import Header from "../../../components/header";
import { useNavigation } from "@react-navigation/core";
import UsersList from "../../../components/allUsers";

export default function AllUsers() {
  const navigation = useNavigation();

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.2.125:5000/user/all_users").then(({ data }) => {
      setAllUsers(data);

      // eslint-disable-next-line
    });
  }, []);

  const [allProfile, setAllProfile] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.2.125:5000/user/all_profile").then(({ data }) => {
      setAllProfile(data);

      // eslint-disable-next-line
    });
  }, []);

  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState([]);

  const handleOrderClick = () => {
    let newList = [...list];

    newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

    setList(newList);
  };

  useEffect(() => {
    if (!searchText && allUsers.length ) {
      setList(allUsers);
    } else if (allUsers.length) {
      setList(
        allUsers.filter(
          (item) =>
            item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText, allUsers]);


  return (
    <>
      <View style={styles.container}>
        <Header />

        <Text style={styles.title}>Esses são todos os usuários</Text>
        <View style={styles.section}>
          <View style={styles.searchWrap}>
            <TextInput
              style={styles.search}
              placeholder="Pesquise um usuário"
              value={searchText}
              onChangeText={(t) => setSearchText(t)}
            />
            <TouchableOpacity activeOpacity={0.4} onPress={handleOrderClick}>
              <OrderIcon
                name="order-alphabetical-ascending"
                size={40}
                color={btnAzul}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.wrap}>
            <FlatList
              data={list}
              renderItem={({ item }) => <UsersList {...item} profile={allProfile.find((p) => p.idUser === item.id)} />}
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
    backgroundColor: txCinza,
    height: 900
  },

  section: {
    height: 500,
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
    marginBottom: 30,
    color: txCinzaEscuro,
  },

  searchWrap: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  search: {
    width: 300,
    height: 60,
    paddingLeft: 10,
    fontSize: 20,
    backgroundColor: txBranco,
    borderRadius: 12,
    borderColor: btnAzul,
    borderWidth: 2,
    marginVertical: 20,
    marginRight: 10,
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
