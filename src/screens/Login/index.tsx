import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
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

  const { setSignedIn, setToken, setUserMoney } = useContext(AppContext);

  async function Auth() {
    const response = await axios.post(
      `https://study-api-deno.herokuapp.com/login`,
      {
        email: user.toLowerCase(),
        password: password,
      }
    );

    const responseGet = await axios.get(
      `https://study-api-deno.herokuapp.com/auth/user`,
      {
        headers: {
          Authorization: response.data.data.token,
        },
      }
    );

    console.log(response);

    if (response.data.status === "success") {
      setToken(response.data.data.token);
      setError(false);
      setSignedIn(true);
      setUserMoney(responseGet.data.data.user.balance);
      responseGet.data.data.user.first_access
        ? navigation.navigate("HowToQuests")
        : navigation.navigate("Home");
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
          <Button title="Login" type="button" size="lg" onPress={Auth} />
        </ButtonContainer>
        <ForgetPasswordContainer>
          <Button title="Esqueceu Senha" type="text" />
        </ForgetPasswordContainer>
      </LoginContainer>
    </Container>
  );
}
