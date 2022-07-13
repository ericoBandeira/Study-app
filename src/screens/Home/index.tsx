import React, { useContext } from "react";
import { View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { CardImg } from "../../components/Card-img";
import { AppContext } from "../../context/contextapi";
import { Logo } from "../Loading/styles";
import { Footer } from "../../components/Footer";
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
  RowContainer,
  CardButton,
} from "./styles";

export function Home({ navigation }: any) {
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
            <RowContainer>
              <CardButton>
                <CardImg title="Quests" type="quest" />
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
