import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import {
  bgCinza,
  btnAmarelo,
  btnAzul,
  txBranco,
  txCinzaEscuro,
  txPreto,
} from "../../../components/UI/variaveis";
import Header from "../../../components/header";
import { useNavigation } from "@react-navigation/core";
import UserProjectsCards from "../../../components/userProjectsCards";

export default function AllSkills() {
  const navigation = useNavigation();

  const userId = 1;
  const [userProjects, setUserProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`http://192.168.2.125:5000/user/check_project/${userId}`)
      .then(({ data }) => {
        setUserProjects(data);

        // eslint-disable-next-line
      });
  }, []);

  const projectData = userProjects.Projects;

  return (
    <>
      <View style={styles.container}>
        <Header />

        <Text style={styles.title}>Esses são os seus projetos</Text>
        <View style={styles.projectsSection}>
          <View style={styles.wrap}>
            <FlatList
              data={projectData}
              renderItem={({ item }) => <UserProjectsCards {...item} />}
              keyExtractor={(item) => item.id}
            />
          </View>

          <View style={styles.btnWrap}>
            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.btn1}
              onPress={() => navigation.push("AddProjects")}
            >
              <Text style={styles.btnText1}>Adicionar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.btn2}
              onPress={() => navigation.push("EditProjects")}
            >
              <Text style={styles.btnText2}>Editar</Text>
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
    backgroundColor: bgCinza,
  },

  projectsSection: {
    height: 520,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: bgCinza,

  },

  title: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    fontFamily: "BoldFont",
    textAlign: "center",
    padding: 20,
    marginBottom: 40,
    color: txCinzaEscuro,
  },

  wrap: {
    justifyContent: "center",
    alignItems: "center",
  },

  projectCard: {
    width: 200,
    height: 100,
    backgroundColor: txBranco,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  btnWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: bgCinza,

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
