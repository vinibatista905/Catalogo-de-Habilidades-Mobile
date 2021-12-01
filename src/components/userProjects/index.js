import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { txBranco, txCinzaEscuro } from "../UI/variaveis";

export default function UserProjects({ name, manager, startDate, conclusionDate, skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8 }) {

  return (
    <>
      <View style={styles.card}>
        <View style={styles.wrap}>
          <Text style={styles.type}>{name}</Text>
          <Text style={styles.type}>{manager}</Text>
          <Text style={styles.type}>{startDate}</Text>
          <Text style={styles.type}>{conclusionDate}</Text>
          <Text style={styles.type}>{skill1}</Text>
          <Text style={styles.type}>{skill2}</Text>
          <Text style={styles.type}>{skill3}</Text>
          <Text style={styles.type}>{skill4}</Text>
          <Text style={styles.type}>{skill5}</Text>
          <Text style={styles.type}>{skill6}</Text>
          <Text style={styles.type}>{skill7}</Text>
          <Text style={styles.type}>{skill8}</Text>
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
