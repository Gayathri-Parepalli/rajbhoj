// Routes.js
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/Splash";
import OnboardingScreen from "../screens/Onboarding";
import Login from "../screens/authScreen/Login";
import OTP from "../screens/authScreen/OTP";
import SignUp from "../screens/authScreen/Signup";
import BottomTabNavigator from "./BottomTabNavigator";
import RajBhogTopBar from "../components/RajBhogTopBar";
import LoginSuccess from "../screens/authScreen/LoginSuccess";
import LoginFailure from "../screens/authScreen/LoginFailure";
import AppNavigator from "../screens/../navigation/DrawerContent"

import AuthScreenNavigation from "./AuthScreenNavigation";
// import BulkOrderForm from "../screens/bulkorders/BulkOrderForm"
const Stack = createStackNavigator();

const Routes = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  console.log(user);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ title: "SplashScreen", headerShown: false }}
        />
        <Stack.Screen
          name="onBoardingNavigation"
          component={OnBoardingNavigation}
          options={{ title: "SplashScreen", headerShown: false }}
        />
        <Stack.Screen
          name="AuthScreenNavigation"
          component={AuthScreenNavigation}
          options={{ title: "AuthScreenNavigation", headerShown: false }}
        />
        <Stack.Screen
          name="AppNavigator"
          component={AppNavigator}
          options={{ title: "AppNavigator", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const OnBoardingNavigation=()=>{
  return (
    <Stack.Navigator initialRouteName="Onboarding">         
    <Stack.Screen
    name="Onboarding"
    component={OnboardingScreen}
    initialParams={{ screenIndex: 1, totalScreens: 4 }}
    options={{ title: "Onboarding", headerShown: false }}
  /> 
  </Stack.Navigator>
  )
}