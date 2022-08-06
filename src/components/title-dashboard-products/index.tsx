import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import {
  Container,
  Title,
  Icon,
  MoneyContainer,
  Money,
  MoneyIcon,
  PercentTitle,
} from "./styles";

interface TitleDashboardProductsProps extends RectButtonProps {
  title: string;
  coins: number;
  percent: string;
  yieldProduct: "up" | "down";
}

const icon = {
  up: "arrow-bold-up",
  down: "arrow-bold-down",
};

const colorIcon = {
  up: "#050038",
  down: "#E83A14",
};

export function TitleDashboardProducts({
  title,
  coins,
  percent,
  yieldProduct,
  ...rest
}: TitleDashboardProductsProps) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <MoneyContainer>
        <Money>{coins}</Money>
        <MoneyIcon name="coins" size={RFValue(24)} color="#FFD54F" />
      </MoneyContainer>
      <PercentTitle>{percent}%</PercentTitle>
      <Icon
        name={icon[yieldProduct]}
        size={RFValue(32)}
        color={colorIcon[yieldProduct]}
      />
    </Container>
  );
}
