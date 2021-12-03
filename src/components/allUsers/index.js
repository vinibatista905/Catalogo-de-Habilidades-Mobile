import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { btnAmarelo, txBranco, txCinzaEscuro } from "../UI/variaveis";

export default function AllUsers({ name }) {
  return (
    <>
      <TouchableOpacity activeOpacity={0.5} style={styles.card}>
        <View style={styles.wrap}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </TouchableOpacity>
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
    borderColor: btnAmarelo,
    borderWidth: 1
  },

  wrap: {
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    fontFamily: "BoldFont",
    fontSize: 18,
    textAlign: "center",
    color: txCinzaEscuro,
  },

});
