import React from "react";
import { Text } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import {
  Container,
  Logo,
  Title,
  ButtonContainer,
  RegisterContainer,
} from "./styles";

export function Register() {
  return (
    <Container>
      <Logo source={require("../../global/imgs/logo.png")} />
      <RegisterContainer>
        <Title>Cadastro</Title>
        <Input title="E-mail" />
        <Input title="Username" />
        <Input title="Senha" password={true} />
        <Input title="Confirmar Senha" password={true} />
        <ButtonContainer>
          <Button title="Cadastrar" type="button" size="lg" />
        </ButtonContainer>
      </RegisterContainer>
    </Container>
  );
}
