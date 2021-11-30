import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import { txBranco, txCinzaEscuro } from "../UI/variaveis";
import { useNavigation } from "@react-navigation/core";

export default function HomeItem({ titulo, icon1, icon2, navigate }) {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.75}
        onPress={() => navigation.push(navigate)}
      >
        <View style={styles.wrap}>
          <Text style={styles.title}>{titulo}</Text>
          {icon1 === "" ? null : <Icon style={styles.icon} name={icon1} size={35} />}
          {icon2 === "" ? null : <Icon2 style={styles.icon} name={icon2} size={35} />}
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
  },

  wrap: {
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
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
