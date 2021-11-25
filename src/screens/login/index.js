import React, { useContext } from "react";
// import { Button, Text } from "react-native";
import AuthContext from "../../contexts/auth";
import {
    FormSection,
  ImageSection,
  LoginBtn,
  LoginContainer,
  LoginImage,
  Title,
} from "./styles";

import login from "../../assets/login-2.png";
import { Image } from "react-native";

function Login() {
  const { logged } = useContext(AuthContext);

  console.log(logged);

  return (
    <LoginContainer>
      <ImageSection>
        <Image source={require("../../assets/login-2.png")} />
        <Title>Imagem aqui</Title>
      </ImageSection>

      <FormSection>
        <Title>Formulário de Login aqui</Title>
        <LoginBtn title="login" onPress={() => {}} />
      </FormSection>
    </LoginContainer>
  );
}

export default Login;
