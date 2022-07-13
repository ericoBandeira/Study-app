import React from "react";
import { TouchableOpacityProps } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { CardContainer, TitleCard, CardIcon } from "./styles";

interface CardProps extends RectButtonProps {
  title: string;
  type: "quest" | "investment" | "market" | "notice";
  disabled?: boolean;
}

const icon = {
  quest: "md-school-outline",
  investment: "md-bar-chart-outline",
  market: "ios-wallet-outline",
  notice: "notifications-outline",
};

export function CardImg({ title, type, disabled, ...rest }: CardProps) {
  return (
    <CardContainer disabled={disabled} {...rest}>
      <TitleCard>{title}</TitleCard>
      <CardIcon name={icon[type]} size={RFValue(36)} color="black" />
    </CardContainer>
  );
}
