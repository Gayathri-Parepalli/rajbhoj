// Routes.js
import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
//componets
import RajBhogTopBar from "../../components/RajBhogTopBar";
import Profile from "../profileScreen/Index";
import EditProfile from "../profileScreen/EditProfile";
import HealthSupport from "../profileScreen/HealthSupport";
import SendFeedback from "../profileScreen/SendFeedback";
import OrderHistory from "../profileScreen/OrderHistory";
import TrackOrder from "../profileScreen/TrackOrder";
import OrderDetailScreen from "../profileScreen/OrderDetailScreen";
//styles
import { globalStyles } from "../../styles/styles";
import { verticalScale } from "../Scaling";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <View style={[globalStyles.containerStyles, { gap: verticalScale(10) }]}>
      {/* <RajBhogTopBar title={"Profile"} /> */}

      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen
          name="Profile"
          component={Profile}
          // options={{ title: "Profile", headerShown: false }}
          options={({ navigation }) => ({
            screenProps: { navigation },
            title: "Profile",
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ title: "EditProfile", headerShown: false }}
        />
        {/* <Stack.Screen
          name="HealthSupport"
          component={HealthSupport}
          options={{ title: "HealthSupport", headerShown: false }}
        /> */}
        <Stack.Screen
          name="SendFeedback"
          component={SendFeedback}
          options={{ title: "SendFeedback", headerShown: false }}
        />
        <Stack.Screen
          name="OrderHistory"
          component={OrderHistory}
          options={{ title: "OrderHistory", headerShown: false }}
        />
        <Stack.Screen
          name="TrackOrder"
          component={TrackOrder}
          options={{ title: "TrackOrder", headerShown: false }}
        />
        <Stack.Screen
          name="OrderDetailScreen"
          component={OrderDetailScreen}
          options={{ title: "OrderDetailScreen", headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default Routes;
