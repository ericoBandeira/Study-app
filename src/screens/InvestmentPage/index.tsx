import React from "react";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { InvestmentList } from "../../components/Investment-list";
import { PageTitle } from "../../components/Page-title";
import { TitleListProducts } from "../../components/Title-list-products";
import { Container, Body, ButtonsContainer } from "./styles";

export interface InvestmentProps {
  name: string;
  stars: number;
  percent: string;
}

export function InvestmentPage({ navigation }: any) {
  const [fixRent, setFixRent] = useState(false);
  const [fii, setFii] = useState(false);

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

  const [mockFii2, setMockFii2] = useState<Array<InvestmentProps>>([
    {
      name: "BRCO11",
      stars: 1,
      percent: "7,62",
    },
    {
      name: "BTLG11",
      stars: 5,
      percent: "6,64",
    },
    {
      name: "HGLG11",
      stars: 2,
      percent: "9,96",
    },
  ]);

  return (
    <Container>
      <Header navigation={navigation} />
      <Body>
        <ButtonsContainer>
          <PageTitle title="Lista de investimentos" type="investment" />
          <ScrollView>
            <TitleListProducts
              title="Renda Fixa"
              numberStars={1}
              type="investment"
              onPress={() => setFixRent(!fixRent)}
            />

            {fixRent && <InvestmentList ArrayInvestments={mockInvestment} />}

            <TitleListProducts
              title="Fundos Imobiliários"
              numberStars={3}
              type="investment"
              onPress={() => setFii(!fii)}
            />

            {fii && <InvestmentList ArrayInvestments={mockFii2} />}
          </ScrollView>
          <Footer navigation={navigation} />
        </ButtonsContainer>
      </Body>
    </Container>
  );
}
