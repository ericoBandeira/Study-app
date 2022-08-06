import styled from "styled-components/native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
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

export const Icon = styled(Entypo)``;

export const PercentContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InvestmentPercent = styled.Text`
  margin-right: 5px;
  font-family: ${({ theme }) => theme.fonts.mid};
  font-size: 15px;

  color: ${({ theme }) => theme.colors.text};
`;

export const MoneyIcon = styled(FontAwesome5)`
  margin-left: 5px;
`;

export const PercentTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.mid};
  font-size: 15px;
  margin-right: 5px;

  color: ${({ theme }) => theme.colors.text};
`;
