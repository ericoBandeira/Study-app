import React from "react";
import { Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { CardImg } from "../../components/Card-img";
import { Header } from "../../components/Header";
import { InfoMsg } from "../../components/Info-msg";
import { Logo } from "../Loading/styles";
import {
  Container,
  Body,
  ButtonsContainer,
  RowContainer,
  CardButton,
} from "./styles";

export function HowToQuests({ navigation }: any) {
  return (
    <Container>
      <Header />
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
                  disabled={true}
                />
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
            text="Aqui é a área onde estará disponíveis as quests"
            onPress={() => navigation.navigate("HowToInvestment")}
          />
        </ButtonsContainer>
      </Body>
    </Container>
  );
}
