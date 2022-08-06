import React, { useContext } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { AppContext } from "../../context/contextapi";
import {
  Container,
  Logo,
  UserButton,
  UserIcon,
  GraphIcon,
  MoneyView,
  Amount,
  MoneyIcon,
} from "./styles";

export function Header({ navigation }: any) {
  const { userMoney } = useContext(AppContext);

  return (
    <Container>
      <Logo source={require("../../global/imgs/logo-sm.png")} />
      <UserButton onPress={() => navigation.navigate("DashboardPage")}>
        <UserIcon name="user" size={RFValue(28)} />
      </UserButton>
      <GraphIcon name="bar-graph" size={RFValue(28)} color="#85C88A" />
      <MoneyView>
        <Amount>{userMoney}</Amount>
        <MoneyIcon name="coins" size={RFValue(28)} color="#FFD54F" />
      </MoneyView>
    </Container>
  );
}
