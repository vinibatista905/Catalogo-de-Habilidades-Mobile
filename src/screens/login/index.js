import React, { useContext } from "react";
import AuthContext from "../../contexts/auth";
import { Formik } from "formik";
import {
  Desc,
  DescWrap,
  Form,
  FormDesc,
  FormInput,
  FormSection,
  FormTitle,
  ImageSection,
  LoginBtn,
  LoginContainer,
  LogoIcon,
  LogoWrap,
  Title,
} from "./styles";

import { Image } from "react-native";

function Login() {
  const { logged } = useContext(AuthContext);

  console.log(logged);

  return (
    <LoginContainer>
      <ImageSection>
        <Image source={require("../../assets/login-2.png")} />
        <LogoWrap>
          <Title>Skills Cat</Title>
          <LogoIcon name="logo-octocat" size={28} color="#ffffff" />
        </LogoWrap>
        <Desc>Faça login para acessar o seu catálogo de habilidades.</Desc>
      </ImageSection>

      <FormSection>
        <FormTitle>Login</FormTitle>

        <Formik
          initialValues={{ email: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <Form>
              <DescWrap>
                <FormDesc>E-mail*</FormDesc>
                <FormInput
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  placeholder="E-mail"
                  keyboardType="email"
                />
              </DescWrap>
              <DescWrap>
                <FormDesc>Senha*</FormDesc>
                <FormInput
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  placeholder="Senha"
                  keyboardType="numeric"
                />
              </DescWrap>
              <LoginBtn onPress={handleSubmit} title="Login" />
            </Form>
          )}
        </Formik>
        {/* <LoginBtn title="login" onPress={() => {}} /> */}
      </FormSection>
    </LoginContainer>
  );
}

export default Login;
