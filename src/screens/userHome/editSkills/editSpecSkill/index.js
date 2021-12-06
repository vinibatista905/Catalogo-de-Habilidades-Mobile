import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/core";
import { useAuth } from "../../../../contexts/auth";

import Header from "../../../../components/header";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  bgAzul,
  bgCinza,
  btnAmarelo,
  btnAzul,
  txBranco,
  txCinza,
  txCinzaEscuro,
  txPreto,
} from "../../../../components/UI/variaveis";

export default function EditSpecSkill({ route }) {
  const navigation = useNavigation();

  const { user_id } = useAuth();

  const { skillId } = route.params;

  const editSkillID = JSON.stringify(skillId);

  const updateSkill = (values) => {
    const updateData = {
      name: values.skill,
      level: values.level,
      type: values.type,
      idUser: user_id,
    };
    updateRequest(updateData);
  };

  const updateRequest = async (updateData) => {
    console.log(updateData);
    await axios
      .put(
        `http://192.168.2.125:5000/user/update_skill/${editSkillID}`,
        updateData
      )
      .then((resp) => {
        const data = resp.data;
        if (data) {
          console.log(data);
          Alert.alert("Habilidade Atualizada!", "Mensagem", [
            { text: "OK", onPress: () => navigation.push("EditSkills") },
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
              source={require("../../../../assets/update-skill.png")}
            />
          </View>

          <View style={styles.formSection}>
            <Text style={styles.formTitle}>Edite Sua Habilidade</Text>

            <Formik
              initialValues={{}}
              onSubmit={(values) => updateSkill(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.form}>
                  <View style={styles.descWrap}>
                    <Text style={styles.formDesc}>Tipo</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("type")}
                      onBlur={handleBlur("type")}
                      value={values.type}
                      placeholder="Ex: Front-End"
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
                      placeholder="Ex: CSS"
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
                      placeholder="Ex: Básico"
                      keyboardType="default"
                    />
                  </View>

                  <View style={styles.btnWrap}>
                    <TouchableOpacity
                      activeOpacity={0.75}
                      style={styles.addBtn}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.btnText1}>Atualizar</Text>
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
    backgroundColor: txCinza,
  },

  formTitle: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    fontFamily: "BoldFont",
    textAlign: "center",
    padding: 20,
    color: txCinzaEscuro,
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
    marginBottom: 10,
    color: txCinzaEscuro,
  },

  input: {
    width: 320,
    height: 60,
    fontSize: 20,
    fontFamily: "RegularFont",
    backgroundColor: txBranco,
    borderRadius: 15,
    padding: 10,
    borderWidth: 2,
    borderColor: btnAmarelo,
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
    textAlign: "center",
  },

  btnText2: {
    fontSize: 15,
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
