import React, { useState } from 'react';
import { View } from 'react-native';
import { CardImg } from '../../components/Card-img';
import { Input } from '../../components/Input';
import { PageTitle } from '../../components/Page-title';
import { TitleListProducts } from '../../components/Title-list-products';
import { Container} from './styles';

export function Home() {
    const [test, setTest] = useState('')
    return (
        <Container>
            <TitleListProducts title="Renda Fixa" numberStars={3}/>
        </Container>
    )
}
