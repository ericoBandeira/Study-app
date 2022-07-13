import React from "react";
import { Container, Logo } from "./styles";

export function Loading() {
  return (
    <Container>
      <Logo source={require("../../global/imgs/logo.png")} />
    </Container>
  );
}
