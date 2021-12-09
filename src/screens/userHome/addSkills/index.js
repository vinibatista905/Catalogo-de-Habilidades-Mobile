import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../../components/header";
import { useNavigation } from "@react-navigation/core";
import { useAuth } from "../../../contexts/auth";
import { Picker } from "@react-native-picker/picker";
import {
  Image,
  Text,
  View,
  StyleSheet,
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
} from "../../../components/UI/variaveis";

export default function AddSkills() {
  const navigation = useNavigation();
  const { user_id } = useAuth();

  // REQ PARA RECEBER TODAS AS HABILIDADES
  const [allSkills, setAllSkills] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.2.125:5000/user/all_skills").then(({ data }) => {
      setAllSkills(data);

      // eslint-disable-next-line
    });
  }, []);

  // STATE PARA GUARDAR A HABILIDADE SELECIONADA
  const [skillSelected, setSkillSelected] = useState(null);

  // STATE PARA GUARDAR O TIPO DA HABILIDADE
  const [skillType, setSkillType] = useState(null);

  // STATE PARA GUARDAR O NÍVEL DA HABILIDADE
  const [selectedLevel, setSelectedLevel] = useState(null);

  // LÓGICA PARA FILTRAR AS HABILIDADES
  function skillOptions() {
    return allSkills
      .filter((skill) => skill.category === skillType)
      .map((skill) => {
        return (
          <Picker.Item key={skill.id} label={skill.name} value={skill.name} />
        );
      });
  }

  // SUBMIT DA HABILIDADE

  const addSkill = async () => {
    const data = {
      name: skillSelected,
      level: selectedLevel,
      type: skillType,
      idUser: user_id,
    };
    console.log(data);
    await axios
      .post("http://192.168.2.125:5000/user/create_skill", data)
      .then((resp) => {
        const data = resp.data;
        if (data) {
          Alert.alert("Habilidade adicionada!", "", [
            { text: "OK", onPress: () => console.log("OK") },
          ]);
        }
      })
      .catch((err) => {
        console.log(err);
        Alert.alert(
          "Habilidade já cadastrada!",
          "Por favor adicione outra habilidade.",
          [{ text: "OK", onPress: () => console.log("OK") }]
        );
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
              source={require("../../../assets/add-skills.png")}
            />
          </View>

          <View style={styles.formSection}>
            <Text style={styles.formTitle}>
              Adicione uma habilidade no seu catálogo
            </Text>

            <View style={styles.selectorWrap}>
              <Text style={styles.title}>Tipo</Text>
              <Picker
                selectedValue={skillType}
                style={styles.selector}
                onValueChange={(itemValue, itemIndex) =>
                  setSkillType(itemValue)
                }
              >
                <Picker.Item label="" value="" />
                <Picker.Item label="Front-End" value="Front-End" />
                <Picker.Item label="Back-End" value="Back-End" />
                <Picker.Item label="Banco de Dados" value="Database" />
                <Picker.Item label="DevOps" value="DevOps" />
              </Picker>
            </View>

            <View style={styles.selectorWrap}>
              <Text style={styles.title}>Habilidade</Text>
              <Picker
                selectedValue={skillSelected}
                style={styles.selector}
                onValueChange={(itemValue, itemIndex) =>
                  setSkillSelected(itemValue)
                }
              >
                {skillOptions()}
              </Picker>
            </View>

            <View style={styles.selectorWrap}>
              <Text style={styles.title}>Nível</Text>
              <Picker
                selectedValue={selectedLevel}
                style={styles.selector}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLevel(itemValue)
                }
              >
                <Picker.Item label="" value="" />
                <Picker.Item label="Básico" value="Básico" />
                <Picker.Item label="Intermediário" value="Intermediário" />
                <Picker.Item label="Avançado" value="Avançado" />
                <Picker.Item label="Especialista" value="Especialista" />
              </Picker>
            </View>

            <View style={styles.btnWrap}>
              <TouchableOpacity
                activeOpacity={0.75}
                style={styles.addBtn}
                onPress={addSkill}
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
    height: 650,
    justifyContent: "flex-start",
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

  selectorWrap: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  title: {
    fontSize: 20,
    fontFamily: "BoldFont",
    textAlign: "left",
    color: txCinzaEscuro,
  },

  selector: {
    width: 320,
    height: 60,
    fontSize: 30,
    fontFamily: "RegularFont",
    backgroundColor: txBranco,
    padding: 20,
    marginTop: 10,
    marginBottom: 30,
    color: txCinzaEscuro,
  },

  btnWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
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
