import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { verticalScale,scale } from "../screens/Scaling";

export const globalStyles = StyleSheet.create({
  containerStyles: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    width: "100%",
  },
  loginPaddingView: {
    marginTop: verticalScale(40),
    alignItems: "center",
    marginHorizontal: verticalScale(15),
  },
  loginContentStyles: {
    width: "100%",
    gap: verticalScale(10),
  },
  successPaddingView: {
    marginTop: verticalScale(200),
    alignItems: "center",
  },
  dashboardContentStyle: {
    width: "100%",
    paddingHorizontal: 16,
    gap: verticalScale(10),
  },
  groupButton: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.buttonColor,
    // width: "100%",
    height: verticalScale(49),
    borderRadius: scale(27.5),
    alignItems: "center",
    justifyContent: "center",
  },
  servicesContainer:{
    justifyContent:"center",
    width:"100%",
    alignItems:"center"
  }
});
