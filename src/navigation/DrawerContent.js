// AppNavigator.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import SideDrawer from "../screens/SideDrawer";
import PolicyOfUse from "../screens/profileScreen/PolicyOfUse";
import CancellationPage from "../screens/profileScreen/CancellationPage";
import FAQ from "../screens/profileScreen/Faq";
import HealthSupport from "../screens/profileScreen/HealthSupport";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="SideBar"
      drawerContent={(props) => <SideDrawer {...props} />}
      drawerType="slide"
    >
      <Drawer.Screen
        name="SideBar"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="PolicyOfUse"
        component={PolicyOfUse}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="CancellationPage"
        component={CancellationPage}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="FAQ"
        component={FAQ}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="HealthSupport"
        component={HealthSupport}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;