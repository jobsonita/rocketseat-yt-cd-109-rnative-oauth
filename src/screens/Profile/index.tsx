import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { Feather } from "@expo/vector-icons";

import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { ProfileHeader } from "../../components/ProfileHeader";

import { RootStackParamList } from "../../routes";

import { theme } from "../../styles/theme";

import { styles } from "./styles";

type Params = {
  token: string;
};

type SignInScreenProp = StackNavigationProp<RootStackParamList, "SignIn">;

type Profile = {
  email: string;
  name: string;
  given_name: string;
  family_name: string;
  locale: string;
  picture: string;
};

export function Profile() {
  const [profile, setProfile] = useState({} as Profile);

  const route = useRoute();
  const { token } = route.params as Params;

  const navigation = useNavigation<SignInScreenProp>();

  async function handleLogout() {
    navigation.navigate("SignIn");
  }

  async function loadProfile() {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`
    );

    const userInfo = await response.json();

    setProfile(userInfo);
  }

  useEffect(() => {
    loadProfile();
  }, [token]);

  return (
    <View style={styles.container}>
      <ProfileHeader />

      <View style={styles.content}>
        <View style={styles.profile}>
          <Avatar
            source={{
              uri:
                profile.picture ||
                `https://ui-avatars.com/api/?name=${encodeURI(profile.name)}`,
            }}
          />

          <Text style={styles.name}>{profile.name}</Text>

          <View style={styles.email}>
            <Feather name="mail" color={theme.colors.secondary} size={18} />
            <Text style={styles.emailText}>{profile.email}</Text>
          </View>
        </View>

        <View style={styles.about}>
          <View style={styles.info}>
            <Feather name="user" size={34} color={theme.colors.note} />
            <Text style={styles.label}>Nome</Text>
            <Text style={styles.text}>{profile.given_name}</Text>
          </View>

          <View style={styles.info}>
            <Feather name="heart" size={34} color={theme.colors.note} />
            <Text style={styles.label}>Sobrenome</Text>
            <Text style={styles.text}>{profile.family_name}</Text>
          </View>
        </View>

        <View style={styles.locale}>
          <Feather name="map-pin" size={18} color={theme.colors.note} />

          <Text style={styles.localeText}>
            Localidade do perfil do usuário: {profile.locale}
          </Text>
        </View>

        <Button title="Desconectar" icon="power" onPress={handleLogout} />
      </View>
    </View>
  );
}
