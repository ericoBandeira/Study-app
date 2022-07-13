import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { BorderlessButton } from "react-native-gesture-handler";
import { Entypo, Ionicons } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: row;
  justify-content: space-around;
  border-radius: 16px;
  align-items: center;
  margin-bottom: ${getStatusBarHeight() + RFValue(15)}px;
  padding: 8px 0%;
  box-shadow: 0px 8px 16px rgba(5, 0, 56, 0.12);
`;

export const UserButton = styled(BorderlessButton)``;

export const GraphIcon = styled(Entypo)``;

export const CardIcon = styled(Ionicons)``;
