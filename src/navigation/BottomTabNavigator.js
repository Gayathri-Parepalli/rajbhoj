// TabNavigator.js
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { View, KeyboardAvoidingView, Platform } from "react-native";

import { Image } from "react-native"; // Import Image component
import Cart from "../screens/bottomTabNavScreen/Cart";
import Coupon from "../screens/bottomTabNavScreen/Coupon";
import Dashboard from "../screens/bottomTabNavScreen/Dashboard";
import Profile from "../screens/bottomTabNavScreen/Profile";
import Wallet from "../screens/bottomTabNavScreen/Wallet";
import HomeIcon from "../svg/HomeIcon";
import WalletIcon from "../svg/WalletIcon";
import CoupansIcon from "../svg/CoupansIcon";
import CartIcon from "../svg/CartIcon";
import ProfileIcon from "../svg/ProfileIcon";
import { verticalScale } from "../screens/Scaling";

const Tab = createMaterialBottomTabNavigator();

// Define the images for each tab
const homeIcon = require("../assets/Images/BottomTabImage/home.png");
const personIcon = require("../assets/Images/BottomTabImage/wallet.png");
const settingsIcon = require("../assets/Images/BottomTabImage/Group.png");
const notificationsIcon = require("../assets/Images/BottomTabImage/cart.png");
const searchIcon = require("../assets/Images/BottomTabImage/user.png");

const BottomTabNavigator = ({ navigation, route }) => {
  const tabBarVisible = getFocusedRouteNameFromRoute(route);
  console.log(tabBarVisible);
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      // activeColor="white"
      barStyle={{
        backgroundColor: "#DE7A22",
        height: 70,
        activeBackgroundColor: "#fff",
      }}
      // tabBarOptions={{
      //   activeTintColor: 'white',
      //   inactiveTintColor: 'gray',
      //   activeBackgroundColor: 'lightblue', // Set the background color of the active tab
      //
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            // <Image
            //   source={homeIcon}
            //   style={{ width: 22, height: 22, alignSelf: "center" }}
            // />
            // <View style={{size:verticalScale(50),backgroundColor:"red"}}>
            <HomeIcon
              color={
                getFocusedRouteNameFromRoute(route) === "Home" ||
                getFocusedRouteNameFromRoute(route) === undefined
                  ? "#DE7A22"
                  : "#fff"
              }
            />

            // </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Wallet}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            // <Image
            //   source={personIcon}
            //   style={{ width: 22, height: 22, alignSelf: "center" }}
            // />
            <WalletIcon
              color={
                getFocusedRouteNameFromRoute(route) === "Profile"
                  ? "#DE7A22"
                  : "#fff"
              }
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Settings"
        component={Coupon}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image source={settingsIcon} style={{ width: 22, height: 22, alignSelf: 'center' }} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Coupon"
        component={Coupon}
        options={({ navigation }) => ({
          screenProps: { navigation },
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            // <Image
            //   source={settingsIcon}
            //   style={{ width: 22, height: 22, alignSelf: "center" }}
            // />
            <CoupansIcon
              color={
                getFocusedRouteNameFromRoute(route) === "Coupon"
                  ? "#DE7A22"
                  : "#fff"
              }
            />
          ),
        })}
      />
      <Tab.Screen
        name="Notifications"
        component={Cart}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            // <Image
            //   source={notificationsIcon}
            //   style={{ width: 22, height: 22, alignSelf: "center" }}
            // />
            <CartIcon
              color={
                getFocusedRouteNameFromRoute(route) === "Notifications"
                  ? "#DE7A22"
                  : "#fff"
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            // <Image
            //   source={searchIcon}
            //   style={{ width: 22, height: 22, alignSelf: "center" }}
            // />
            <ProfileIcon
              color={
                getFocusedRouteNameFromRoute(route) === "Search"
                  ? "#DE7A22"
                  : "#fff"
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
