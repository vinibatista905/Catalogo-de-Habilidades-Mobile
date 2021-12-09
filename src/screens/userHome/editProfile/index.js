import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/core";
import { useAuth } from "../../../contexts/auth";
import Header from "../../../components/header";
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
  btnAmarelo,
  btnAzul,
  txBranco,
  txCinza,
  txCinzaEscuro,
} from "../../../components/UI/variaveis";

function EditProfile() {
  const navigation = useNavigation();
  const { user_id } = useAuth();

  const [userProfile, setUserProfile] = useState([]);

  //PEGAR OS DADOS DO PERFIL PARA MOSTRAR NOS CAMPOS DO FORMULÁRIO INICIALMENTE
  useEffect(() => {
    axios
      .get(`http://192.168.2.125:5000/user/check_profile/${user_id}`)
      .then(({ data }) => {
        setUserProfile(data);
        console.log(data);

        // eslint-disable-next-line
      });
  }, []);

  //ATUALIZAÇÃO DO PERFIL
  const updateProfile = async (values) => {
    console.log(values);
    await axios
      .put(`http://192.168.2.125:5000/user/update_profile/${user_id}`, values)
      .then((resp) => {
        const data = resp.data;
        if (data) {
          Alert.alert("Perfil atualizado!", "", [
            { text: "OK", onPress: () => navigation.navigate("Profile") },
          ]);
          
        }
      });
  };

  return (
    <>
      <ScrollView>
        <View style={styles.loginContainer}>
          <Header />
          <View style={styles.imageSection}>
            <Image
              style={styles.loginImage}
              source={require("../../../assets/profile-1.png")}
            />
          </View>

          <View style={styles.formSection}>
            <Text style={styles.formTitle}>Edite o seu perfil</Text>

            {userProfile?.map((profile) => (
              <Formik
                key={profile.id}
                initialValues={{
                  role: profile.role,
                  team: profile.team,
                  startDate: profile.startDate,
                  phone: profile.phone,
                  linkedin: profile.linkedin,
                  github: profile.github,
                }}
                onSubmit={(values) => updateProfile(values)}
              >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                  <View style={styles.form}>
                    <View style={styles.descWrap}>
                      <Text style={styles.formDesc}>Cargo*</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={handleChange("role")}
                        onBlur={handleBlur("role")}
                        value={values.role}
                        placeholder="Cargo"
                        keyboardType="default"
                      />
                    </View>
                    <View style={styles.descWrap}>
                      <Text style={styles.formDesc}>Time*</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={handleChange("team")}
                        onBlur={handleBlur("team")}
                        value={values.team}
                        placeholder="Time"
                        keyboardType="default"
                      />
                    </View>
                    <View style={styles.descWrap}>
                      <Text style={styles.formDesc}>Data de Início*</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={handleChange("startDate")}
                        onBlur={handleBlur("startDate")}
                        value={values.startDate}
                        placeholder="Data"
                        keyboardType="default"
                      />
                    </View>
                    <View style={styles.descWrap}>
                      <Text style={styles.formDesc}>Celular</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={handleChange("phone")}
                        onBlur={handleBlur("phone")}
                        value={values.phone}
                        placeholder="Celular"
                        keyboardType="default"
                      />
                    </View>
                    <View style={styles.descWrap}>
                      <Text style={styles.formDesc}>LinkedIn</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={handleChange("linkedin")}
                        onBlur={handleBlur("linkedin")}
                        value={values.linkedin}
                        placeholder="Linkedin"
                        keyboardType="default"
                      />
                    </View>
                    <View style={styles.descWrap}>
                      <Text style={styles.formDesc}>Github</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={handleChange("github")}
                        onBlur={handleBlur("github")}
                        value={values.github}
                        placeholder="Github"
                        keyboardType="default"
                      />
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.75}
                      style={styles.loginBtn}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.btnText}>Atualizar</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </Formik>
            ))}
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
    height: 350,
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
    fontSize: 30,
    fontFamily: "ExtraBold",
    paddingRight: 10,
  },

  desc: {
    justifyContent: "center",
    alignItems: "center",
    color: txBranco,
  },

  loginImage: {
    height: 300,
    width: 300,
  },

  formSection: {
    height: 950,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: txCinza
  },

  formTitle: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    fontFamily: "ExtraBold",
    color: txCinzaEscuro,
    marginBottom: 20,
  },

  form: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 5,
  },

  descWrap: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 12,
  },

  formDesc: {
    fontSize: 20,
    fontFamily: "BoldFont",
    color: txCinzaEscuro,
    paddingVertical: 6,
  },

  input: {
    width: 320,
    height: 60,
    fontSize: 20,
    fontFamily: "RegularFont",
    backgroundColor: bgCinza,
    borderRadius: 15,
    borderColor: btnAmarelo,
    borderWidth: 2,
    padding: 10,
    backgroundColor: txBranco
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

export default EditProfile;
