import React from "react";
import { View } from "react-native";
import { CardImg } from "../../components/Card-img";
import { Header } from "../../components/Header";
import { InfoMsg } from "../../components/Info-msg";
import {
  Container,
  Body,
  ButtonsContainer,
  RowContainer,
  CardButton,
} from "./styles";

export function HowToInvestment({ navigation }: any) {
  return (
    <Container>
      <Header />
      <Body>
        <ButtonsContainer>
          <View>
            <RowContainer>
              <CardButton>
                <CardImg title="Quests" type="quest" disabled={true} />
              </CardButton>
              <CardButton>
                <CardImg title="Investimentos" type="investment" />
              </CardButton>
            </RowContainer>
            <RowContainer>
              <CardButton>
                <CardImg title="Loja" type="market" disabled={true} />
              </CardButton>
              <CardButton>
                <CardImg title="Noticias" type="notice" disabled={true} />
              </CardButton>
            </RowContainer>
          </View>
          <InfoMsg
            text="Aqui é a área onde estará disponíveis os seus investimentos"
            onPress={() => navigation.navigate("HowToStore")}
          />
        </ButtonsContainer>
      </Body>
    </Container>
  );
}
