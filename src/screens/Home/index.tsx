import React, { useState } from 'react';
import { View } from 'react-native';
import { CardImg } from '../../components/Card-img';
import { Input } from '../../components/Input';
import { PageTitle } from '../../components/Page-title';
import { Container} from './styles';

export function Home() {
    const [test, setTest] = useState('')
    return (
        <Container>
           <PageTitle title="Lista de quests" type="quest"/>
        </Container>
    )
}
