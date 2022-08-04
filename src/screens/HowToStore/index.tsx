import React from "react";
import { Text, View } from "react-native";
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

export function HowToStore({ navigation }: any) {
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
                <CardImg
                  title="Investimentos"
                  type="investment"
                  disabled={true}
                />
              </CardButton>
            </RowContainer>
            <RowContainer>
              <CardButton>
                <CardImg title="Loja" type="market" />
              </CardButton>
              <CardButton>
                <CardImg title="Noticias" type="notice" disabled={true} />
              </CardButton>
            </RowContainer>
          </View>
          <InfoMsg
            text="Aqui é a área onde estará disponíveis produtos de investimento para você comprar"
            onPress={() => navigation.navigate("HowToNotice")}
          />
        </ButtonsContainer>
      </Body>
    </Container>
  );
}
