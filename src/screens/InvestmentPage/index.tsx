import React, { useContext } from "react";
import { useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { Footer } from "../../components/Footer";
import { InvestmentList } from "../../components/Investment-list";
import { PageTitle } from "../../components/Page-title";
import { TitleListProducts } from "../../components/Title-list-products";
import { AppContext } from "../../context/contextapi";
import { Logo } from "../Loading/styles";
import {
  Container,
  Header,
  Body,
  UserButton,
  UserIcon,
  GraphIcon,
  MoneyView,
  MoneyIcon,
  Amount,
  ButtonsContainer,
} from "./styles";

export interface InvestmentProps {
  name: string;
  stars: number;
  percent: string;
}

export function InvestmentPage({ navigation }: any) {
  const { userMoney } = useContext(AppContext);
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
      <Header>
        <Logo source={require("../../global/imgs/logo-sm.png")} />
        <UserButton>
          <UserIcon name="user" size={RFValue(28)} />
        </UserButton>
        <GraphIcon name="bar-graph" size={RFValue(28)} color="#85C88A" />
        <MoneyView>
          <Amount>{userMoney}</Amount>
          <MoneyIcon name="coins" size={RFValue(28)} color="#FFD54F" />
        </MoneyView>
      </Header>
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
