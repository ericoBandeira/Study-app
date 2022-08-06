import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import {
  Container,
  Title,
  Icon,
  PercentContainer,
  InvestmentPercent,
  MoneyIcon,
  PercentTitle,
} from "./styles";

interface TitleProps {
  title: string;
  yieldProduct: "up" | "down";
  percent: string;
  coins: number;
}

const icon = {
  up: "arrow-bold-up",
  down: "arrow-bold-down",
};

const colorIcon = {
  up: "#050038",
  down: "#E83A14",
};

export function DashboardTitle({
  title,
  yieldProduct,
  percent,
  coins,
}: TitleProps) {
  return (
    <Container>
      <Title>{title}</Title>

      <PercentContainer>
        <InvestmentPercent>{coins}</InvestmentPercent>
        <MoneyIcon name="coins" size={RFValue(18)} color="#FFD54F" />
      </PercentContainer>

      <PercentTitle>{percent}%</PercentTitle>

      <Icon
        name={icon[yieldProduct]}
        size={RFValue(20)}
        color={colorIcon[yieldProduct]}
      />
    </Container>
  );
}
