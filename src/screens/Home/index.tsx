import React, { useState } from 'react';
import { TitleListQuests } from '../../components/Title-list-quests';
import { Container} from './styles';

export function Home() {
    return (
        <Container>
            <TitleListQuests title="Fatores de Risco" numberMoney={200} type="quest"/>
        </Container>
    )
}
