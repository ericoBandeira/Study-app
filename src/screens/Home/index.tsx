import React, { useState } from 'react';
import { Input } from '../../components/Input';
import { Container} from './styles';

export function Home() {
    const [test, setTest] = useState('')
    return (
        <Container>
            <Input title="E-mail" onChangeText={setTest} />
        </Container>
    )
}
