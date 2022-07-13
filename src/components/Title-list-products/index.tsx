import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import {
  Container,
  StarContainer,
  Title,
  StarIcon,
  Icon,
  ContainerStars,
} from "./styles";

interface TitleListProductsProps {
  title: string;
  numberStars: number;
  type: "quest" | "investment" | "market" | "notice";
}

const icon = {
  quest: "md-school-outline",
  investment: "md-bar-chart-outline",
  market: "ios-wallet-outline",
  notice: "notifications-outline",
};

export function TitleListProducts({
  title,
  numberStars,
  type,
}: TitleListProductsProps) {
  return (
    <Container>
      <StarContainer>
        <Title>{title}</Title>
        <ContainerStars>
          {Array.from(Array(numberStars), () => {
            return (
              <StarIcon
                name="md-star-outline"
                size={RFValue(18)}
                color="#E83A14"
              />
            );
          })}
        </ContainerStars>
      </StarContainer>
      <Icon name={icon[type]} size={RFValue(32)} />
    </Container>
  );
}
