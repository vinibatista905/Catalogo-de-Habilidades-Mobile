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
  LoginImage,
  LogoIcon,
  LogoWrap,
  Register,
  RegisterLink,
  Title,
} from "./styles";
import axios from "axios";

function Login() {
  const { logged } = useContext(AuthContext);
  console.log(logged);

  const login = async (values) => {
    console.log(values);
    await axios
      .post("http://localhost:5000/user/login", values)
      .then((resp) => {
        const data = resp.data;
        if (data) {
          console.log(data);
        }
      });
  };

  return (
    <>
      <LoginContainer>
        <ImageSection>
          <LoginImage source={require("../../assets/login-2.png")} />
          <LogoWrap>
            <Title>Skills Cat</Title>
            <LogoIcon name="logo-octocat" size={28} color="#ffffff" />
          </LogoWrap>
          <Desc>Faça login para acessar o seu catálogo de habilidades.</Desc>
        </ImageSection>

        <FormSection>
          <FormTitle>Login</FormTitle>

          <Formik initialValues={{}} onSubmit={(values) => login(values)}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <Form>
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
                <LoginBtn onPress={handleSubmit} title="Login" />
              </Form>
            )}
          </Formik>
          <Register>
            Ainda não possui uma conta?
            <RegisterLink>Registre-se aqui.</RegisterLink>
          </Register>
        </FormSection>
      </LoginContainer>
    </>
  );
}

export default Login;
