import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import {
  Container,
  TitleContainer,
  Title,
  MoneyIcon,
  Icon,
  MoneyContainer,
  Money,
} from "./styles";

interface TitleListQuestsProps extends RectButtonProps {
  title: string;
  numberMoney: number;
  type: "quest" | "investment" | "market" | "notice";
  disabled?: boolean;
}

const icon = {
  quest: "md-school-outline",
  investment: "md-bar-chart-outline",
  market: "ios-wallet-outline",
  notice: "notifications-outline",
};

export function TitleListQuests({
  title,
  numberMoney,
  type,
  disabled,
  ...rest
}: TitleListQuestsProps) {
  return (
    <Container {...rest} disabled={disabled}>
      <TitleContainer>
        <Title>{title}</Title>
        <MoneyContainer>
          <Money>{numberMoney}</Money>
          <MoneyIcon name="coins" size={RFValue(24)} color="#FFD54F" />
        </MoneyContainer>
      </TitleContainer>
      <Icon name={icon[type]} size={RFValue(32)} />
    </Container>
  );
}
