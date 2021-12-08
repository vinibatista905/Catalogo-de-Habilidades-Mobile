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
import UserProjectsCards from "../../../components/userProjectsCards";

export default function UsersProjects({ route }) {
  const navigation = useNavigation();

  const { userProjectId } = route.params;

  const [userProjects, setUserProjects] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://192.168.2.125:5000/user/check_project/${userProjectId}`)
      .then(({ data }) => {
        setUserProjects(data);

        // eslint-disable-next-line
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://192.168.2.125:5000/user/info/${userProjectId}`)
      .then(({ data }) => {
        setUserInfo(data);

        // eslint-disable-next-line
      });
  }, []);

  const projectData = userProjects.Projects;

  return (
    <>
      <View style={styles.container}>
        <Header />
        {userInfo?.map((user) => (
           <View style={styles.titleWrap}>
          <Text key={user.id} style={styles.title}>
            Esses são os projetos do(a) usuário(a)</Text>
          <Text style={styles.span}>{user.name}</Text>
          </View>
        ))}

        <View style={styles.projectsSection}>
          <View style={styles.wrap}>
            <FlatList
              data={projectData}
              renderItem={({ item }) => <UserProjectsCards {...item} />}
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
    height: 530,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: bgCinza,
  },

  titleWrap: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },

  title: {
    fontSize: 25,
    fontFamily: "BoldFont",
    textAlign: "center",
    color: txCinzaEscuro
  },

  span: {
    fontSize: 28,
    fontFamily: "BoldFont",
    textAlign: "center",
    color: btnAzul
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
