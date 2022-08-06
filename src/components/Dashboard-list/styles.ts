import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

interface ContainerProps {
  index: number;
}

export const Container = styled.View`
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary_light_2};
  padding: ${RFValue(0)}px ${RFValue(0)}px;
  padding-bottom: ${RFValue(10)}px;
  box-shadow: 0px 8px 16px rgba(5, 0, 56, 0.12);
  border-radius: 16px;
  margin: ${RFValue(15)}px ${RFValue(15)}px;
`;

export const InvestmentContainer = styled.View<ContainerProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(10)}px ${RFValue(10)}px;
  background-color: ${({ index, theme }) =>
    index % 2 === 0 ? "none" : theme.colors.primary};
  border-radius: 5px;
`;

export const InvestmentTitle = styled.Text`
  margin-right: 5px;
  font-family: ${({ theme }) => theme.fonts.mid};
  font-size: 15px;
  align-content: flex-start;

  color: ${({ theme }) => theme.colors.text};
`;

export const InvestmentPercent = styled.Text`
  margin-right: 5px;
  font-family: ${({ theme }) => theme.fonts.mid};
  font-size: 15px;

  color: ${({ theme }) => theme.colors.text};
`;

export const PercentContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InvestmentIcon = styled(Ionicons)``;

export const MoneyIcon = styled(FontAwesome5)`
  margin-left: 5px;
`;

export const StarIcon = styled(Ionicons)`
  margin-right: 5px;
`;

export const Icon = styled(Entypo)``;

export const ButtonContainer = styled.View`
  align-items: flex-end;
  margin: ${RFValue(10)}px;
  margin-top: ${RFValue(15)}px;
`;

export const BuyContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PlusMinusButton = styled(BorderlessButton)``;

export const TextPlusMinusButton = styled.Text`
  color: ${({ theme }) => theme.colors.attention};
`;

export const BuyInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 5px;
  margin: 0 ${RFValue(5)}px;
`;

export const BuyButtonContainer = styled.View`
  flex-direction: row;
`;

export const ContainerStars = styled.View`
  flex-direction: row;
`;

export const PercentTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.mid};
  font-size: 20px;
  margin-right: 5px;

  color: ${({ theme }) => theme.colors.text};
`;
