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

export function HowToNotice({ navigation }: any) {
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
                <CardImg title="Loja" type="market" disabled={true} />
              </CardButton>
              <CardButton>
                <CardImg title="Noticias" type="notice" />
              </CardButton>
            </RowContainer>
          </View>
          <InfoMsg
            text="E por útlimo, este é o card vai ter notícias sobre atualidade do Brasil e do mundo. Agora você está pronto para usar o aplicativo, vamos?"
            onPress={() => navigation.navigate("Home")}
          />
        </ButtonsContainer>
      </Body>
    </Container>
  );
}
