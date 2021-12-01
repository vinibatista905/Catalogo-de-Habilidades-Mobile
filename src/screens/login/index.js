import React, { useContext } from "react";
import AuthContext from "../../contexts/auth";
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

function Login() {
  const navigation = useNavigation();

  const { logged } = useContext(AuthContext);

  const login = async (values) => {
    console.log(values);
    await axios
      .post("http://192.168.2.125:5000/user/login", values)
      .then((resp) => {
        const data = resp.data;
        if (data) {
          console.log(data);
          // AsyncStorage.setItem("auth_token", data.auth_token);
          // AsyncStorage.setItem("user_id", data.user_id);
          // navigation.push("Home");
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
              Faça login para acessar o seu catálogo de habilidades.
            </Text>
            <Image
              style={styles.loginImage}
              source={require("../../assets/login-2.png")}
            />
          </View>

          <View style={styles.formSection}>
            <Text style={styles.formTitle}>Login</Text>

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
                  <View style={styles.descWrap}>
                    <Text style={styles.formDesc}>Senha*</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      secureTextEntry={true}
                      value={values.password}
                      placeholder="Senha"
                      keyboardType="default"
                    />
                  </View>
                  <Text style={styles.passwordLink} onPress={() => navigation.push("ForgotPassword")}>Esqueceu a senha?</Text>
                  <TouchableOpacity
                  activeOpacity={0.75}
                    style={styles.loginBtn}
                    onPress={handleSubmit}>
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
    justifyContent: "center",
    alignItems: "center",
    color: txBranco,
  },

  loginImage: {
    height: 240,
    width: 240,
  },

  formSection: {
    height: 470,
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
  },

  btnText: {
    fontSize: 15,
    fontFamily: "BoldFont",
    color: txBranco,
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
