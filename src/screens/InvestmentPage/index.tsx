import React, { useContext } from "react";
import { View } from "react-native";
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

export function InvestmentPage({ navigation }: any) {
  const { userMoney } = useContext(AppContext);

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
          <View>
            <PageTitle title="Lista de investimentos" type="investment" />
            <TitleListProducts
              title="Renda Fixa"
              numberStars={1}
              type="investment"
            />

            <InvestmentList />

            <TitleListProducts
              title="Fundos Imobiliários"
              numberStars={3}
              type="investment"
            />
          </View>
          <Footer navigation={navigation} />
        </ButtonsContainer>
      </Body>
    </Container>
  );
}
