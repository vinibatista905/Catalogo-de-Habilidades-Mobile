import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import  EditIcon  from "react-native-vector-icons/FontAwesome5";
import  DeleteIcon  from "react-native-vector-icons/MaterialIcons";
import { btnVerde, txBranco, txCinzaEscuro, txVermelho } from "../UI/variaveis";

export default function UserEditSkills({ type, name, level }) {
  
    
  return (
    <>
      <View style={styles.card}>
        <View style={styles.wrap}>
          <Text style={styles.type}>{type}</Text>
          <Text style={styles.type}>{name}</Text>
          <Text style={styles.type}>{level}</Text>
        </View>
          <View style={styles.iconWrap}> 
          <TouchableOpacity><EditIcon name="edit" size={25} style={styles.edit}></EditIcon></TouchableOpacity>
          <TouchableOpacity><DeleteIcon name="delete" size={30} style={styles.delete}></DeleteIcon></TouchableOpacity>
          </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 160,
    backgroundColor: txBranco,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 12,
    margin: 15,
    
  },

  wrap: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15
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
