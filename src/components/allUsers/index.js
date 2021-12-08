import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { btnAmarelo, txBranco, txCinza, txCinzaEscuro } from "../UI/variaveis";
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
          {profile ? (
            <Image
              source={{
                uri: `https://res.cloudinary.com/dudmycscb/image/upload/v1637673173/${profile.profileImage}.jpg`,
              }}
              style={styles.image}
            />
          ) : null}
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
    margin: 8,
    borderColor: btnAmarelo,
    borderWidth: 1,
  },

  cardWrap: {
    width: 350,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

  },
  textWrap: {
    width: 250,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
    flexWrap: "wrap"
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
