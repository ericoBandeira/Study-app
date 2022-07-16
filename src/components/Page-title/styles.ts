import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px ${RFValue(15)}px;
  padding-bottom: 15px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.mid};
  font-size: 20px;

  color: ${({ theme }) => theme.colors.text};
`;

export const Icon = styled(Ionicons)``;
