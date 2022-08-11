import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { View } from "react-native";
import { CardImg } from "../../components/Card-img";
import { Header } from "../../components/Header";
import { InfoMsg } from "../../components/Info-msg";
import { AppContext } from "../../context/contextapi";
import {
  Container,
  Body,
  ButtonsContainer,
  RowContainer,
  CardButton,
} from "./styles";

export function HowToQuests({ navigation }: any) {
  const { token } = useContext(AppContext);

  async function setFirstAccess() {
    axios({
      method: "put",
      url: "http://localhost:5000/auth/user/access",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigation.navigate("HowToInvestment");
  }

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
            onPress={() => setFirstAccess()}
          />
        </ButtonsContainer>
      </Body>
    </Container>
  );
}
