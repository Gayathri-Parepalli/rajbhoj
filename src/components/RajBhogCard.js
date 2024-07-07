import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RajBhogCard = ({ children, styles, shadow }) => {
  return (
    <View
      style={{
        width: "100%",
        // height: 100,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        // Shadow properties for iOS
        shadowColor: shadow && "#000",
        shadowOffset: { width: shadow && 0, height: shadow && 2 },
        shadowOpacity: shadow && 0.3,
        shadowRadius: shadow && 4,

        // Elevation for Android
        elevation: shadow && 5,
        ...styles,
      }}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    // marginTop:marginTop,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,

    // Shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    // Elevation for Android
    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RajBhogCard;
