// import React from "react";
// import { View, Text, Button, Image } from "react-native";

// // Define image sources for each screen
// const imageSources = [
//   require("../assets/Images/welcomeImage/FirstImage.png"),
//   require("../assets/Images/welcomeImage/SecoundImage.png"),
//   require("../assets/Images/welcomeImage/ThirdImage.png"),
//   require("../assets/Images/welcomeImage/FourthImage.png"),
// ];

// const OnboardingScreen = ({ navigation, route }) => {
//   const { screenIndex, totalScreens } = route.params;

//   const handleContinue = () => {
//     if (screenIndex < totalScreens) {
//       // Navigate to the next onboarding screen
//       navigation.replace("Onboarding", {
//         screenIndex: screenIndex + 1,
//         totalScreens,
//       });
//     } else {
//       // Navigate to the login screen or any other screen you prefer
//       navigation.replace("Login");
//     }
//   };

//   const handleSkip = () => {
//     // Navigate to the login screen when the user chooses to skip onboarding
//     navigation.replace("Login");
//   };

//   // Get the image source for the current screen
//   const currentImageSource = imageSources[screenIndex - 1]; // Adjust the index since it starts from 1

//   return (
//     <View style={{ flex: 1, justifyContent: "space-between" }}>
//       {/* Top Section: Logo */}
//       <View style={{ alignItems: "center", paddingTop:26 }}>
//         <Image
//           source={require("../assets/Images/appIcon.png")}
//           style={{ width: 70, height:73, resizeMode: "contain" }}
//         />
//       </View>

//       {/* Middle Section: Image and Text */}
//       <View style={{ alignItems: "center" }}>
//         {/* Display the image for the current screen */}
//         <Image
//           source={currentImageSource}
//           style={{ width: 255, height: 239, resizeMode: "cover" }}
//         />

//         {/* Text to describe the image */}
//         <Text style={{ marginVertical: 10 }}>
//           Onboarding Screen {screenIndex} Description
//         </Text>
//       </View>

//       {/* Bottom Section: Footer Text and Continue/Skip buttons */}
//       <View style={{ alignItems: "center", paddingBottom: 20 }}>
//         {/* Footer Text */}
//         <Text>Footer Text</Text>

//         {/* Continue and Skip buttons */}
//         <View style={{ flexDirection: "row", marginTop: 10 }}>
//           <Button title="Continue" onPress={handleContinue} />

//           {/* Show the "Skip" button for all screens except the last one */}
//           {screenIndex !== totalScreens && (
//             <Button title="Skip" onPress={handleSkip} />
//           )}
//         </View>
//       </View>
//     </View>
//   );
// };

// export default OnboardingScreen;


import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { scale, verticalScale } from "../screens/Scaling";
import { globalStyles } from "../styles/styles";
import { fontFamily } from "../styles/fontStyles";
import { colors } from "../styles/colors";

const data = [
  {
    headerImage: require("../assets/Images/appIcon.png"),
    title: "Order delicious food",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.",
    image: require("../assets/Images/welcomeImage/FirstImage.png"),
    // bg: "#59b2ab",
  },
  {
    headerImage: require("../assets/Images/appIcon.png"),
    title: "Get food in train",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.",
    image: require("../assets/Images/welcomeImage/SecoundImage.png"),
    // bg: "#febe29",
  },
  {
    headerImage: require("../assets/Images/appIcon.png"),
    title: "Eat variety",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.",
    image: require("../assets/Images/welcomeImage/ThirdImage.png"),
    // bg: "#22bcb5",
  },
  {
    headerImage: require("../assets/Images/appIcon.png"),
    title: "Jain food in train",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.",
    image: require("../assets/Images/welcomeImage/FourthImage.png"),
    // bg: "#22bcb5",
  },
];

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    margin: 0,
    padding: 0,
  },
  image: {
    width: scale(255),
    height: scale(239),
  },
  headerImage: {
    width: scale(70),
    height: scale(73),
  },
  text: {
    fontSize: scale(16),
    color: "black",
    textAlign: "center",
    fontWeight: "400",
    fontFamily: fontFamily,
  },
  title: {
    fontSize: scale(24),
    color: "black",
    textAlign: "center",
    fontWeight: "700",
    fontFamily: fontFamily,
  },
  button: {
    width: scale(156),
    height: scale(40),
    borderRadius: 16,
    backgroundColor: "#DE7A22",
    justifyContent: "center",
    alignItems: "center",
  },
  ContinueText: {
    fontSize: scale(16),
  },
  dot: {
    backgroundColor: "#DE7A2280",
    justifyContent: "center",
    alignItems: "center",
  },
  activeDot: {
    backgroundColor: "#DE7A22",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyles: {
    fontFamily: fontFamily,
    fontSize: verticalScale(14),
    fontWeigth: "600",
    lineHeight: verticalScale(20.16),
  },
});

class OnboardingScreen extends React.Component {
  _renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}
      >
        <View style={globalStyles.containerStyles}>
          <View style={globalStyles.loginPaddingView}>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ marginTop: verticalScale(5) }}>
                <Image source={item.headerImage} style={styles.headerImage} />
              </View>
              <View style={{ marginVertical: verticalScale(20) }}>
                <Image source={item.image} style={styles.image} />
              </View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.text}</Text>
              {/* <View style={{ marginTop: verticalScale(10) }}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.ContinueText}>Continue</Text>
                </TouchableOpacity>
              </View> */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: verticalScale(8),
                }}
              >
                <Text style={[styles.textStyles,{fontSize:verticalScale(16),fontWeight:"500"}]}>
                  Most Trusted Partner Of IRCTC
                </Text>
                <View
                  style={{
                    // borderWidth: 2,
                    // borderColor: colors.buttonColor,
                    // borderRadius: scale(52),
                  }}
                >
                  <Image
                    source={require("../assets/Images/irctcLogo.jpg")}
                    style={{
                      width: scale(40),
                      height: scale(40),
                      // resizeMode: "contain",
                      // marginTop:verticalScale(10)
                    }}
                  />
                </View>
                {/* <Text style={styles.textStyles}>Partner</Text> */}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  _keyExtractor = (item) => item.title;

  _onDone = async () => {
   this.props.navigation.reset({
      index: 0,
      routes: [{ name: 'AuthScreenNavigation' }],
    });
    console.log("Done button");
    await AsyncStorage.setItem("onboarding", "done");
  };

  _onSkip = async() => {
    console.log("Skip button");
    navigation.reset({
      index: 0,
      routes: [{ name: 'AuthScreenNavigation' }],
    });
    await AsyncStorage.setItem("onboarding", "done");
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar />
        <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          data={data}
          onDone={this._onDone}
          onSkip={this._onSkip}
          showSkipButton={true}
          showDoneButton={true}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
          renderSkipButton={() => (
            <View style={{ justifyContent: "flex-start" }}>
              <TouchableOpacity onPress={this._onSkip}>
                <Text
                  style={{
                    color: "#DE7A22",
                    fontSize: scale(16),
                    fontWeight: "400",
                    fontFamily: fontFamily,
                  }}
                >
                  Skip
                </Text>
              </TouchableOpacity>
            </View>
          )}
          renderNextButton={() => (
            <View style={{ justifyContent: "flex-end" }}>
              <Text
                style={{
                  color: "#DE7A22",
                  fontSize: scale(16),
                  fontWeight: "400",
                  fontFamily: fontFamily,
                }}
              >
                Continue
              </Text>
            </View>
          )}
          renderDoneButton={() => (
            <View style={{ justifyContent: "flex-end" }}>
              <Text style={{ color: "#DE7A22", fontSize: 16 }}>Done</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default OnboardingScreen;
