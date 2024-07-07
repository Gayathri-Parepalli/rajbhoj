import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import RajBhogAvatar from ".././components/RajBhogAvatar";
import { verticalScale, scale } from "../screens/Scaling";
import { globalStyles } from "../../src/styles/styles";
import { fontFamily } from "../../src/styles/fontStyles";

import HomeIcon from "../svg/HomeIcon";
import WalletIcon from "../svg/WalletIcon";
import CoupansIcon from "../svg/CoupansIcon";
import CartIcon from "../svg/CartIcon";
import ProfileIcon from "../svg/ProfileIcon";

const SideDrawer = ({ navigation }) => {
  const navigateToHome = () => {
    // Navigate to the profile screen
    navigation.navigate("Home");
  };

const navigateToPloicy=()=>{
    navigation.navigate("PolicyOfUse");
}

const navigateToCancellationPage = () => {
  navigation.navigate("CancellationPage");
};

const navigateToFAQ=()=>{
      navigation.navigate("FAQ");
}

const navigateToHealthSupport = () => {
  navigation.navigate("HealthSupport");
};

    const logOut = async () => {
      navigation.navigate("Splash");
      try {
        // await AsyncStorage.clear();
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("userId");
        await AsyncStorage.removeItem("pnr");
        await AsyncStorage.removeItem("outletId");
        await AsyncStorage.removeItem("stationCode");
        console.log("Data removed successfully!");
      } catch (error) {
        console.error("Error removing data:", error);
      }
    };

  // Add other navigation functions if needed

  return (
    <View style={[globalStyles.containerStyles]}>
      <View
        style={{
          backgroundColor: "#DE7A22",
          borderBottomLeftRadius: verticalScale(20),
          borderBottomRightRadius: verticalScale(20),
        }}
      >
        <View
          style={{
            marginTop: verticalScale(40),
            marginBottom: verticalScale(10),
            width: "100%",
            // backgroundColor: "#DE7A22",
          }}
        >
          <View style={{ alignSelf: "center" }}>
            <RajBhogAvatar
              size={scale(100)}
              source="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </View>
          <View style={{ marginTop: verticalScale(10) }}>
            <Text
              style={{
                fontSize: verticalScale(19),
                lineHeight: verticalScale(30.24),
                fontWeight: "400",
                alignSelf: "center",
                color: "white",
                fontFamily: fontFamily,
              }}
            >
              Hello
            </Text>
            <Text
              style={{
                fontFamily: fontFamily,
                fontSize: verticalScale(17),
                lineHeight: verticalScale(30.24),
                fontWeight: "300",
                alignSelf: "center",
                color: "white",
              }}
            >
              Anil Bali
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          marginTop: verticalScale(40),
          marginLeft: verticalScale(20),
        }}
      >
        <View>
          <TouchableOpacity onPress={navigateToHome}>
            <View style={{ flexDirection: "row" }}>
              {/* <HomeIcon color={"black"} /> */}
              <Image
                source={require("../assets/SideBar/home.png")}
                style={{ height: 25, width: 25 }}
              />
              <View style={{ marginLeft: scale(10) }}>
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: verticalScale(16),
                    lineHeight: verticalScale(28),
                    fontWeight: "400",
                    alignSelf: "center",
                  }}
                >
                  Home
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        {/* <View style={{ marginTop: verticalScale(20) }}>
            <TouchableOpacity>
              <View style={{ flexDirection: "row" }}>
                <WalletIcon color={"black"} />
                <View style={{ marginLeft: scale(10) }}>
                  <Text
                    style={{
                      fontFamily: fontFamily,
                      fontSize: verticalScale(16),
                      lineHeight: verticalScale(28),
                      fontWeight: "400",
                      alignSelf: "center",
                    }}
                  >
                    Wallet
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View> */}
        {/* <View style={{ marginTop: verticalScale(20) }}>
            <TouchableOpacity>
              <View style={{ flexDirection: "row" }}>
                <CoupansIcon color={"black"} />
                <View style={{ marginLeft: scale(10) }}>
                  <Text
                    style={{
                      fontFamily: fontFamily,
                      fontSize: verticalScale(16),
                      lineHeight: verticalScale(28),
                      fontWeight: "400",
                      alignSelf: "center",
                    }}
                  >
                    Coupons
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View> */}
        {/* <View style={{ marginTop: verticalScale(20) }}>
            <TouchableOpacity>
              <View style={{ flexDirection: "row" }}>
                <CartIcon color={"black"} />
                <View style={{ marginLeft: scale(10) }}>
                  <Text
                    style={{
                      fontFamily: fontFamily,
                      fontSize: verticalScale(16),
                      lineHeight: verticalScale(28),
                      fontWeight: "400",
                      alignSelf: "center",
                    }}
                  >
                    Cart
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: verticalScale(20) }}>
            <TouchableOpacity>
              <View style={{ flexDirection: "row" }}>
                <ProfileIcon color={"black"} />
                <View style={{ marginLeft: scale(10) }}>
                  <Text
                    style={{
                      fontFamily: fontFamily,
                      fontSize: verticalScale(16),
                      lineHeight: verticalScale(28),
                      fontWeight: "400",
                      alignSelf: "center",
                    }}
                  >
                    Profile
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View> */}
        <View style={{ marginTop: verticalScale(20) }}>
          <TouchableOpacity onPress={navigateToPloicy}>
            <View style={{ flexDirection: "row" }}>
              {/* <ProfileIcon color={"black"} /> */}
              <Image
                source={require("../assets/SideBar/policy.png")}
                style={{ height: 25, width: 25 }}
              />
              <View style={{ marginLeft: scale(10) }}>
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: verticalScale(16),
                    lineHeight: verticalScale(28),
                    fontWeight: "400",
                    alignSelf: "center",
                  }}
                >
                  Policy
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: verticalScale(20) }}>
          <TouchableOpacity onPress={navigateToCancellationPage}>
            <View style={{ flexDirection: "row" }}>
              {/* <ProfileIcon color={"black"} /> */}
              <Image
                source={require("../assets/SideBar/cancellationPolicy.png")}
                style={{ height: 25, width: 25 }}
              />
              <View style={{ marginLeft: scale(10) }}>
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: verticalScale(16),
                    lineHeight: verticalScale(28),
                    fontWeight: "400",
                    alignSelf: "center",
                  }}
                >
                  Cancellation policy
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: verticalScale(20) }}>
          <TouchableOpacity onPress={navigateToFAQ}>
            <View style={{ flexDirection: "row" }}>
              {/* <ProfileIcon color={"black"} /> */}
              <Image
                source={require("../assets/SideBar/faq.png")}
                style={{
                  height: 25,
                  width: 25,
                  borderWidth: 5,
                  tintColor: "bold",
                  //   borderColor:"black"
                }}
              />
              <View style={{ marginLeft: scale(10) }}>
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: verticalScale(16),
                    lineHeight: verticalScale(28),
                    fontWeight: "400",
                    alignSelf: "center",
                  }}
                >
                  FAQs
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: verticalScale(20) }}>
          <TouchableOpacity onPress={navigateToHealthSupport}>
            <View style={{ flexDirection: "row" }}>
              {/* <ProfileIcon color={"black"} /> */}
              <Image
                source={require("../assets/SideBar/help.png")}
                style={{ height: 25, width: 25 }}
              />
              <View style={{ marginLeft: scale(10) }}>
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: verticalScale(16),
                    lineHeight: verticalScale(28),
                    fontWeight: "400",
                    alignSelf: "center",
                  }}
                >
                  Help and Support
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: verticalScale(20) }}>
          <TouchableOpacity onPress={logOut}>
            <View style={{ flexDirection: "row" }}>
              {/* <ProfileIcon color={"black"} /> */}
              <Image
                source={require("../assets/SideBar/logout.png")}
                style={{ height: 22, width: 22 }}
              />
              <View style={{ marginLeft: scale(10) }}>
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: verticalScale(16),
                    lineHeight: verticalScale(28),
                    fontWeight: "400",
                    alignSelf: "center",
                  }}
                >
                  Logout
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default SideDrawer;
