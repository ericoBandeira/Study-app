import React from "react";
import { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Header } from "../../components/Header";
import {
  Container,
  QuestTitle,
  QuestText,
  QuestIcon,
  QuestionBody,
  QuestionContainer,
  Body,
  Logo,
  FooterQuestion,
  QuestionOption,
  QuestionOptionText,
  QuestionContainerTitle,
  QuestionTitle,
  BackButton,
  BackIcon,
  CorrectAnswer,
  IncorrectAnswer,
} from "./styles";
export function Questions({ navigation }: any) {
  const [showAnswer, setShowAnswer] = useState(false);

  function CorrectAnswerFunc() {
    setShowAnswer(true);
    setTimeout(() => navigation.navigate("QuestsPage"), 2000);
  }

  return (
    <Container>
      <Header navigation={navigation} />
      <Body>
        <QuestionContainerTitle>
          <BackButton onPress={() => () => navigation.navigate("QuestsPage")}>
            <BackIcon name="arrowleft" size={24} color="black" />
          </BackButton>
          <QuestionTitle>Fatores Externos</QuestionTitle>
        </QuestionContainerTitle>
        <QuestionContainer>
          <QuestionBody>
            <QuestTitle>
              <QuestIcon name="md-school-outline" size={RFValue(38)} />
              <QuestText>
                Qual fator é responsavel por reduzir o poder de compra?
              </QuestText>
            </QuestTitle>
            <QuestionOption onPress={CorrectAnswerFunc}>
              <QuestionOptionText>Inflação</QuestionOptionText>
              {showAnswer && (
                <CorrectAnswer name="checkmark-sharp" size={24} color="black" />
              )}
            </QuestionOption>
            <QuestionOption onPress={CorrectAnswerFunc}>
              <QuestionOptionText>Políticas Internacionais</QuestionOptionText>
              {showAnswer && (
                <IncorrectAnswer name="x" size={24} color="#E83A14" />
              )}
            </QuestionOption>
            <QuestionOption onPress={CorrectAnswerFunc}>
              <QuestionOptionText>Renda Fixa</QuestionOptionText>
              {showAnswer && (
                <IncorrectAnswer name="x" size={24} color="#E83A14" />
              )}
            </QuestionOption>
          </QuestionBody>

          <FooterQuestion>
            <Logo source={require("../../global/imgs/logo-md.png")} />
          </FooterQuestion>
        </QuestionContainer>
      </Body>
    </Container>
  );
}
