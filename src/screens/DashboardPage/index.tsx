import React from "react";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { DashboardList } from "../../components/Dashboard-list";
import { DashboardTitle } from "../../components/Dashboard-title";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PageTitle } from "../../components/Page-title";
import { TitleDashboardProducts } from "../../components/title-dashboard-products";
import { Container, Body, ButtonsContainer } from "./styles";

export interface DashboardProps {
  name: string;
  stars: number;
  coins: number;
  percent: string;
  yieldProduct: "up" | "down";
}

export function DashboardPage({ navigation }: any) {
  const [fixRent, setFixRent] = useState(false);
  const [noFixRent, setNoFixRent] = useState(false);
  const [mockFixRent, setMockFixRent] = useState<Array<DashboardProps>>([
    {
      name: "CDI",
      stars: 1,
      coins: 900,
      percent: "9",
      yieldProduct: "up",
    },
    {
      name: "SELIC",
      stars: 2,
      coins: 100,
      percent: "4",
      yieldProduct: "down",
    },
  ]);

  const [mockNoFixRent, setMockNoFixRent] = useState<Array<DashboardProps>>([
    {
      name: "Amazon",
      stars: 3,
      coins: 105,
      percent: "5",
      yieldProduct: "down",
    },
    {
      name: "Tesla",
      stars: 3,
      coins: 105,
      percent: "4",
      yieldProduct: "down",
    },
    {
      name: "Tinder",
      stars: 3,
      coins: 105,
      percent: "8",
      yieldProduct: "up",
    },
  ]);

  return (
    <Container>
      <Header />
      <Body>
        <ButtonsContainer>
          <DashboardTitle
            title="Meus Rendimentos"
            coins={1205}
            percent="6"
            yieldProduct="up"
          />
          <ScrollView>
            <TitleDashboardProducts
              title="Renda Fixa"
              coins={1000}
              percent="5"
              yieldProduct="up"
              onPress={() => setFixRent(!fixRent)}
            />

            {fixRent && <DashboardList ArrayInvestments={mockFixRent} />}

            <TitleDashboardProducts
              title="Ações"
              coins={205}
              percent="1"
              yieldProduct="down"
              onPress={() => setNoFixRent(!noFixRent)}
            />

            {noFixRent && <DashboardList ArrayInvestments={mockNoFixRent} />}
          </ScrollView>
          <Footer navigation={navigation} />
        </ButtonsContainer>
      </Body>
    </Container>
  );
}
