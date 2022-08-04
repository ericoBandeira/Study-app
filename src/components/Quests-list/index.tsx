import React from "react";
import { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { InvestmentProps } from "../../screens/InvestmentPage";
import { QuestsProps } from "../../screens/QuestsPage";
import { Button } from "../Button";
import {
  Container,
  InvestmentContainer,
  QuestNumber,
  PercentContainer,
  InvestmentPercent,
  QuestTitle,
  ButtonContainer,
  MoneyIcon,
} from "./styles";

interface QuestsListProps {
  ArrayQuests: any;
  Questions: string;
  navigation: any;
}

export function QuestsList({
  ArrayQuests,
  Questions,
  navigation,
}: QuestsListProps) {
  return (
    <Container>
      {ArrayQuests.map((quests: QuestsProps, index: number) => (
        <InvestmentContainer key={index} index={index}>
          <QuestNumber>Quest {index + 1}:</QuestNumber>

          <QuestTitle>{quests.name}</QuestTitle>

          <PercentContainer>
            <InvestmentPercent>{quests.coins}</InvestmentPercent>
            <MoneyIcon name="coins" size={RFValue(24)} color="#FFD54F" />
          </PercentContainer>
        </InvestmentContainer>
      ))}
      <ButtonContainer>
        <Button
          title="Iniciar"
          type="button"
          size="sm"
          onPress={() => navigation.navigate("QuestionPage")}
        />
      </ButtonContainer>
    </Container>
  );
}
