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
  Button,
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

function ResetPassword() {
  const navigation = useNavigation();

  const resetPasswordSubmit = async (values) => {
    console.log(values);
    await axios
      .post("http://localhost:5000/user/reset_password", values)
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
            <Text style={styles.desc}>Insira a sua nova senha.</Text>
            <Image
              style={styles.loginImage}
              source={require("../../assets/password-3.png")}
            />
          </View>

          <View style={styles.formSection}>
            <Text style={styles.formTitle}>Nova Senha</Text>

            <Formik
              initialValues={{}}
              onSubmit={(values) => resetPasswordSubmit(values)}
            >
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
                    <Text style={styles.formDesc}>Token*</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("token")}
                      onBlur={handleBlur("token")}
                      value={values.token}
                      placeholder="Token"
                      keyboardType="default"
                    />
                  </View>
                  <View style={styles.descWrap}>
                    <Text style={styles.formDesc}>Nova Senha*</Text>
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
                  <TouchableOpacity
                  activeOpacity={0.75}
                    style={styles.loginBtn}
                    onPress={handleSubmit}>
                      <Text style={styles.btnText}>Enviar</Text>
                      </TouchableOpacity>
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
    marginBottom: 10

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
});

export default ResetPassword;
