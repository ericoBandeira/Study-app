import axios from "axios";
import React from "react";
import { useState } from "react";
import { Alert, Text } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import {
  Container,
  Logo,
  Title,
  ButtonContainer,
  RegisterContainer,
  Error,
} from "./styles";

export function Register({ navigation }: any) {
  const [emailUser, setEmailUser] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  async function registerFunction() {
    if (
      emailUser !== "" ||
      user !== "" ||
      password !== "" ||
      password !== confirmPassword
    ) {
      await axios
        .post(`https://study-api-deno.herokuapp.com/signup`, {
          nickname: user,
          email: emailUser.toLowerCase(),
          password: password,
        })
        .then(() =>
          Alert.alert("Sucesso!", "sua conta foi cadastrada com sucesso :)")
        )
        .catch(() => Alert.alert("Erro!", "Erro ao cadastrar"));
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  }

  return (
    <Container>
      <Logo source={require("../../global/imgs/logo.png")} />
      <RegisterContainer>
        <Title>Cadastro</Title>
        <Input title="E-mail" onChangeText={setEmailUser} />
        <Input title="Username" onChangeText={setUser} />
        <Input title="Senha" password={true} onChangeText={setPassword} />
        <Input
          title="Confirmar Senha"
          password={true}
          onChangeText={setConfirmPassword}
        />
        {error && <Error>Algo deu errado, tente novamente</Error>}
        <ButtonContainer>
          <Button
            title="Voltar"
            type="text"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            title="Cadastrar"
            type="button"
            size="lg"
            onPress={registerFunction}
          />
        </ButtonContainer>
      </RegisterContainer>
    </Container>
  );
}
