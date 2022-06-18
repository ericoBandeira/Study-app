import React, { useState } from 'react';
import { View } from 'react-native';
import { CardImg } from '../../components/Card-img';
import { Input } from '../../components/Input';
import { Container} from './styles';

export function Home() {
    const [test, setTest] = useState('')
    return (
        <Container>
            <View style={{flexDirection: 'row'}}>
                <CardImg title="Quests" type="quest" activeOpacity={0.8}/>
                <CardImg title="Investimentos" type="invesment" activeOpacity={0.8}/>
            </View>
            <View style={{flexDirection: 'row'}}>
                <CardImg title="Loja" type="market" activeOpacity={0.8}/>
                <CardImg title="Noticias" type="notice" activeOpacity={0.8} />
            </View>
        </Container>
    )
}
