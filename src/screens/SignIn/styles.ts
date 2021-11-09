import { StyleSheet } from "react-native";

import { getBottomSpace } from "react-native-iphone-x-helper";

import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: theme.colors.background,
    paddingHorizontal: 24,
    paddingVertical: getBottomSpace() + 20,
  },
});
