import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
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

        <Text style={styles.title}>Esses são os seus projetos</Text>
        <View style={styles.projectsSection}>
          <View style={styles.wrap}>
            <FlatList
              data={projectData}
              renderItem={({ item }) => <UserProjectsCards {...item} />}
              keyExtractor={(item) => item.id}
            />
          </View>
            </View>

          <View style={styles.btnWrap}>
          <TouchableOpacity
              activeOpacity={0.5}
              style={styles.btn1}
              onPress={() => navigation.push("AddProjects")}
            >
              <Text style={styles.btnText1}>Adicionar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.btn2}
              onPress={() => navigation.push("EditProjects")}
            >
              <Text style={styles.btnText2}>Editar</Text>
            </TouchableOpacity>
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
    height: 500,
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
  
    color: txCinzaEscuro,
  },

  wrap: {
    justifyContent: "center",
    alignItems: "center",
  },

  btnWrap: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 260,
    marginTop: 20,
    marginLeft: 80 
  },

  btn1: {
    justifyContent: "center",
    alignContent: "center",
    width: 120,
    height: 50,
    backgroundColor: btnAzul,
    borderRadius: 15,
    marginTop: 15,
    
  },

  btn2: {
    justifyContent: "center",
    alignContent: "center",
    width: 120,
    height: 50,
    backgroundColor: btnAmarelo,
    borderRadius: 15,
    marginTop: 15,
    
  },

  btnText1: {
    fontSize: 18,
    fontFamily: "BoldFont",
    color: txBranco,
    textAlign: "center",
  },

  btnText2: {
    fontSize: 18,
    fontFamily: "BoldFont",
    color: txPreto,
    textAlign: "center",
  },
});
