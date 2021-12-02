import { useNavigation } from "@react-navigation/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { bgAzul, txBranco } from "../UI/variaveis";

export default function Navbar() {
  const navigation = useNavigation();

  const userId = 1;
  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    axios
      .get(`http://192.168.2.125:5000/user/check_profile/${userId}`)
      .then(({ data }) => {
        setUserProfile(data);

        // eslint-disable-next-line
      });
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.logoWrap}
          activeOpacity={0.75}
          onPress={() => navigation.push("Home")}
        >
          <Text style={styles.logo}>Skills Cat</Text>
          <Icon name="logo-octocat" size={30} color="#ffffff" />
        </TouchableOpacity>

        {userProfile?.map((profile) => (
          <TouchableOpacity
            key={profile.id}
            style={styles.imageWrap}
            activeOpacity={0.75}
            onPress={() => navigation.push("Profile")}
          >
            <Image
              source={{
                uri: `https://res.cloudinary.com/dudmycscb/image/upload/v1637673173/${profile.profileImage}.jpg`,
              }}
              style={styles.image}
            />
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 130,
    backgroundColor: bgAzul,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },

  logoWrap: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    marginTop: 30,
  },

  logo: {
    justifyContent: "center",
    alignItems: "center",
    color: txBranco,
    fontSize: 30,
    fontFamily: "ExtraBold",
    paddingRight: 10,
  },

  imageWrap: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 30,
  },

  image: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
});
