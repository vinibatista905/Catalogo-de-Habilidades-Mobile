import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { btnAzul, txBranco, txCinzaEscuro } from "../../../components/UI/variaveis";
import Header from "../../../components/header";
import UserEditSkills from "../../../components/userEditSkills";
import { useNavigation } from "@react-navigation/core";
import { useAuth } from "../../../contexts/auth";



export default function EditSkills() {

  const navigation = useNavigation();

  const { user_id } = useAuth();
  const [userSkills, setUserSkills] = useState([]);

  useEffect(() => {
    axios
      .get(`http://192.168.2.125:5000/user/check_skill/${user_id}`)
      .then(({ data }) => {
        setUserSkills(data);
        // eslint-disable-next-line
      });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Header />

        <Text style={styles.title}>Edite suas habilidades</Text>
        <View style={styles.skillsSection}>
          <View style={styles.wrap}>
            <FlatList
              data={userSkills}
              renderItem={({ item }) => <UserEditSkills {...item} />}
              keyExtractor={(item) => item.id}
            />
          </View>

          <View style={styles.btnWrap}>
            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.addBtn}
              onPress={() => navigation.push("AddSkills")}
            >
              <Text style={styles.btnText1}>Adicionar</Text>
            </TouchableOpacity>
            
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

  skillsSection: {
    height: 520,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 28,
    fontFamily: "BoldFont",
    textAlign: "center",
    padding: 20,
    marginBottom: 40,
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

  addBtn: {
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

  btnText1: {
    fontSize: 15,
    fontFamily: "BoldFont",
    color: txBranco,
    textAlign: "center",
  },
});
