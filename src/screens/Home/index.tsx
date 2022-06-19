import React, { useState } from 'react';
import { InfoMsg } from '../../components/Info-msg';
import { TitleListQuests } from '../../components/Title-list-quests';
import { Container} from './styles';

export function Home() {
    return (
        <Container>
            <InfoMsg text="Aqui ficaria uma explicação a respeito do funcionamento de uma funcionalidade"/>
        </Container>
    )
}
