import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import {
  Border,
  Padding,
  Color,
  FontFamily,
  FontSize,
} from "../profileScreen/Style";
import { globalStyles } from "../../styles/styles";
import { verticalScale, scale } from "../Scaling";
import RajBhogTopBar from "../../components/RajBhogTopBar";
import { fontFamily } from "../../styles/fontStyles";
import { Platform } from "react-native";

const OrderDetailScreen = () => {
  return (
    // <View style={styles.orderDetails}>
    <View style={[globalStyles.containerStyles, { gap: verticalScale(10) }]}>
      {/* <RajBhogTopBar /> */}
      <RajBhogTopBar title={"Order Details"} />
      <View
        style={{
          marginLeft: scale(11),
          marginRight: scale(11),
          marginTop: verticalScale(5),
          backgroundColor: "red",
        }}
      >
        <View>
          <View>
            <Text
              style={{
                fontSize: scale(20),
                fontWeight: "600",
                fontFamily: fontFamily,
                lineHeight: scale(25),
              }}
            >
              Order Details:
            </Text>
          </View>
          <View style={[styles.groupItemLayout]}>
            <View
              style={{
                width: "100%",
                height: "auto",
                flexDirection: "row",
                padding: 15,
                borderRadius: 16,
                shadowColor: "rgba(0, 0, 0, 0.25)",
                shadowOffset: {
                  width: 5,
                  height: 5,
                },
                shadowRadius: 4,
                elevation: 4,
                shadowOpacity: 1,
                backgroundColor: Color.colorWhite,
              }}
            >
              <View
                style={{
                  backgroundColor: "blue",
                  borderRadius: 5,
                  width: "40%",
                }}
              >
                <Image
                  style={[styles.image80Layout]}
                  resizeMode="cover"
                  source={require("../../assets/Images/welcomeImage/FourthImage.png")}
                />

                <View style={[styles.wrapper, styles.parentFlexBox]}>
                  <Text style={[styles.text, styles.textTypo]}>₹ 299</Text>
                </View>
              </View>
              <View style={styles.frameGroup}>
                {/* <Text style={[styles.paneerHawaiian, styles.callTypo]}> */}
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: scale(14),
                    fontWeight: "600",
                    lineHeight: 18,
                  }}
                >
                  Paneer Hawaiian
                </Text>
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: scale(10),
                    fontWeight: "400",
                    lineHeight: 12,
                    color: "#5B5B5E",
                    marginTop: scale(2),
                  }}
                >
                  ASR NDLS EXP - Kanpur Jn.
                </Text>

                <Text style={{}}>
                  <Text
                    style={[
                      styles.textTypo,
                      { color: "#5B5B5E", fontSize: scale(11) },
                    ]}
                  >
                    27th October 2023
                  </Text>
                  <Text style={styles.with}>{` at `}</Text>
                  <Text
                    style={[
                      styles.textTypo,
                      { color: "#5B5B5E", fontSize: scale(11) },
                    ]}
                  >
                    19:28 Pm
                  </Text>
                </Text>
                <Text style={[styles.statusCancelled, styles.asrNdlsExpClr]}>
                  Status: Cancelled
                </Text>
                <Text style={[styles.statusCancelled, styles.asrNdlsExpClr]}>
                  ID: #1289767653
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.orderSummaryParent]}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ alignSelf: "center" }}>
              <Text
                style={{
                  fontFamily: fontFamily,
                  fontSize: scale(20),
                  fontWeight: "600",
                  lineHeight: verticalScale(25),
                }}
              >
                Order Summary
              </Text>
            </View>
            <View style={styles.callCustomerWrapper}>
              <Text style={[styles.callCustomer, styles.callTypo]}>
                Call Customer
              </Text>
            </View>
          </View>

          <View style={styles.frameParent2}>
            <View style={{ width: "70%", backgroundColor: "orange" }}>
              <Text style={styles.orderSummaryText}>order amount</Text>
              <Text style={styles.orderSummaryText}>Tax</Text>
              <Text style={styles.orderSummaryText}>Delivery fees</Text>
              <Text style={styles.orderSummaryText}>Discount</Text>
              <Text>Total amount payable</Text>
            </View>
            <View style={styles.rsParent}>
              <Text
                style={[
                  styles.orderSummaryText,
                  { textAlign: "right", paddingRight: scale(5) },
                ]}
              >
                997 Rs.
              </Text>
              <Text style={styles.orderSummaryText}>100 Rs.</Text>
              <Text style={styles.orderSummaryText}>50 Rs.</Text>
              <Text style={styles.orderSummaryText}>147 Rs.</Text>
              <Text style={[styles.rs4, styles.rsTypo]}>1000 Rs.</Text>
            </View>
          </View>
        </View>
        {/* <View style={[styles.frameParent3, styles.frameParentPosition]}>
        <View style={styles.groupWrapper}>
          <View style={styles.groupLayout}>
            <View style={[styles.groupInner, styles.groupLayout]} />
            <Image
              style={[styles.ellipseIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-207.png")}
            />
          </View>
          <Text style={[styles.paneerTikka, styles.tikkaTypo]}>
            Paneer Tikka
          </Text>
          <Text style={[styles.x1, styles.tikkaTypo]}> x 1</Text>
        </View>
        <Text style={styles.text1}>₹ 299</Text>
      </View> */}
        {/* <View style={[styles.frameParent4, styles.frameParentPosition]}>
        <View style={styles.groupWrapper}>
          <View style={styles.groupLayout}>
            <View style={[styles.groupInner, styles.groupLayout]} />
            <Image
              style={[styles.ellipseIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-207.png")}
            />
          </View>
          <Text
            style={[styles.mushroomTikka, styles.tikkaTypo]}
            numberOfLines={1}
          >
            Mushroom Tikka
          </Text>
          <Text style={[styles.x1, styles.tikkaTypo]}> x 1</Text>
        </View>
        <Text style={styles.text1}>₹ 299</Text>
      </View> */}
        {/* <View style={[styles.frameParent5, styles.frameParentPosition1]}>
        <View style={styles.groupWrapper}>
          <View style={styles.groupLayout}>
            <View style={[styles.groupInner, styles.groupLayout]} />
            <Image
              style={[styles.ellipseIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-207.png")}
            />
          </View>
          <Text style={[styles.paneerTikka, styles.tikkaTypo]}>
            Kadhai Paneer
          </Text>
          <Text style={[styles.x1, styles.tikkaTypo]}> x 1</Text>
        </View>
        <Text style={styles.text1}>₹ 799</Text>
      </View> */}
        {/* <View
        style={[styles.deliveryPartnerDilipKumarParent, styles.parentFlexBox1]}
      >
        <Text style={[styles.deliveryPartnerDilipContainer, styles.callTypo]}>
          <Text style={styles.textTypo}>{`Delivery partner: `}</Text>
          <Text style={styles.with}>Dilip kumar</Text>
        </Text>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/-491478824.png")}
          />
          <View style={styles.view}>
            <Text style={[styles.call, styles.callTypo]}>Call</Text>
          </View>
        </View>
      </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topPosition: {
    left: "50%",
    position: "absolute",
    backgroundColor: "red",
  },
  parentFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
  },
  groupParentPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  orderPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  navigationBarPosition: {
    right: 0,
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
  },
  timePosition: {
    width: 54,
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 11,
    position: "absolute",
  },
  groupItemLayout: {
    width: "100%",
    marginTop: verticalScale(15),
  },
  groupItemPosition: {
    borderRadius: Border.br_base,
    top: 0,
    position: "absolute",
  },
  image80Layout: {
    height: "100%",
    width: "100%",
  },
  parentFlexBox: {
    paddingVertical: Padding.p_8xs,
    backgroundColor: Color.colorChocolate,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontFamily: fontFamily,
    fontWeight: "600",
  },
  callTypo: {
    textAlign: "left",
    fontSize: scale(14),
  },
  asrNdlsExpClr: {
    color: "#5B5B5E",
    textAlign: "left",
  },
  orderTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.soraSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  frameParentPosition1: {
    marginLeft: -179.5,
    left: "50%",
    position: "absolute",
  },
  amountLayout: {
    color: Color.colorDimgray,
  },
  rs4Typo: {
    fontFamily: FontFamily.soraBold,
    fontWeight: "700",
    marginTop: 5,
  },
  rsTypo: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_sm,
  },
  frameParentPosition: {
    marginLeft: -180.5,
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 31,
    width: 31,
  },
  tikkaTypo: {
    marginLeft: 10,
    fontSize: FontSize.size_base,
    color: Color.colorDimgray,
    fontFamily: FontFamily.soraRegular,
  },
  groupChild: {
    top: 6,
    left: 1,
    width: 38,
    height: 44,
    position: "absolute",
  },
  logoason230420221Icon: {
    height: 48,
    width: 46,
    left: 0,
  },
  vectorParent: {
    height: 50,
    width: 46,
  },
  groupWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  orderDeliciousFood: {
    lineHeight: 17,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.soraRegular,
    fontSize: FontSize.size_sm,
  },
  orderDeliciousFoodWrapper: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    width: "100%",
  },
  groupContainer: {
    width: 148,
    height: 17,
  },
  with: {
    fontFamily: fontFamily,
  },
  withRajbhogKhanaContainer: {
    lineHeight: 18,
    marginTop: 5,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorBlack,
  },
  groupParent: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameWrapper: {
    width: 156,
    height: 40,
    marginLeft: 58,
  },
  image13Icon: {
    borderRadius: Border.br_31xl,
    width: 55,
    height: 54,
    marginLeft: 58,
  },
  frameParent: {
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
  },
  topBarInner: {
    marginTop: -29,
    marginLeft: -186,
    width: 372,
    height: 57,
    top: "50%",
  },
  topBar: {
    marginLeft: -195.5,
    top: 44,
    width: 392,
    height: 66,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  time: {
    marginTop: -9,
    letterSpacing: 0,
    lineHeight: 18,
    fontFamily: FontFamily.sFProText,
    color: Color.colorGray,
    fontWeight: "600",
    width: 54,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    left: 0,
  },
  action: {
    marginTop: -8.3,
    left: -3,
    height: 18,
  },
  containerIcon: {
    marginTop: -5.2,
    right: 14,
    width: 66,
    top: "50%",
  },
  iphoneXBarsStatusDef: {
    backgroundColor: Color.colorWhite,
  },
  bottomBarIcon: {
    bottom: 0,
    width: 394,
    height: 70,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupItem: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 159,
    width: 363,
    marginLeft: -181.5,
    left: "50%",
    backgroundColor: Color.colorWhite,
  },
  image80Icon: {
    borderRadius: Border.br_base,
    top: 0,
    position: "absolute",
    left: 0,
  },
  text: {
    color: Color.colorWhite,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
  },
  wrapper: {
    top: 13,
    left: 63,
    borderRadius: 5,
    paddingHorizontal: Padding.p_3xs,
    position: "absolute",
  },
  paneerHawaiian: {
    width: 194,
    fontFamily: FontFamily.soraSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  asrNdlsExp: {
    fontSize: 10,
    marginTop: 1,
    width: 194,
    fontFamily: FontFamily.soraRegular,
  },
  paneerHawaiianParent: {
    width: 194,
  },
  thOctober2023Container: {
    fontSize: FontSize.size_2xs,
    marginTop: 5,
  },
  statusCancelled: {
    fontSize: scale(11),
    fontFamily: fontFamily,
    fontWeight: "600",
    marginTop: 5,
  },
  frameGroup: {
    padding: scale(15),
    justifyContent: "center",
    width: "60%",
  },
  // frameContainer: {
  //   top: 16,
  //   left: 15,
  //   alignItems: "center",
  //   position: "absolute",
  // },
  rectangleParent: {
    top: 165,
    position: "absolute",
  },
  orderDetails1: {
    width: 244,
  },
  orderDetailsWrapper: {
    top: 125,
    left: 11,
    width: 367,
    position: "absolute",
  },
  orderSummary: {
    width: 228,
  },
  callCustomer: {
    color: "white",
    fontFamily: fontFamily,
  },
  callCustomerWrapper: {
    borderRadius: 6,
    width: scale(126),
    padding: 10,
    marginLeft: 5,
    backgroundColor: "#DE7A22",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  orderSummaryParent: {
    width: "100%",
    marginTop: verticalScale(15),
  },
  orderAmount: {
    fontFamily: FontFamily.soraRegular,
    fontSize: FontSize.size_sm,
  },
  tax: {
    fontSize: 12,
    marginTop: 5,
    fontFamily: FontFamily.soraRegular,
  },
  deliveryFees: {
    marginTop: 5,
    fontFamily: FontFamily.soraRegular,
    fontSize: FontSize.size_sm,
  },
  totalAmountPayable: {
    width: 187,
    color: Color.colorDimgray,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  rs: {
    fontFamily: FontFamily.soraRegular,
  },
  rs1: {
    marginTop: 5,
    fontFamily: FontFamily.soraRegular,
  },
  rs4: {
    fontFamily: FontFamily.soraBold,
    fontWeight: "700",
    marginTop: 5,
  },
  rsParent: {
    width: "30%",
    marginLeft: scale(5),
  },
  frameParent2: {
    marginTop: verticalScale(10),
    flexDirection: "row",
    backgroundColor: "green",
  },
  orderSummaryText: {
    fontFamily: fontFamily,
    fontSize: scale(14),
    fontWeight: "400",
    lineHeight: verticalScale(18),
    color: "#5B5B5E",
  },
  frameParent1: {
    top: 468,
    width: 359,
  },
  groupInner: {
    borderStyle: "solid",
    borderColor: Color.colorLime,
    borderWidth: 2,
    left: 0,
    top: 0,
    position: "absolute",
  },
  ellipseIcon: {
    top: 10,
    left: 10,
    width: 11,
  },
  paneerTikka: {
    width: 120,
    marginLeft: 10,
    textAlign: "left",
  },
  x1: {
    textAlign: "center",
  },
  text1: {
    marginLeft: 122,
    fontSize: FontSize.size_base,
    color: Color.colorDimgray,
    fontFamily: FontFamily.soraSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  frameParent3: {
    top: 342,
  },
  mushroomTikka: {
    width: 120,
    marginLeft: 10,
    textAlign: "left",
    overflow: "hidden",
  },
  frameParent4: {
    top: 414,
  },
  frameParent5: {
    top: 378,
    alignItems: "center",
    flexDirection: "row",
  },
  deliveryPartnerDilipContainer: {
    width: 260,
    color: Color.colorBlack,
  },
  icon: {
    width: 13,
    height: 13,
  },
  call: {
    color: Color.colorWhite,
    fontFamily: FontFamily.soraRegular,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  view: {
    width: 28,
    marginLeft: 5,
    height: 18,
  },
  parent: {
    borderRadius: 87,
    paddingHorizontal: 20,
    marginLeft: 14,
  },
  deliveryPartnerDilipKumarParent: {
    top: 644,
    left: 17,
    width: 361,
    flexDirection: "row",
    position: "absolute",
  },
  orderDetails: {
    flex: 1,
    height: 873,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default OrderDetailScreen;
