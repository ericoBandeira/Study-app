import React, { useContext, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PageTitle } from "../../components/Page-title";
import { QuestsList } from "../../components/Quests-list";
import { TitleListQuests } from "../../components/Title-list-quests";
import { Container, Body, ButtonsContainer } from "./styles";

export interface QuestsProps {
  name: string;
  coins: number;
}

export function QuestsPage({ navigation }: any) {
  const [questList, setQuestList] = useState(false);

  const [mockQuests, setMockQuests] = useState<Array<QuestsProps>>([
    {
      name: "Inflação",
      coins: 100,
    },
    {
      name: "Relações Internacionais",
      coins: 50,
    },
    {
      name: "Politicas Publicas",
      coins: 50,
    },
  ]);

  return (
    <Container>
      <Header navigation={navigation} />
      <Body>
        <ButtonsContainer>
          <PageTitle title="Lista de quests" type="quest" />
          <ScrollView>
            <TitleListQuests
              title="Fatores Externos"
              numberMoney={200}
              type="quest"
              onPress={() => setQuestList(!questList)}
            />

            {questList && (
              <QuestsList
                ArrayQuests={mockQuests}
                Questions="Fatores Externos"
                navigation={navigation}
              />
            )}

            <TitleListQuests
              title="Renda Fixa"
              numberMoney={500}
              type="quest"
              onPress={() => {}}
              disabled
              enabled={false}
            />
          </ScrollView>
          <Footer navigation={navigation} />
        </ButtonsContainer>
      </Body>
    </Container>
  );
}
