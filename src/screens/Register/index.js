import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
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
  Alert,
} from "react-native";
import {
  bgAzul,
  bgCinza,
  btnAmarelo,
  btnAzul,
  txBranco,
} from "../../components/UI/variaveis";

const validations = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Por favor insira um e-mail válido")
    .required("E-mail é obrigatório"),
  password: yup
    .string()
    .min(6, ({ min }) => `Senha deve conter ao menos ${min} caracteres`)
    .required("Senha é obrigatório"),
});

function Register() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);

  const register = async (values) => {
    console.log(values);
    await axios
      .post("http://192.168.2.125:5000/user/register", values)
      .then((resp) => {
        const data = resp.data;
        if (data) {
          console.log(data);
          setIsLoading(true);
          Alert.alert(
            "Registrado com sucesso!",
            "Faça login para acessar sua conta",
            [{ text: "OK", onPress: () => navigation.push("Login") }]
          );
        }
      });
  };

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
              Cadastre-se e comece agora a criar o seu catálogo de habilidades.
            </Text>
            <Image
              style={styles.loginImage}
              source={require("../../assets/register-1.png")}
            />
          </View>

          <View style={styles.formSection}>
            <Text style={styles.formTitle}>Registrar-se</Text>

            <Formik
              validationSchema={validations}
              initialValues={{}}
              onSubmit={(values) => register(values)}
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
                    <Text style={styles.formDesc}>Nome*</Text>
                    <TextInput
                      name="name"
                      style={styles.input}
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                      value={values.name}
                      placeholder="Nome"
                      keyboardType="default"
                    />
                    {errors.name && (
                      <Text style={{ fontSize: 15, color: "red" }}>
                        {errors.name}
                      </Text>
                    )}
                  </View>
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
                      value={values.password}
                      secureTextEntry={true}
                      placeholder="Senha"
                      keyboardType="default"
                    />
                    {errors.password && (
                      <Text style={{ fontSize: 15, color: "red" }}>
                        {errors.password}
                      </Text>
                    )}
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.75}
                    style={styles.loginBtn}
                    disabled={!isValid}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.btnText}>Registrar</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>

            <View style={styles.registerWrap}>
              <Text style={styles.register}>
                Já possui uma conta?
                <Text
                  style={styles.registerLink}
                  onPress={() => navigation.push("Login")}
                >
                  Faça login aqui.
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {isLoading === true ? <Loader /> : null}
    </>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
  },

  imageSection: {
    height: 430,
    backgroundColor: bgAzul,
    justifyContent: "center",
    alignItems: "center",
  },

  logoWrap: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
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
    textAlign: "center",
  },

  loginImage: {
    height: 240,
    width: 240,
  },

  formSection: {
    height: 640,
    justifyContent: "center",
    alignItems: "center",
  },

  formTitle: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    fontFamily: "ExtraBold",
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

  loginBtn: {
    justifyContent: "center",
    alignContent: "flex-end",
    flexDirection: "row",
    width: 100,
    height: 45,
    backgroundColor: btnAzul,
    borderRadius: 15,
    padding: 10,
    marginTop: 15,
  },

  btnText: {
    fontSize: 15,
    fontFamily: "BoldFont",
    color: txBranco,
  },

  registerWrap: {
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },

  register: {
    fontSize: 17,
  },

  registerLink: {
    fontFamily: "BoldFont",
    color: btnAmarelo,
  },
});

export default Register;
