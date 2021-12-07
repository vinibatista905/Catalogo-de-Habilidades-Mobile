import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/core";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert
} from "react-native";
import {
  bgAzul,
  bgCinza,
  btnAzul,
  txBranco,
} from "../../components/UI/variaveis";

const validations = yup.object().shape({
  email: yup
  .string()
  .email("Por favor insira um e-mail válido")
  .required("E-mail é obrigatório"),
  token: yup.string().required("Token é obrigatório"),
  password: yup
    .string()
    .min(6, ({ min }) => `Senha deve conter ao menos ${min} caracteres`)
    .required("Senha é obrigatório"),
});


function ResetPassword() {
  const navigation = useNavigation();

  const resetPasswordSubmit = async (values) => {
    console.log(values);
    await axios
      .post("http://192.168.2.125:5000/user/reset_password", values)
      .then((resp) => {
        const data = resp.data;
        if (data) {
          console.log(data);
          Alert.alert(
            "Senha alterada sucesso!",
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
            <Text style={styles.desc}>Insira a sua nova senha.</Text>
            <Image
              style={styles.loginImage}
              source={require("../../assets/password-3.png")}
            />
          </View>

          <View style={styles.formSection}>
            <Text style={styles.formTitle}>Nova Senha</Text>

            <Formik
              validationSchema={validations}
              initialValues={{}}
              onSubmit={(values) => resetPasswordSubmit(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, }) => (
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
                    <Text style={styles.formDesc}>Token*</Text>
                    <TextInput
                      name="token"
                      style={styles.input}
                      onChangeText={handleChange("token")}
                      onBlur={handleBlur("token")}
                      value={values.token}
                      placeholder="Token"
                      keyboardType="default"
                    />
                    {errors.token && (
                      <Text style={{ fontSize: 15, color: "red" }}>
                        {errors.token}
                      </Text>
                    )}
                  </View>
                  <View style={styles.descWrap}>
                    <Text style={styles.formDesc}>Nova Senha*</Text>
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
                  <TouchableOpacity
                  activeOpacity={0.75}
                    style={styles.loginBtn}
                    disabled={!isValid}
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
