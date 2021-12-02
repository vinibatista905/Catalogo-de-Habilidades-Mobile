import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Routes from "./src/routes";

import {
  useFonts,
  WorkSans_400Regular,
  WorkSans_700Bold,
  WorkSans_800ExtraBold,
} from "@expo-google-fonts/work-sans";
import { AuthProvider } from "./src/contexts/auth";

export default function App() {
  const [loadedFont] = useFonts({
    RegularFont: WorkSans_400Regular,
    BoldFont: WorkSans_700Bold,
    ExtraBold: WorkSans_800ExtraBold,
  });

  if (!loadedFont) {
    return <View />;
    console.log(loadedFont);
  }

  return (
    <AuthProvider>
      <Routes />
      <StatusBar style="auto" />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
