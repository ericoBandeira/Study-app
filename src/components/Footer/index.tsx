import React, { useContext } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { AppContext } from "../../context/contextapi";
import { Container, UserButton, CardIcon, DolarIcon } from "./styles";

export function Footer({ navigation }: any) {
  const { token } = useContext(AppContext);
  return (
    <Container>
      <UserButton onPress={() => navigation.navigate("Home")}>
        <CardIcon name="home-outline" size={RFValue(28)} />
      </UserButton>
      <UserButton onPress={() => navigation.navigate("QuestsPage")}>
        <CardIcon name="md-school-outline" size={RFValue(28)} />
      </UserButton>
      <UserButton onPress={() => navigation.navigate("InvestmentPage")}>
        <CardIcon name="ios-wallet-outline" size={RFValue(28)} />
      </UserButton>
      <UserButton>
        <DolarIcon name="dollar-sign" size={RFValue(28)} />
      </UserButton>
      <UserButton>
        <CardIcon name="notifications-outline" size={RFValue(28)} />
      </UserButton>
    </Container>
  );
}
