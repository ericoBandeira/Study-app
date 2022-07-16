import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 21px;

  background-color: ${({ theme }) => theme.colors.primary_light_2};
  border-radius: 6px;
  margin: 0 ${RFValue(15)}px;
  margin-top: ${RFValue(15)}px;
`;

export const StarContainer = styled.View``;

export const ContainerStars = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.mid};
  font-size: 20px;
  margin-bottom: 4px;

  color: ${({ theme }) => theme.colors.text};
`;

export const StarIcon = styled(Ionicons)`
  margin-right: 5px;
`;

export const Icon = styled(Ionicons)``;
