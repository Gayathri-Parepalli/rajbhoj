// // SplashScreen.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { scale, verticalScale } from "./Scaling";
import { fontFamily } from "../styles/fontStyles";

const SplashScreen = ({ navigation }) => {
  // useEffect(() => {
  //   const checkOnboardingStatus = async () => {
  //     try {
  //       const onboardingCompleted = await AsyncStorage.getItem('onboardingCompleted');

  //       if (onboardingCompleted) {
  //         // Onboarding has been completed, navigate to the login screen
  //         navigation.replace('Login');
  //       } else {
  //         // Onboarding has not been completed, navigate to the onboarding screen
  //         navigation.replace('Onboarding');
  //       }
  //     } catch (error) {
  //       console.error('Error checking onboarding status:', error);
  //       // Navigate to the login screen in case of an error
  //       navigation.replace('Login');
  //     }
  //   };

  //   checkOnboardingStatus();
  // }, [navigation]);
  const checkToken = async () => {
    try {
      const storedToken = await AsyncStorage.getItem("token");
      const onboarding = await AsyncStorage.getItem("onboarding");
      if (onboarding) {
        if (storedToken) {
          // navigation.navigate("Dashboard");
          navigation.reset({
            index: 0,
            routes: [{ name: "AppNavigator" }],
          });
        } else {
          // navigation.reset({
          //   index: 0,
          //   routes: [{ name: "AuthScreenNavigation" }],
          // });
          navigation.replace("AuthScreenNavigation");
        }
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: "onBoardingNavigation" }],
        });
      }
    } catch (error) {
      console.error("Error checking token:", error);
    }
  };

  useEffect(() => {
    console.log("rendered");
    checkToken();
  }, []);
  // useEffect(()=>{
  //   if(user){
  //     console.log("user")
  //     navigation.navigate("Dashboard")
  //   }else{
  // console.log("else",user)
  //     navigation.navigate("AuthScreenNavigation")
  //   }
  // },[user])
  // console.log(user)
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="light-content"
      />
      <View>
        <Image
          source={require("../assets/Images/pentagon.png")}
          style={styles.firstImage}
        />
        <Image
          source={require("../assets/Images/appIcon.png")}
          style={styles.secondImage}
        />
      </View>
      {/* <View style={styles.imageTextContainer}>
        <Text style={styles.text}> Authorised IRCTC</Text>
        <Image
          source={require("../assets/Images/irctcLogo.jpg")}
          style={styles.iconImage}
        />
        <Text style={styles.text}>Partner</Text>
      </View> */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          // justifyContent: "center",
          // gap: verticalScale(4),
          marginTop: verticalScale(40),
        }}
      >
        <Text style={styles.text}>Most Trusted Partner Of IRCTC</Text>
        <View
          style={
            {
              // borderWidth: 2,
              // borderColor: colors.buttonColor,
              // borderRadius: scale(52),
            }
          }
        >
          <Image
            source={require("../assets/Images/irctcSplahScreen.png")}
            style={{
              width: scale(40),
              height: scale(40),
              resizeMode: "contain",
              // marginTop:verticalScale(10)
            }}
          />
        </View>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DE7A22",
  },
  firstImage: {
    width: 306,
    height: 350,
  },
  secondImage: {
    width: 306,
    height: 370,
    position: "absolute",
    // top: 2,
    // left: 8,
  },
  imageTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    height: 64,
  },
  iconImage: {
    width: 54,
    height: 54,
    marginRight: 10,
    marginLeft: 10,
  },
  text: {
    color: "black",
    fontSize: scale(17),
    fontWeight: "700",
    fontFamily: fontFamily,
    lineHeight: verticalScale(30),
  },
});

export default SplashScreen;
