import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
//scale
import { verticalScale, scale } from "../screens/Scaling";
import RajBhogAvatar from "./RajBhogAvatar";
import { fontFamily } from "../styles/fontStyles";

const RajBhogTopBar = ({title}) => {
  return (
    <View
      style={{
        width: "100%",
        height: verticalScale(66),
        flexDirection: "row",
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor:"black"
      }}
    >
      <Image
        source={require("../assets/Images/appIcon.png")}
        style={{
          width: scale(46.28),
          height: scale(47.81),
          resizeMode: "contain",
        }}
      />
      <View>
        {title ? (
          <Text style={[styles.textStyles,{fontSize:verticalScale(18),fontWeight:"600"}]}>{title}</Text>

        ) : (
          <>
            <Text style={styles.textStyles}>Order delicious food</Text>
            <Text style={styles.textStyles}>With Rajbhog Khana</Text>
          </>
        )}
      </View>
      <RajBhogAvatar
        size={scale(55)}
        source="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
    </View>
  );
};

export default RajBhogTopBar;
const styles = StyleSheet.create({
  inputStyles: {
    height: 50,
  },
  textStyles: {
    fontFamily: fontFamily,
    fontSize: verticalScale(14),
    fontWeigth: "400",
    lineHeight: verticalScale(20.16),
  },
});
