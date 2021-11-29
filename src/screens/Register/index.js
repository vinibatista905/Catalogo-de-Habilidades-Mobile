import React from "react";
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
  RegisterBtn,
  RegisterContainer,
  RegisterImage,
  LogoIcon,
  LogoWrap,
  Login,
  LoginLink,
  LoginWrap,
  Title,
} from "./styles";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";

function Register() {
  const navigation = useNavigation();

  const login = async (values) => {
    console.log(values);
    await axios
      .post("http://localhost:5000/user/register", values)
      .then((resp) => {
        const data = resp.data;
        if (data) {
          console.log(data);
          navigation.push("Login");
        }
      });
  };

  return (
    <>
      <RegisterContainer>
        <ImageSection>
          <RegisterImage source={require("../../assets/login-2.png")} />
          <LogoWrap>
            <Title>Skills Cat</Title>
            <LogoIcon name="logo-octocat" size={28} color="#ffffff" />
          </LogoWrap>
          <Desc>
            Cadastre-se e comece agora a criar o seu catálogo de habilidades.
          </Desc>
        </ImageSection>

        <FormSection>
          <FormTitle>Registre-se</FormTitle>

          <Formik initialValues={{}} onSubmit={(values) => login(values)}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <Form>
                <DescWrap>
                  <FormDesc>Nome*</FormDesc>
                  <FormInput
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                    placeholder="E-mail"
                    keyboardType="email-address"
                  />
                </DescWrap>
                <DescWrap>
                  <FormDesc>E-mail*</FormDesc>
                  <FormInput
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    placeholder="E-mail"
                    keyboardType="email-address"
                  />
                </DescWrap>
                <DescWrap>
                  <FormDesc>Senha*</FormDesc>
                  <FormInput
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    placeholder="Senha"
                    keyboardType="default"
                  />
                </DescWrap>
                <RegisterBtn onPress={handleSubmit} title="Registar" />
              </Form>
            )}
          </Formik>

          <LoginWrap>
            <Login>
              Já possui uma conta?
              <LoginLink onPress={() => navigation.push("Login")}>
                Faça login aqui.
              </LoginLink>
            </Login>
          </LoginWrap>
        </FormSection>
      </RegisterContainer>
    </>
  );
}

export default Register;
