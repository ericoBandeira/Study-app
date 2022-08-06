import styled from "styled-components/native";
import { Entypo, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 19px 21px;

  background-color: ${({ theme }) => theme.colors.primary_light_2};
  border-radius: 6px;
  margin: 0 ${RFValue(15)}px;
  margin-top: ${RFValue(15)}px;
`;

export const MoneyContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Money = styled.Text`
  font-family: ${({ theme }) => theme.fonts.mid};
  font-size: 20px;
  margin-right: 5px;

  color: ${({ theme }) => theme.colors.text};
`;

export const MoneyIcon = styled(FontAwesome5)`
  margin-right: 5px;
`;

export const PercentTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.mid};
  font-size: 20px;
  margin-right: 5px;

  color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.mid};
  font-size: 20px;
  margin-bottom: 4px;

  color: ${({ theme }) => theme.colors.text};
`;

export const Icon = styled(Entypo)``;
