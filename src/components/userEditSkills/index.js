import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import EditIcon from "react-native-vector-icons/FontAwesome5";
import DeleteIcon from "react-native-vector-icons/MaterialIcons";
import {
  btnAmarelo,
  btnVerde,
  txBranco,
  txCinzaEscuro,
  txVermelho,
} from "../UI/variaveis";
import { useNavigation } from "@react-navigation/core";
import axios from "axios";

export default function UserEditSkills({ type, name, level, id }) {
  const navigation = useNavigation();

  const removeSkill = (skillID) => {
    Alert.alert("Remover Habilidade", "Deseja remover essa habilidade?", [
      {
        text: "OK",
        onPress: () => {
          axios.delete(
            `http://192.168.2.125:5000/user/delete_skill/${skillID}`
          );
          Alert.alert("Habilidade removida!", "", [
            {
              text: "OK",
              onPress: () => {
                navigation.push("AllSkills");
              },
            },
          ]);
        },
      },
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);
  };


  return (
    <>
      <View style={styles.card}>
        <View style={styles.wrap}>
          <Text style={styles.type}>{name}</Text>
          <Text style={styles.type}>{level}</Text>
          <Text style={styles.type}>{type}</Text>
        </View>

        <View style={styles.iconWrap}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("EditSpecSkill", {
                skillId: id,
              });
            }}
          >
            <EditIcon name="edit" size={25} style={styles.edit}></EditIcon>
          </TouchableOpacity>
          </View>

          <View style={styles.iconWrap}>
          <TouchableOpacity>
            <DeleteIcon
              name="delete"
              size={30}
              style={styles.delete}
              onPress={()=>{
                const skillID = id;
                removeSkill(skillID);
              }}
            ></DeleteIcon>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 360,
    height: 100,
    backgroundColor: txBranco,
    justifyContent: "space-evenly",
    alignContent: "center",
    flexDirection: "row",
    borderRadius: 12,
    margin: 15,
    borderColor: btnAmarelo,
    borderWidth: 1
  },

  wrap: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },

  type: {
    fontFamily: "BoldFont",
    fontSize: 18,
    textAlign: "center",
    color: txCinzaEscuro,
  },

  iconWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  edit: {
    color: btnVerde,
    textAlign: "center",
    paddingHorizontal: 20,
  },

  delete: {
    color: txVermelho,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
