import React from "react";
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

function Register() {
  const navigation = useNavigation();

  const login = async (values) => {
    console.log(values);
    await axios
      .post("http://localhost:5000/user/register", values)
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

            <Formik initialValues={{}} onSubmit={(values) => login(values)}>
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.form}>
                  <View style={styles.descWrap}>
                    <Text style={styles.formDesc}>Nome*</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                      value={values.name}
                      placeholder="Nome"
                      keyboardType="email-address"
                    />
                  </View>
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
                  <View style={styles.descWrap}>
                    <Text style={styles.formDesc}>Senha*</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      secureTextEntry={true}
                      placeholder="Senha"
                      keyboardType="default"
                    />
                  </View>
                  <TouchableOpacity
                  activeOpacity={0.75}
                    style={styles.loginBtn}
                    onPress={handleSubmit}>
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
    height: 540,
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
    marginTop: 15
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
