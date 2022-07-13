import React, { useContext } from "react";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { AppContext } from "../../context/contextapi";
import {
  Container,
  Logo,
  LoginContainer,
  Title,
  ButtonContainer,
  ForgetPasswordContainer,
  Error,
} from "./styles";

export function Login({ navigation }: any) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const { setSignedIn, signedIn } = useContext(AppContext);

  function fakeAuth() {
    if (user === "rafaelteodosio@aluno.com" && password === "123456") {
      setError(false);
      setSignedIn(true);
      navigation.navigate("HowToQuests");
    } else {
      setError(true);
    }
  }

  return (
    <Container>
      <Logo source={require("../../global/imgs/logo.png")} />
      <LoginContainer>
        <Title>Login</Title>
        <Input title="E-mail" onChangeText={setUser} />
        <Input title="Senha" password={true} onChangeText={setPassword} />
        {error && <Error>Login ou senha incorreta</Error>}
        <ButtonContainer>
          <Button
            title="Criar Conta"
            type="text"
            onPress={() => navigation.navigate("Cadastrar")}
          />
          <Button title="Login" type="button" size="lg" onPress={fakeAuth} />
        </ButtonContainer>
        <ForgetPasswordContainer>
          <Button title="Esqueceu Senha" type="text" />
        </ForgetPasswordContainer>
      </LoginContainer>
    </Container>
  );
}
