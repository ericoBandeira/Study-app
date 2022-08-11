import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

interface ContainerProps {
  index: number;
}

export const Container = styled.View`
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary_light_2};
  padding: ${RFValue(0)}px ${RFValue(0)}px;
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

export const InvestmentText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.mid};
  font-size: 15px;

  color: ${({ theme }) => theme.colors.text};
`;

export const StarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  align-items: flex-start;
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

export const StarIcon = styled(Ionicons)`
  margin-right: 5px;
`;

export const ButtonContainer = styled.View`
  align-items: flex-end;
  margin: ${RFValue(10)}px;
  margin-top: ${RFValue(15)}px;
`;

export const BuyContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BuyButtonContainer = styled.View`
  flex-direction: row;
`;

export const ModalTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.text};
`;

export const ModalInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.shape};
  width: ${RFValue(300)}px;
  padding: 8px 12px;

  border: 1px solid #cdccd7;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const ModalButtonContainer = styled.View`
  flex-direction: row;
`;

export const ModalInvest = styled.Modal``;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary_light_2};
`;
