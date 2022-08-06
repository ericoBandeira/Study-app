import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
  align-items: center;
  justify-content: center;
`;

export const Body = styled.View`
  margin-top: ${RFValue(26)}px;
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: ${RFValue(24)}px;
  justify-content: space-between;
`;
