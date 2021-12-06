import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Text,
  View,
  StyleSheet,
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
import EditProjectsCards from "../../../components/editProjectCards";
import { useAuth } from "../../../contexts/auth";


export default function AllSkills() {
  const navigation = useNavigation();

  const { user_id } = useAuth();
  const [userProjects, setUserProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`http://192.168.2.125:5000/user/check_project/${user_id}`)
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

        <Text style={styles.title}>Clique em um projeto para removê-lo</Text>
        <View style={styles.projectsSection}>
          <View style={styles.wrap}>
            <FlatList
              data={projectData}
              renderItem={({ item }) => <EditProjectsCards {...item} />}
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
    backgroundColor: bgCinza,
  },

  projectsSection: {
    height: 540,
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
    marginBottom: 10,
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
