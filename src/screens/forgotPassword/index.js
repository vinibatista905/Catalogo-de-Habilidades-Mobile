import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/core";
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
} from "../../components/UI/variaveis";

export default function ForgotPassword() {
    const navigation = useNavigation();

    return (
        <>
      <ScrollView>
        <View style={styles.loginContainer}>
          <View style={styles.imageSection}>
            <View style={styles.logoWrap}>
              <Text style={styles.title}>Skills Cat</Text>
              <Icon name="logo-octocat" size={40} color="#ffffff" />
            </View>
            <Text style={styles.desc}>
              Verifique o seu e-mail para utilizar o token de alteração de senha.
            </Text>
            <Image
              style={styles.loginImage}
              source={require("../../assets/password.png")}
            />
          </View>

          <View style={styles.formSection}>
            <Text style={styles.formTitle}>Alterar Senha</Text>
            <Text style={styles.formMessage}>Insira seu e-mail e enviaremos um token para alterar a senha.</Text>

            <Formik initialValues={{}} onSubmit={(values) => login(values)}>
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.form}>
                  <View style={styles.descWrap}>
                    <Text style={styles.formDesc}>E-mail*</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      placeholder="E-mail"
                      keyboardType="email-address"
                    />
                  </View>
                  <TouchableOpacity
                  activeOpacity={0.75}
                    style={styles.loginBtn}
                    onPress={handleSubmit}>
                      <Text style={styles.btnText}>Enviar</Text>
                      </TouchableOpacity>
                </View>
              )}
            </Formik>

            <View style={styles.registerWrap}>
              <Text style={styles.register}>
                Lembrou a sua senha?
                <Text
                  style={styles.registerLink}
                  onPress={() => navigation.push("Login")}
                >
                  Voltar para o login.
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
  },

  imageSection: {
    height: 420,
    backgroundColor: bgAzul,
    justifyContent: "center",
    alignItems: "center",
  },

  logoWrap: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  title: {
    justifyContent: "center",
    alignItems: "center",
    color: txBranco,
    fontSize: 40,
    fontFamily: "ExtraBold",
    paddingRight: 10,
  },

  desc: {
      width: 350,
    justifyContent: "center",
    alignItems: "center",
    color: txBranco,
  },

  loginImage: {
    height: 240,
    width: 240,
  },

  formSection: {
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },

  formTitle: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    fontFamily: "ExtraBold",
  },

  formMessage: {
      width: 320,
    fontSize: 17,
    padding: 10
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

  passwordLink: {
    fontSize: 18,
    fontFamily: "RegularFont",
    color: btnAzul,
    paddingTop: 5,
    paddingBottom: 20,
  },

  loginBtn: {
    justifyContent: "center",
    alignContent: "flex-end",
    flexDirection: "row",
    width: 100,
    height: 45,
    backgroundColor: btnAzul,
    borderRadius: 15,
    padding: 10,
    marginTop: 15
  },

  btnText: {
    fontSize: 15,
    fontFamily: "BoldFont",
    color: txBranco,
  },

  registerWrap: {
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  register: {
    fontSize: 17,
  },

  registerLink: {
    fontFamily: "BoldFont",
    color: btnAmarelo,
  },
});