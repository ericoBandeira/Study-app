import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { InvestmentList } from "../../components/Investment-list";
import { PageTitle } from "../../components/Page-title";
import { TitleListProducts } from "../../components/Title-list-products";
import { AppContext } from "../../context/contextapi";
import { Container, Body, ButtonsContainer } from "./styles";

export interface InvestmentProps {
  fixed_income: boolean;
  id: number;
  name: string;
  percentage: string;
  stars: number;
}

export function InvestmentPage({ navigation }: any) {
  const [fixRent, setFixRent] = useState(false);
  const [fii, setFii] = useState(false);

  const [investments, setInvestment] = useState<Array<InvestmentProps>>([]);

  const { token } = useContext(AppContext);

  async function getInvestiments() {
    await axios
      .get(`http://localhost:5000/investment`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => setInvestment(res.data.data.investments));
  }

  useEffect(() => {
    getInvestiments();
  }, [investments]);

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

            {fixRent && (
              <InvestmentList
                ArrayInvestments={investments}
                FixedIncome={true}
              />
            )}

            <TitleListProducts
              title="Renda Variável"
              numberStars={3}
              type="investment"
              onPress={() => setFii(!fii)}
            />

            {fii && (
              <InvestmentList
                ArrayInvestments={investments}
                FixedIncome={false}
              />
            )}
          </ScrollView>
          <Footer navigation={navigation} />
        </ButtonsContainer>
      </Body>
    </Container>
  );
}
