import React from "react";
import { View } from "react-native";
import "react-native-gesture-handler";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

import { Routes } from "./src/routes";
import { theme } from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Routes />
    </View>
  );
}
