import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PageTitle } from "../../components/Page-title";
import { QuestsList } from "../../components/Quests-list";
import { TitleListQuests } from "../../components/Title-list-quests";
import { AppContext } from "../../context/contextapi";
import { Container, Body, ButtonsContainer } from "./styles";

export interface QuestsProps {
  name: string;
  coins: number;
}

interface ModuleProps {
  id: number;
  name: string;
  description: string;
  reward: number;
}

export function QuestsPage({ navigation }: any) {
  const [questList, setQuestList] = useState(false);
  const { token } = useContext(AppContext);
  const [moduleQuest, setModule] = useState<Array<ModuleProps>>([]);

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

  async function getModule() {
    const response = await axios.get(
      "https://study-api-deno.herokuapp.com/module",
      {
        headers: {
          Authorization: token,
        },
      }
    );

    setModule(response.data.data.modules);
  }

  useEffect(() => {
    getModule();
  }, [moduleQuest]);

  return (
    <Container>
      <Header navigation={navigation} />
      <Body>
        <ButtonsContainer>
          <PageTitle title="Lista de quests" type="quest" />
          <ScrollView>
            <TitleListQuests
              title={moduleQuest[0]?.name}
              numberMoney={moduleQuest[0]?.reward}
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
              title={moduleQuest[1]?.name}
              numberMoney={moduleQuest[1]?.reward}
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
