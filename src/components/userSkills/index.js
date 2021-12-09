import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { btnAmarelo, btnVerde, txBranco, txCinzaEscuro, txVermelho } from "../UI/variaveis";

export default function UserSkills({ type, name, level, id }) {
  

  return (
    <>
      <View key={id} style={styles.card}>
        <View style={styles.wrap}>
          <Text style={styles.type}>{name}</Text>
          <Text style={styles.type}>{level}</Text>
          <Text style={styles.type}>{type}</Text>
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
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 12,
    margin: 15,
    borderColor: btnAmarelo,
    borderWidth: 1
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

  front: {
    fontFamily: "BoldFont",
    fontSize: 18,
    textAlign: "center",
    color: btnVerde,
  },

  front: {
    fontFamily: "BoldFont",
    fontSize: 18,
    textAlign: "center",
    color: txVermelho,
  },

  icon: {
    color: txCinzaEscuro,
    textAlign: "center",
  },
});
