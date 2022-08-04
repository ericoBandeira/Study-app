import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

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
  padding-bottom: ${getStatusBarHeight() + RFValue(10)}px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(26)}px;
`;

export const CardButton = styled(RectButton)``;
