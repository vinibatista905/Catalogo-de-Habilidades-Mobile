import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import {
  btnAmarelo,
  btnAzul,
  txBranco,
  txCinzaEscuro,
  txPreto,
} from "../../../components/UI/variaveis";
import LinkedinIcon from "react-native-vector-icons/AntDesign";
import GithubIcon from "react-native-vector-icons/AntDesign";
import Header from "../../../components/header";
import { useNavigation } from "@react-navigation/core";


export default function UsersProfile({ route }) {
  const navigation = useNavigation();

  const { userProfileId } = route.params;


  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://192.168.2.125:5000/user/info/${userProfileId}`)
      .then(({ data }) => {
        setUserInfo(data);
        // eslint-disable-next-line
      });
  }, []);

  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    axios
      .get(`http://192.168.2.125:5000/user/check_profile/${userProfileId}`)
      .then(({ data }) => {
        setUserProfile(data);
        console.log(data);

        // eslint-disable-next-line
      });
  }, []);

  return (
    <>
    <ScrollView>
      <View style={styles.container}>
        <Header />

          {userProfile?.map((profile) => (
        <View key={profile.id} style={styles.profileSection}>
            <View  style={styles.wrap}>
              <Image
                source={{
                  uri: `https://res.cloudinary.com/dudmycscb/image/upload/v1637673173/${profile.profileImage}.jpg`,
                }}
                style={styles.profileImage}
              />

              {userInfo?.map((user) => (
                <Text style={styles.profileName} key={user.id}>
                  {user.name}
                </Text>
              ))}

              <View style={styles.iconWrap}>
                <TouchableOpacity>
                  <LinkedinIcon
                    name="linkedin-square"
                    size={36}
                    style={styles.icon}
                  ></LinkedinIcon>
                </TouchableOpacity>
                <TouchableOpacity>
                  <GithubIcon
                    name="github"
                    size={36}
                    style={styles.icon}
                  ></GithubIcon>
                </TouchableOpacity>
              </View>

              <View style={styles.infoWrap}>
                <Text style={styles.infoType}>Cargo: <Text style={styles.info}> {profile.role}</Text> </Text>
                <Text style={styles.infoType}>Time: <Text style={styles.info}> {profile.team}</Text></Text>
                <Text style={styles.infoType}>Data de início: <Text style={styles.info}> {profile.startDate}</Text></Text>
                <Text style={styles.infoType}>Celular: <Text style={styles.info}> {profile.phone}</Text></Text>
                
              </View>

          </View>
         

          <View style={styles.btnWrap}>
            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.btn1}
              onPress={() => {
                navigation.navigate("UsersSkills", {
                  userSkillId: profile.idUser,
                });
              }}
            >
              <Text style={styles.btnText1}>Ver Skills</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.btn2}
              onPress={() => {
                navigation.navigate("UsersProjects", {
                  userProjectId: profile.idUser,
                });
              }}
            >
              <Text style={styles.btnText2}>Ver Projetos</Text>
            </TouchableOpacity>
          </View>
        </View>
         ))}
      </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profileSection: {
    height: 750,
    justifyContent: "center",
    alignItems: "center",
  },

  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10
  },

  profileName: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 35,
    fontFamily: "BoldFont",
    textAlign: "center",
    marginBottom: 5
  },

  wrap: {
    justifyContent: "center",
    alignItems: "center",
  },

  iconWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    color: txCinzaEscuro,
    paddingHorizontal: 12,
  },

  infoWrap: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 30
  },

  infoType: {
    fontSize: 25,
    fontFamily: "BoldFont",
    color: txCinzaEscuro,
    textAlign: "left"
  },

  info: {
    fontSize: 26,
    color: btnAzul,
    textAlign: "left"
  },

  btnWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },

  btn1: {
    justifyContent: "center",
    alignContent: "center",
    width: 140,
    height: 55,
    backgroundColor: btnAzul,
    borderRadius: 15,
    marginTop: 15,
    marginRight: 20,
  },

  btn2: {
    justifyContent: "center",
    alignContent: "center",
    width: 140,
    height: 55,
    backgroundColor: btnAmarelo,
    borderRadius: 15,
    marginTop: 15,
    marginRight: 20,
  },

  btnText1: {
    fontSize: 20,
    fontFamily: "BoldFont",
    color: txBranco,
    textAlign: "center",
  },

  btnText2: {
    fontSize: 19,
    fontFamily: "BoldFont",
    color: txPreto,
    textAlign: "center",
  },
});
