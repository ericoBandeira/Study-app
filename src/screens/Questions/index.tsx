import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Header } from "../../components/Header";
import { AppContext } from "../../context/contextapi";
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

interface QuestionProps {
  id: number;
  question_text: string;
  alternatives: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  answer: string;
}

export function Questions({ navigation }: any) {
  const [showAnswer, setShowAnswer] = useState(false);
  const { token } = useContext(AppContext);
  const [numberQuestion, SetNumberQuestion] = useState(0);
  const [questSize, setQuestSize] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionProps>({
    id: 0,
    question_text: "",
    alternatives: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    answer: "",
  });

  async function GetQuestion() {
    const response = await axios.get(
      "https://study-api-deno.herokuapp.com/question",
      {
        headers: {
          Authorization: token,
        },
      }
    );

    setQuestSize(response.data.data.questions.length);
    setCurrentQuestion(response.data.data.questions[numberQuestion]);
  }

  async function CorrectAnswerFunc() {
    console.log(numberQuestion, "-", currentQuestion);
    setShowAnswer(true);
    setTimeout(() => {
      if (numberQuestion + 1 < questSize) {
        GetQuestion();
        setShowAnswer(false);
        SetNumberQuestion(numberQuestion + 1);
      } else {
        navigation.navigate("QuestsPage");
      }
    }, 2000);
  }

  useEffect(() => {
    GetQuestion();
  }, [currentQuestion]);

  return (
    <Container>
      <Header navigation={navigation} />
      <Body>
        <QuestionContainerTitle>
          <BackButton onPress={() => navigation.navigate("QuestsPage")}>
            <BackIcon name="arrowleft" size={24} color="black" />
          </BackButton>
          <QuestionTitle>Investimentos</QuestionTitle>
        </QuestionContainerTitle>
        <QuestionContainer>
          <QuestionBody>
            <QuestTitle>
              <QuestIcon name="md-school-outline" size={RFValue(38)} />
              <QuestText>{currentQuestion.question_text}</QuestText>
            </QuestTitle>
            <QuestionOption onPress={CorrectAnswerFunc}>
              <QuestionOptionText>
                {currentQuestion.alternatives.a}
              </QuestionOptionText>
              {showAnswer &&
                (currentQuestion.answer === "a" ? (
                  <CorrectAnswer
                    name="checkmark-sharp"
                    size={24}
                    color="black"
                  />
                ) : (
                  <IncorrectAnswer name="x" size={24} color="#E83A14" />
                ))}
            </QuestionOption>
            <QuestionOption onPress={CorrectAnswerFunc}>
              <QuestionOptionText>
                {currentQuestion.alternatives.b}
              </QuestionOptionText>
              {showAnswer &&
                (currentQuestion.answer === "b" ? (
                  <CorrectAnswer
                    name="checkmark-sharp"
                    size={24}
                    color="black"
                  />
                ) : (
                  <IncorrectAnswer name="x" size={24} color="#E83A14" />
                ))}
            </QuestionOption>
            <QuestionOption onPress={CorrectAnswerFunc}>
              <QuestionOptionText>
                {currentQuestion.alternatives.c}
              </QuestionOptionText>
              {showAnswer &&
                (currentQuestion.answer === "c" ? (
                  <CorrectAnswer
                    name="checkmark-sharp"
                    size={24}
                    color="black"
                  />
                ) : (
                  <IncorrectAnswer name="x" size={24} color="#E83A14" />
                ))}
            </QuestionOption>
            <QuestionOption onPress={CorrectAnswerFunc}>
              <QuestionOptionText>
                {currentQuestion.alternatives.d}
              </QuestionOptionText>
              {showAnswer &&
                (currentQuestion.answer === "d" ? (
                  <CorrectAnswer
                    name="checkmark-sharp"
                    size={24}
                    color="black"
                  />
                ) : (
                  <IncorrectAnswer name="x" size={24} color="#E83A14" />
                ))}
            </QuestionOption>
          </QuestionBody>

          {/* <FooterQuestion>
            <Logo source={require("../../global/imgs/logo-md.png")} />
          </FooterQuestion> */}
        </QuestionContainer>
      </Body>
    </Container>
  );
}
