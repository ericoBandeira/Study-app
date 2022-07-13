import React from "react";
import { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "../Button";
import {
  Container,
  InvestmentContainer,
  InvestmentText,
  StarIcon,
  PercentContainer,
  InvestmentPercent,
  InvestmentIcon,
  StarContainer,
  ButtonContainer,
} from "./styles";

interface InvestmentProps {
  name: string;
  stars: number;
  percent: string;
}

export function InvestmentList() {
  const [mockInvestment, setMockInvestment] = useState<Array<InvestmentProps>>([
    {
      name: "CDI",
      stars: 1,
      percent: "9",
    },
    {
      name: "SELIC",
      stars: 2,
      percent: "11",
    },
  ]);

  return (
    <Container>
      {mockInvestment.map((investment: InvestmentProps, index: number) => (
        <InvestmentContainer key={index} index={index}>
          <InvestmentText>{investment.name}</InvestmentText>

          <StarContainer>
            {Array.from(Array(investment.stars), () => {
              return (
                <StarIcon
                  name="md-star-outline"
                  size={RFValue(18)}
                  color="#E83A14"
                />
              );
            })}
          </StarContainer>

          <PercentContainer>
            <InvestmentPercent>{investment.percent}%</InvestmentPercent>
            <InvestmentIcon name="md-bar-chart-outline" size={RFValue(24)} />
          </PercentContainer>
        </InvestmentContainer>
      ))}
      <ButtonContainer>
        <Button title="Adquirir" type="button" size="sm" />
      </ButtonContainer>
    </Container>
  );
}
