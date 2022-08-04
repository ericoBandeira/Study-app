import React, { useContext } from "react";
import { View } from "react-native";
import { CardImg } from "../../components/Card-img";
import { AppContext } from "../../context/contextapi";
import { Footer } from "../../components/Footer";
import {
  Container,
  Body,
  ButtonsContainer,
  RowContainer,
  CardButton,
} from "./styles";
import { Header } from "../../components/Header";

export function Home({ navigation }: any) {
  const { userMoney } = useContext(AppContext);

  return (
    <Container>
      <Header />
      <Body>
        <ButtonsContainer>
          <View>
            <RowContainer>
              <CardButton>
                <CardImg
                  title="Quests"
                  type="quest"
                  onPress={() => navigation.navigate("QuestsPage")}
                />
              </CardButton>
              <CardButton>
                <CardImg
                  title="Investimentos"
                  type="investment"
                  onPress={() => navigation.navigate("InvestmentPage")}
                />
              </CardButton>
            </RowContainer>
            <RowContainer>
              <CardButton>
                <CardImg title="Loja" type="market" />
              </CardButton>
              <CardButton>
                <CardImg title="Noticias" type="notice" />
              </CardButton>
            </RowContainer>
          </View>
          <Footer navigation={navigation} />
        </ButtonsContainer>
      </Body>
    </Container>
  );
}
