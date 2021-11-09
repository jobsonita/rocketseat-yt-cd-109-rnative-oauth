import React from "react";
import { View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Button } from "../../components/Button";
import { SignInContent } from "../../components/SignInContent";

import { RootStackParamList } from "../../routes";

import { styles } from "./styles";

type AuthResponse = {
  type: string;
  params: {
    access_token: string;
  };
};

type ProfileScreenProp = StackNavigationProp<RootStackParamList, "Profile">;

export function SignIn() {
  const navigation = useNavigation<ProfileScreenProp>();

  async function handleSignIn() {
    navigation.navigate("Profile");
  }

  return (
    <View style={styles.container}>
      <SignInContent />

      <Button
        title="Entrar com Google"
        icon="social-google"
        onPress={handleSignIn}
      />
    </View>
  );
}
