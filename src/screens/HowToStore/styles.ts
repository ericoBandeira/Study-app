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

export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: row;
  justify-content: space-around;
  border-radius: 16px;
  align-items: center;
  margin-top: ${getStatusBarHeight() + RFValue(15)}px;
  padding: 8px 0%;
  box-shadow: 0px 8px 16px rgba(5, 0, 56, 0.12);
`;

export const Body = styled.View`
  margin-top: ${RFValue(26)}px;
`;

export const Logo = styled.Image``;

export const UserButton = styled(RectButton)``;

export const UserIcon = styled(AntDesign)``;

export const GraphIcon = styled(Entypo)``;

export const MoneyView = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.mid};
  font-size: 20px;
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.text};
`;

export const MoneyIcon = styled(FontAwesome5)``;

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
