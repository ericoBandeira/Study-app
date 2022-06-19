import React from 'react';
import { Text } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container, Logo, LoginContainer, Title, ButtonContainer, ForgetPasswordContainer} from './styles';

export function Login() {
    return (
        <Container>
            <Logo source={require('../../global/imgs/logo.png')}/>
            <LoginContainer>
                <Title>
                    Login
                </Title>
                <Input title="E-mail" />
                <Input title="Senha" password={true}/>
                <ButtonContainer>
                    <Button title="Criar Conta" type="text"/>
                    <Button title="Login" type="button" size="lg"/>
                </ButtonContainer>
                <ForgetPasswordContainer>
                    <Button title="Esqueceu Senha" type="text" />
                </ForgetPasswordContainer>
            </LoginContainer>
        </Container>
    )
}
