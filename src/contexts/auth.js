import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const AuthContext = createContext({
  logged: false,
  setLogged: () => {},
  token: "",
  user: {},
  login: (values) => {},
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("");


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

  const login = async (values) => {
    console.log(values);
    await axios
      .post("http://192.168.2.125:5000/user/login", values)
      .then(async (resp) => {
        const data = resp.data;
        if (data) {
          console.log(data);
          setToken(data.auth_token);
          setAuth(true);
          await AsyncStorage.setItem("auth_token", data.auth_token);
          await AsyncStorage.setItem("user_id", data.user_id);
        }
      });
  };

  return (
    <AuthContext.Provider
      value={{ logged: auth, setLogged: setAuth, auth_token: token, user_id: {}, login }}
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
