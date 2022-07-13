import styled from "styled-components/native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 21px;

  background-color: ${({ theme }) => theme.colors.primary_light_2};
  border-radius: 6px;
`;

export const TitleContainer = styled.View``;

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

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.mid};
  font-size: 20px;
  margin-bottom: 4px;

  color: ${({ theme }) => theme.colors.text};
`;

export const MoneyIcon = styled(FontAwesome5)`
  margin-right: 5px;
`;

export const Icon = styled(Ionicons)``;
