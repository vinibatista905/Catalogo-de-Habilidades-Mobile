import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { txBranco, txCinzaEscuro } from "../UI/variaveis";

export default function UserSkills({ type, name, level }) {
  

  return (
    <>
      <View style={styles.card}>
        <View style={styles.wrap}>
          <Text style={styles.type}>{type}</Text>
          <Text style={styles.type}>{name}</Text>
          <Text style={styles.type}>{level}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 140,
    backgroundColor: txBranco,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 12,
    margin: 15,
  },

  wrap: {
    justifyContent: "center",
    alignItems: "center",
  },

  type: {
    fontFamily: "BoldFont",
    fontSize: 18,
    textAlign: "center",
    color: txCinzaEscuro,
  },

  icon: {
    color: txCinzaEscuro,
    textAlign: "center",
  },
});
