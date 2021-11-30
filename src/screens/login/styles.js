import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";

import {
  bgAzul,
  btnAmarelo,
  txBranco,
  txPreto,
} from "../../components/UI/variaveis";

export const LoginContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const ImageSection = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${bgAzul};
  
  height: 60vh;
  width: 100%;
`;

export const LoginImage = styled.Image`
  width: 12rem;
  height: 12rem;
  padding: 1rem 0;
`;

export const LogoWrap = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;
`;

export const Title = styled.Text`
  font-family: "ExtraBold";
  font-size: 2.5rem;
  font-weight: 800;
  color: ${txBranco};
`;

export const LogoIcon = styled(Icon)`
  font-family: "ExtraBold";
  font-size: 2.5rem;
  font-weight: 800;
  color: ${txBranco};
`;

export const Desc = styled.Text`
  font-family: "RegularFont";
  font-size: 1rem;
  font-weight: 400;
  color: ${txBranco};
  text-align: center;
`;

export const FormSection = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${txBranco};
  height: 60vh;
  width: 100%;
`;

export const FormTitle = styled.Text`
  font-family: "ExtraBold";
  font-size: 25;
  font-weight: 800;
  color: ${txPreto};
  padding-top: 1rem;
`;

export const LoginBtn = styled.Button`
  width: 3rem;
  border-radius: 12px;
  background: ${btnAmarelo};
  color: ${txPreto};
  margin-top: 1rem;
  
`;

export const Form = styled.View`
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
 
`;

export const DescWrap = styled.View`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const FormDesc = styled.Text`
  font-family: "ExtraBold";
  font-size: 1.5rem;
  font-weight: 800;
  color: ${txPreto};
  text-align: start;
`;

export const FormInput = styled.TextInput`
  border: none;
  background: rgba(0, 0, 0, 0.15);
  color: #000;
  margin-top: 1rem;
  margin-bottom: 0;
  font-size: 1.2rem;
  border-radius: 7px;
  width: 100%;
  padding: 1rem;
  transition: all 0.2s linear;

  :focus {
    outline: none;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  }
`;

export const RegisterWrap = styled.View`
  display: flex;
  height: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

`;

export const Register = styled.Text`
  font-family: "RegularFont";
  font-size: 1rem;
  font-weight: 400;
  color: ${txPreto};
`;

export const RegisterLink = styled.TouchableOpacity`
  font-family: "RegularFont";
  font-size: 1rem;
  font-weight: 700;
  color: ${btnAmarelo};
`;