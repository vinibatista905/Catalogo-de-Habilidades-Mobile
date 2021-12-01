import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
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
      .post("http://192.168.2.125:5000/user/create_skill", values)
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
              source={require("../../../assets/add-skills.png")}
            />
          </View>

          <View style={styles.formSection}>
            <Text style={styles.formTitle}>
              Adicione uma habilidade no seu catálogo
            </Text>

            <Formik initialValues={{}} onSubmit={(values) => login(values)}>
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.form}>
                  <View style={styles.descWrap}>
                    <Text style={styles.formDesc}>Tipo</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("type")}
                      onBlur={handleBlur("type")}
                      value={values.type}
                      placeholder="Tipo"
                      keyboardType="default"
                    />
                  </View>
                  <View style={styles.descWrap}>
                    <Text style={styles.formDesc}>Habilidade</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("skill")}
                      onBlur={handleBlur("skill")}
                      value={values.skill}
                      placeholder="Habilidade"
                      keyboardType="default"
                    />
                  </View>
                  <View style={styles.descWrap}>
                    <Text style={styles.formDesc}>Nível</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("level")}
                      onBlur={handleBlur("level")}
                      value={values.level}
                      secureTextEntry={true}
                      placeholder="Nível"
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
                      onPress={() => navigation.push("AllSkills")}
                    >
                      <Text style={styles.btnText2}>Ver Habilidades</Text>
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
    height: 300,
    width: 300,
  },

  formSection: {
    height: 600,
    justifyContent: "center",
    alignItems: "center",
  },

  formTitle: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    fontFamily: "BoldFont",
    textAlign: "center",
    padding: 20,
  },

  form: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 5,
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
    marginRight: 20
  },

  checkBtn: {
    justifyContent: "center",
    alignContent: "flex-end",
    flexDirection: "row",
    width: 120,
    height: 55,
    backgroundColor: btnAmarelo,
    borderRadius: 15,
    padding: 6,
    marginTop: 15,
  },

  btnText1: {
    fontSize: 15,
    fontFamily: "BoldFont",
    color: txBranco,
    textAlign: "center"
  },

  btnText2: {
    fontSize: 15,
    fontFamily: "BoldFont",
    color: txPreto,
    textAlign: "center"
  },

  register: {
    fontSize: 17,
  },

  registerLink: {
    fontFamily: "BoldFont",
    color: btnAmarelo,
  },
});
