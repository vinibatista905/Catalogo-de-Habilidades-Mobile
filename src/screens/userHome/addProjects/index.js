import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";
import Header from "../../../components/header";
import { useAuth } from "../../../contexts/auth";
import { Picker } from "@react-native-picker/picker";

import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  bgAzul,
  btnAmarelo,
  btnAzul,
  txBranco,
  txCinza,
  txCinzaEscuro,
  txPreto,
} from "../../../components/UI/variaveis";

export default function AddProjects() {
  const navigation = useNavigation();
  const { user_id } = useAuth();

  // REQ PARA RECEBER TODOS OS PROJETOS
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.2.125:5000/user/all_projects")
      .then(({ data }) => {
        setAllProjects(data);

        // eslint-disable-next-line
      });
  }, []);

  // STATE PARA GUARDAR O PROJETO SELECIONADO
  const [projectSelected, setProjectSelected] = useState(null);

  // SUBMIT DO PROJETO
  const addNewProject = async () => {
    const data = {
      name: projectSelected,
      id: user_id,
    };
    console.log(data);
    await axios
      .post("http://192.168.2.125:5000/user/add_project", data)
      .then((resp) => {
        const data = resp.data;
        if (data) {
          Alert.alert("Projeto adicionado!", "", [
            { text: "OK", onPress: () => console.log("OK") },
          ]);
        }
      });
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <View style={styles.imageSection}>
            <Image
              style={styles.image}
              source={require("../../../assets/project-1.png")}
            />
          </View>

          <View style={styles.formSection}>
            <Text style={styles.formTitle}>
              Adicione projetos que você já participou
            </Text>

            <Picker
              selectedValue={projectSelected}
              style={styles.selector}
              onValueChange={(itemValue, itemIndex) =>
                setProjectSelected(itemValue)
              }
            >
              {allProjects.map((project) => {
                return (
                  <Picker.Item
                    key={project.id}
                    label={project.name}
                    value={project.name}
                  />
                );
              })}
            </Picker>

            <View style={styles.btnWrap}>
              <TouchableOpacity
                activeOpacity={0.75}
                style={styles.addBtn}
                onPress={addNewProject}
              >
                <Text style={styles.btnText1}>Adicionar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.75}
                style={styles.checkBtn}
                onPress={() => navigation.push("AllProjects")}
              >
                <Text style={styles.btnText2}>Ver Projetos</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageSection: {
    height: 350,
    backgroundColor: bgAzul,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    height: 400,
    width: 400,
  },

  formSection: {
    height: 400,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: txCinza,
  },

  formTitle: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    fontFamily: "BoldFont",
    textAlign: "center",
    marginVertical: 20,
    color: txCinzaEscuro,
  },

  selector: {
    width: 320,
    height: 60,
    fontSize: 30,
    fontFamily: "RegularFont",
    backgroundColor: txBranco,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    color: txCinzaEscuro
  },

  btnWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },

  addBtn: {
    justifyContent: "center",
    alignContent: "flex-end",
    flexDirection: "row",
    width: 120,
    height: 55,
    backgroundColor: btnAzul,
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
    marginRight: 20,
  },

  checkBtn: {
    justifyContent: "center",
    alignContent: "flex-end",
    flexDirection: "row",
    width: 120,
    height: 55,
    backgroundColor: btnAmarelo,
    borderRadius: 15,
    padding: 4.2,
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

  register: {
    fontSize: 17,
  },

  registerLink: {
    fontFamily: "BoldFont",
    color: btnAmarelo,
  },
});
