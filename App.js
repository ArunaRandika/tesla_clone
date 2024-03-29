import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View,ImageBackground} from "react-native";
import CarsList from "./assets/components/carslist/carslist";
import Header from "./assets/components/header/index";

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
  <CarsList/>


      <StatusBar style="auto" />
    </View>
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
