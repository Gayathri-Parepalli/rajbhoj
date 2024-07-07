// TabNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../screens/Onboarding";
import Login from "../screens/authScreen/Login";
import OTP from "../screens/authScreen/OTP";
import SignUp from "../screens/authScreen/Signup";
import BottomTabNavigator from "./BottomTabNavigator";
import RajBhogTopBar from "../components/RajBhogTopBar";
import LoginSuccess from "../screens/authScreen/LoginSuccess";
import LoginFailure from "../screens/authScreen/LoginFailure";
import PolicyOfUse from "../screens/profileScreen/PolicyOfUse";


const Stack = createStackNavigator();

const AuthScreenNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Login">
      {/* <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        initialParams={{ screenIndex: 1, totalScreens: 4 }}
        options={{ title: "Onboarding", headerShown: false }}
      /> */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login", headerShown: false }}
      />
      <Stack.Screen
        name="Otp"
        component={OTP}
        options={{ title: "Otp", headerShown: false }}
      />
      <Stack.Screen
        name="LoginSuccess"
        component={LoginSuccess}
        options={{ title: "LoginSuccess", headerShown: false }}
      />
      <Stack.Screen
        name="LoginFailure"
        component={LoginFailure}
        options={{ title: "LoginFailure", headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "SignUp", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthScreenNavigation;
