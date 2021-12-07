import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert } from "react-native";

const AuthContext = createContext({
  logged: false,
  setLogged: () => {},
  token: "",
  user_id: "",
  login: (values) => {},
  loading: false
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("");
  const [userID, setUserID] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notValidData, setNotValidData] = useState(false);


  const login = async (values) => {
    console.log(values);
    await axios
      .post("http://192.168.2.125:5000/user/login", values)
      .then(async (resp) => {
        const data = resp.data;
        if (data) {
          console.log(data);
          setToken(data.auth_token);
          const stringID = String(data.user_id);
          console.log(stringID);
          setUserID(stringID);
          setAuth(true);
          setIsLoading(true);
          await AsyncStorage.setItem("auth_token", data.auth_token);
          await AsyncStorage.setItem("user_id", stringID);
        }
      })
        .catch((err) => {
          Alert.alert(
            "Dados incorretos!",
            "E-mail e senha devem ser válidos.",
            [{ text: "OK", onPress: () => console.log("Ok") }]
          );
        });
  };

  useEffect(() => {
    getIsLogged();
  }, []);

  const getIsLogged = async () => {
    const tokenLocal = await AsyncStorage.getItem("auth_token");

    if (!!tokenLocal) {
      setAuth(true);
      setToken(tokenLocal);
      console.log(token);
    }
  };

  return (
    <AuthContext.Provider
      value={{ logged: auth, setLogged: setAuth, auth_token: token, user_id: userID, login, loading: isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default AuthContext;
