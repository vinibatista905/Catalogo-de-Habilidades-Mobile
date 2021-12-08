import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { btnAmarelo, txBranco, txCinzaEscuro } from "../UI/variaveis";
import { useNavigation } from "@react-navigation/core";


export default function UsersList({ id, name, email, profile }) {

  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        key={id}
        onPress={() => {
          navigation.navigate("UsersProfile", {
            userProfileId: id,
          });
        }}
        activeOpacity={0.5}
        style={styles.card}
      >
        <View style={styles.cardWrap}>
          <Image
            source={{
              uri: `https://res.cloudinary.com/dudmycscb/image/upload/v1637673173/${profile}.jpg`,
            }}
            style={styles.image}
          />
          <View style={styles.textWrap}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 120,
    backgroundColor: txBranco,
    justifyContent: "center",
    alignContent: "flex-start",
    borderRadius: 12,
    margin: 10,
    borderColor: btnAmarelo,
    borderWidth: 1,
  },

  cardWrap: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textWrap: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },

  name: {
    fontFamily: "BoldFont",
    fontSize: 22,
    textAlign: "center",
    color: txCinzaEscuro,
    textAlign: "left",
  },
  email: {
    fontFamily: "RegularFont",
    fontSize: 15,
    textAlign: "center",
    color: txCinzaEscuro,
    textAlign: "left",
  },

  image: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
});
