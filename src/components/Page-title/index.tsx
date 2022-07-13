import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Container, Title, Icon } from "./styles";

interface TitleProps {
  title: string;
  type: "quest" | "investment" | "market" | "notice";
}

const icon = {
  quest: "md-school-outline",
  investment: "md-bar-chart-outline",
  market: "ios-wallet-outline",
  notice: "notifications-outline",
};

export function PageTitle({ title, type }: TitleProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Icon name={icon[type]} size={RFValue(28)} />
    </Container>
  );
}
