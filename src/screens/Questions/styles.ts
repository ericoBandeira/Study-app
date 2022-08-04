import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RectButton } from "react-native-gesture-handler";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
  align-items: center;
  justify-content: center;
`;

export const QuestionTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.mid};
  font-size: 20px;

  color: ${({ theme }) => theme.colors.text};
`;

export const QuestionContainerTitle = styled.View`
  padding: ${RFValue(10)}px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const QuestTitle = styled.View`
  align-items: center;
  padding: ${RFValue(24)}px;
  padding-bottom: ${RFValue(48)}px;

  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 8px 16px rgba(5, 0, 56, 0.12);
  border-radius: 16px;
  margin-bottom: ${RFValue(32)}px;
`;

export const QuestText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.mid};
  font-size: 20px;

  color: ${({ theme }) => theme.colors.text};
`;

export const QuestIcon = styled(Ionicons)``;

export const QuestionBody = styled.View`
  background: ${({ theme }) => theme.colors.primary_light};

  box-shadow: 0px 8px 16px rgba(5, 0, 56, 0.12);
  border-radius: 16px;
`;

export const QuestionContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: ${RFValue(32)}px;
  justify-content: space-between;
`;

export const Body = styled.View`
  margin-top: ${RFValue(26)}px;
`;

export const FooterQuestion = styled.View`
  align-items: center;
`;

export const Logo = styled.Image`
  margin-bottom: ${getStatusBarHeight() + RFValue(15)}px;
`;

export const QuestionOption = styled(RectButton)`
  background: ${({ theme }) => theme.colors.primary_light};
  box-shadow: 0px 8px 16px rgba(5, 0, 56, 0.12);
  border-radius: 16px;
  padding: ${RFValue(15)}px;
  margin-top: ${RFValue(19)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const QuestionOptionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.mid};
  font-size: 20px;

  color: ${({ theme }) => theme.colors.text};
`;

export const BackButton = styled(RectButton)``;

export const BackIcon = styled(AntDesign)`
  margin-right: ${RFValue(60)}px;
`;

export const CorrectAnswer = styled(Ionicons)``;

export const IncorrectAnswer = styled(Feather)``;
