import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  btnAmarelo,
  btnAzul,
  txBranco,
  txCinza,
  txCinzaEscuro,
  txPreto,
} from "../../../components/UI/variaveis";
import OrderIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "../../../components/header";
import UserSkills from "../../../components/userSkills";
import { useNavigation } from "@react-navigation/core";

export default function UsersSkills({ route }) {
  const navigation = useNavigation();

  const { userSkillId } = route.params;

  const [userSkills, setUserSkills] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://192.168.2.125:5000/user/check_skill/${userSkillId}`)
      .then(({ data }) => {
        setUserSkills(data);
        // eslint-disable-next-line
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://192.168.2.125:5000/user/info/${userSkillId}`)
      .then(({ data }) => {
        setUserInfo(data);

        // eslint-disable-next-line
      });
  }, []);

  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState(userSkills);

  const handleOrderClick = () => {
    let newList = [...list];

    newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

    setList(newList);
  };

  useEffect(() => {
    if (!searchText && userSkills.length) {
      setList(userSkills);
    } else if (userSkills.length) {
      setList(
        userSkills.filter(
          (item) =>
            item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText, userSkills]);

  return (
    <>
      <View style={styles.container}>
        <Header />
        {userInfo?.map((user) => (
          <View style={styles.titleWrap}>
            <Text key={user.id} style={styles.title}>
              Essas são as habilidades do(a) usuário(a)
            </Text>
            <Text style={styles.span}>{user.name}</Text>
          </View>
        ))}

        <View style={styles.searchWrap}>
          <TextInput
            style={styles.search}
            placeholder="Pesquise uma habilidade"
            value={searchText}
            onChangeText={(t) => setSearchText(t)}
          />
          <TouchableOpacity activeOpacity={0.4} onPress={handleOrderClick}>
            <OrderIcon
              name="order-alphabetical-ascending"
              size={40}
              color={btnAzul}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.skillsSection}>
          <View style={styles.wrap}>
            <FlatList
              data={list}
              renderItem={({ item }) => <UserSkills {...item} />}
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
    backgroundColor: txCinza,
  },

  skillsSection: {
    height: 440,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: txCinza,
  },

  titleWrap: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  title: {
    fontSize: 25,
    fontFamily: "BoldFont",
    textAlign: "center",
    color: txCinzaEscuro,
  },

  span: {
    fontSize: 28,
    fontFamily: "BoldFont",
    textAlign: "center",
    color: btnAzul,
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
    marginBottom: 20,
    marginRight: 10,
  },

  icon: {
    marginBottom: 20,
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
