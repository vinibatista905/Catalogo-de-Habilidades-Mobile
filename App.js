import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts, WorkSans_400Regular, WorkSans_700Bold } from "@expo-google-fonts/work-sans";
import Routes from "./src/routes";
import { AuthProvider } from "./src/contexts/auth";

export default function App() {
  
  const [loadedFont] = useFonts({
    "RegularFont": WorkSans_400Regular,
    "BoldFont": WorkSans_700Bold
  });

  if(!loadedFont){
    return <View />
  }

  return (
    <NavigationContainer>
    <AuthProvider> 
      <Routes />
      <StatusBar style="auto" />
    </AuthProvider>
    </NavigationContainer>
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
