import React, { useState } from "react";
import { useAuth } from "../../contexts/auth";
import Icon from "react-native-vector-icons/Ionicons";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/core";
import Loader from "../../components/loader";
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

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Por favor insira um e-mail válido")
    .required("E-mail é obrigatório"),
  password: yup
    .string()
    .min(6, ({ min }) => `Senha deve conter ao menos ${min} caracteres`)
    .required("Senha é obrigatório"),
});

function Login() {
  const navigation = useNavigation();
  const { login, loading } = useAuth();

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
              Faça login para acessar o seu catálogo de habilidades.
            </Text>
            <Image
              style={styles.loginImage}
              source={require("../../assets/login-2.png")}
            />
          </View>

          <View style={styles.formSection}>
            <Text style={styles.formTitle}>Login</Text>

            <Formik
              validationSchema={validations}
              initialValues={{}}
              onSubmit={(values) => login(values)}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
              }) => (
                <View style={styles.form}>
                  <View style={styles.descWrap}>
                    <Text style={styles.formDesc}>E-mail*</Text>
                    <TextInput
                      name="email"
                      style={styles.input}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      placeholder="E-mail"
                      keyboardType="email-address"
                    />
                    {errors.email && (
                      <Text style={{ fontSize: 15, color: "red" }}>
                        {errors.email}
                      </Text>
                    )}
                  </View>
                  <View style={styles.descWrap}>
                    <Text style={styles.formDesc}>Senha*</Text>
                    <TextInput
                      name="password"
                      style={styles.input}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      secureTextEntry={true}
                      value={values.password}
                      placeholder="Senha"
                      keyboardType="default"
                    />
                    {errors.password && (
                      <Text style={{ fontSize: 15, color: "red" }}>
                        {errors.password}
                      </Text>
                    )}
                  </View>
                  <Text
                    style={styles.passwordLink}
                    onPress={() => navigation.push("ForgotPassword")}
                  >
                    Esqueceu a senha?
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.75}
                    style={styles.loginBtn}
                    disabled={!isValid}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.btnText}>Login</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>

            <View style={styles.registerWrap}>
              <Text style={styles.register}>
                Ainda não possui uma conta?
                <Text
                  style={styles.registerLink}
                  onPress={() => navigation.push("Register")}
                >
                  Registre-se aqui.
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {loading === true ? <Loader /> : null}
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
    marginTop: 15,
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
    justifyContent: "center",
    alignItems: "center",
    color: txBranco,
  },

  loginImage: {
    height: 240,
    width: 240,
  },

  formSection: {
    height: 530,
    justifyContent: "center",
    alignItems: "center",
  },

  formTitle: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    fontFamily: "ExtraBold",
    marginTop: 10,
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

  checkbox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
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
    alignContent: "center",

    width: 100,
    height: 45,
    backgroundColor: btnAzul,
    borderRadius: 15,
  },

  btnText: {
    fontSize: 18,
    fontFamily: "BoldFont",
    color: txBranco,
    textAlign: "center",
  },

  registerWrap: {
    width: 280,
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

export default Login;
