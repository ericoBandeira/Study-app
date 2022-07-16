import React from "react";
import { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { InvestmentProps } from "../../screens/InvestmentPage";
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
  BuyContainer,
  PlusMinusButton,
  BuyInput,
  TextPlusMinusButton,
  BuyButtonContainer,
} from "./styles";

export function InvestmentList({ ArrayInvestments }: any) {
  const [buy, setBuy] = useState(false);

  return (
    <Container>
      {ArrayInvestments.map((investment: InvestmentProps, index: number) => (
        <InvestmentContainer key={index} index={index}>
          <InvestmentText>{investment.name}</InvestmentText>

          <StarContainer>
            {buy ? (
              <BuyContainer>
                <PlusMinusButton>
                  <TextPlusMinusButton>-</TextPlusMinusButton>
                </PlusMinusButton>
                <BuyInput
                  keyboardType="numeric"
                  onChangeText={() => {}}
                  maxLength={10}
                  value="0"
                />
                <PlusMinusButton>
                  <TextPlusMinusButton>+</TextPlusMinusButton>
                </PlusMinusButton>
              </BuyContainer>
            ) : (
              Array.from(Array(investment.stars), () => {
                return (
                  <StarIcon
                    name="md-star-outline"
                    size={RFValue(18)}
                    color="#E83A14"
                  />
                );
              })
            )}
          </StarContainer>

          <PercentContainer>
            <InvestmentPercent>{investment.percent}%</InvestmentPercent>
            <InvestmentIcon name="md-bar-chart-outline" size={RFValue(24)} />
          </PercentContainer>
        </InvestmentContainer>
      ))}
      <ButtonContainer>
        {buy ? (
          <BuyButtonContainer>
            <Button
              title="Cancelar"
              type="button"
              size="sm"
              cancel
              onPress={() => setBuy(!buy)}
            />
            <Button
              title="Comprar"
              type="button"
              size="sm"
              onPress={() => setBuy(!buy)}
              style={{ marginLeft: 10 }}
            />
          </BuyButtonContainer>
        ) : (
          <Button
            title="Adquirir"
            type="button"
            size="sm"
            onPress={() => setBuy(!buy)}
          />
        )}
      </ButtonContainer>
    </Container>
  );
}
