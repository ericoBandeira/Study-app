import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { DashboardProps } from "../../screens/DashboardPage";
import {
  Container,
  InvestmentContainer,
  PercentContainer,
  InvestmentPercent,
  InvestmentTitle,
  MoneyIcon,
  ContainerStars,
  StarIcon,
  PercentTitle,
  Icon,
} from "./styles";

interface DashboardListProps {
  ArrayInvestments: any;
}

const icon = {
  up: "arrow-bold-up",
  down: "arrow-bold-down",
};

const colorIcon = {
  up: "#050038",
  down: "#E83A14",
};

export function DashboardList({ ArrayInvestments }: DashboardListProps) {
  return (
    <Container>
      {ArrayInvestments.map((investiments: DashboardProps, index: number) => (
        <InvestmentContainer key={index} index={index}>
          <InvestmentTitle>{investiments.name}</InvestmentTitle>

          <ContainerStars>
            {Array.from(Array(investiments.stars), () => {
              return (
                <StarIcon
                  name="md-star-outline"
                  size={RFValue(18)}
                  color="#E83A14"
                />
              );
            })}
          </ContainerStars>

          <PercentContainer>
            <InvestmentPercent>{investiments.coins}</InvestmentPercent>
            <MoneyIcon name="coins" size={RFValue(24)} color="#FFD54F" />
          </PercentContainer>

          <PercentTitle>{investiments.percent}%</PercentTitle>

          <Icon
            name={icon[investiments.yieldProduct]}
            size={RFValue(32)}
            color={colorIcon[investiments.yieldProduct]}
          />
        </InvestmentContainer>
      ))}
    </Container>
  );
}
