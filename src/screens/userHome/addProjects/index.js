import React from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/core";
import Navbar from "../../../components/navbar";

import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  bgAzul,
  bgCinza,
  btnAmarelo,
  btnAzul,
  txBranco,
  txPreto,
} from "../../../components/UI/variaveis";

export default function AddSkills() {
  const navigation = useNavigation();

  const login = async (values) => {
    console.log(values);
    await axios
      .post("http://192.168.2.125:5000/user/add_project", values)
      .then((resp) => {
        const data = resp.data;
        if (data) {
          console.log(data);
          // navigation.push("Login");
        }
      });
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Navbar />
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

            <Formik initialValues={{}} onSubmit={(values) => login(values)}>
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.form}>
                  <View style={styles.descWrap}>
                    <Text style={styles.formDesc}>Projeto</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("project")}
                      onBlur={handleBlur("project")}
                      value={values.project}
                      placeholder="Projeto"
                      keyboardType="default"
                    />
                  </View>

                  <View style={styles.btnWrap}>
                    <TouchableOpacity
                      activeOpacity={0.75}
                      style={styles.addBtn}
                      onPress={handleSubmit}
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
              )}
            </Formik>
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
    justifyContent: "center",
    alignItems: "center",
  },

  formTitle: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    fontFamily: "BoldFont",
    textAlign: "center",
    marginBottom: 10,
  },

  form: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 35,
  },

  descWrap: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },

  formDesc: {
    fontSize: 20,
    fontFamily: "BoldFont",
  },

  input: {
    width: 320,
    height: 60,
    fontSize: 20,
    fontFamily: "RegularFont",
    backgroundColor: bgCinza,
    borderRadius: 15,
    padding: 10,
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
