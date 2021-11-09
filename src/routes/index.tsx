import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Profile } from "../screens/Profile";
import { SignIn } from "../screens/SignIn";

import { theme } from "../styles/theme";

export type RootStackParamList = {
  Profile: { token?: string };
  SignIn: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="SignIn"
      >
        <Screen name="SignIn" component={SignIn} />
        <Screen name="Profile" component={Profile} />
      </Navigator>
    </NavigationContainer>
  );
}
