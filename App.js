import "react-native-gesture-handler";
// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Routes from "./src/navigation/Index";
import { enableScreens } from "react-native-screens";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
//redux
import { Provider } from "react-redux";
import store from "./src/redux/store";
import RajhogGradiant from "./src/components/RajBhogGradiant";

enableScreens();
const App = () => {
  const [statusBarStyle, setStatusBarStyle] = useState("dark-content");
  return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: "#DE7A22" }}>
    //   <StatusBar backgroundColor="black" barStyle="light-content" />
      <Provider store={store}>
        <Routes />
      </Provider>
    // </SafeAreaView>
  );
};

export default App;
