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
  justify-content: center;
  align-items: center;
  background: ${bgAzul};
  height: 50vh;
  width: 100%;
`;

export const LoginImage = styled.Image`
  width: 50%;
`;

export const LogoWrap = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
`;

export const Title = styled.Text`
  font-family: "ExtraBold";
  font-size: 2rem;
  font-weight: 800;
  color: ${txBranco};
`;

export const LogoIcon = styled(Icon)`
  font-family: "ExtraBold";
  font-size: 2rem;
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
  font-size: 2.5rem;
  font-weight: 800;
  color: ${txPreto};
`;

export const LoginBtn = styled.Button`
  width: 3rem;
  border-radius: 12px;
  background: ${btnAmarelo};
  color: ${txPreto};
  margin-top: 1rem;
  margin-top: 1rem;

`;

export const Form = styled.View`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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

