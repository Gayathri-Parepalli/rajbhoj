// import React, { useEffect, useState } from "react";
// import {
//   Image,
//   StyleSheet,
//   View,
//   Text,
//   Button,
//   ScrollView,
//   FlatList,
// } from "react-native";
// import {
//   Border,
//   Padding,
//   Color,
//   FontFamily,
//   FontSize,
// } from "../profileScreen/Style";
// import { globalStyles } from "../../styles/styles";
// import { verticalScale, scale } from "../Scaling";
// import RajBhogTopBar from "../../components/RajBhogTopBar";
// import { fontFamily } from "../../styles/fontStyles";
// import { Platform } from "react-native";
// import { colors } from "../../styles/colors";
// import RajBhogButton from "../../components/RajBhogButton";
// import RajBhogCard from "../../components/RajBhogCard";

// //redux
// import { useDispatch, useSelector } from "react-redux";
// import { PreviousOrder } from "../../redux/actions/profile.js";

// const OrderHistory = ({ navigation }) => {
//   const dispatch = useDispatch();
//   const PreviousOrderDetails = useSelector(
//     (state) => state.profile.PreviousOrder
//   );
//   console.log("PreviousOrder", { PreviousOrderDetails });

//   useEffect(() => {
//     const getPreviousOrderDetails = async () => {
//       try {
//         await dispatch(PreviousOrder());
//       } catch (err) {
//         console.log(err.message);
//       }
//     };
//     getPreviousOrderDetails();
//   }, [dispatch]);

//   const navigateToSendFeedback = () => {
//     navigation.navigate("OrderDetailScreen");
//   };

//   const renderItem = ({ item }) => (
//     <View style={[styles.groupItemLayout]}>
//       <RajBhogCard
//         children={
//           <View
//             style={{
//               width: "100%",
//               height: "auto",
//               flexDirection: "row",
//               padding: 15,
//               borderRadius: 16,
//             }}
//           >
//             <View
//               style={{
//                 borderRadius: 5,
//                 width: "40%",
//               }}
//             >
//               <Image
//                 style={[styles.image80Layout]}
//                 resizeMode="cover"
//                 source={require("../../assets/Images/welcomeImage/FourthImage.png")}
//               />

//               <View style={[styles.wrapper, styles.parentFlexBox]}>
//                 <Text style={[styles.text, styles.textTypo]}>₹ 299</Text>
//               </View>
//             </View>
//             <View style={styles.frameGroup}>
//               <Text
//                 style={{
//                   fontFamily: fontFamily,
//                   fontSize: scale(14),
//                   fontWeight: "600",
//                   lineHeight: 18,
//                 }}
//               >
//                 {item.name}
//               </Text>
//               <Text
//                 style={{
//                   fontFamily: fontFamily,
//                   fontSize: scale(10),
//                   fontWeight: "400",
//                   lineHeight: 12,
//                   color: "#5B5B5E",
//                   marginTop: scale(2),
//                 }}
//               >
//                 {item.trainName}-{item.station}
//               </Text>

//               <Text>
//                 <Text
//                   style={[
//                     styles.textTypo,
//                     { color: "#5B5B5E", fontSize: scale(11) },
//                   ]}
//                 >
//                   27th October 2023
//                 </Text>
//                 <Text style={styles.with}>{` at `}</Text>
//                 <Text
//                   style={[
//                     styles.textTypo,
//                     { color: "#5B5B5E", fontSize: scale(11) },
//                   ]}
//                 >
//                   19:28 Pm
//                 </Text>
//               </Text>
//               <Text style={[styles.statusCancelled, styles.asrNdlsExpClr]}>
//                 Status: Cancelled
//               </Text>
//               <Text style={[styles.statusCancelled, styles.asrNdlsExpClr]}>
//                 ID: #1289767653
//               </Text>
//               <View style={{ marginTop: verticalScale(5) }}>
//                 <RajBhogButton
//                   onPress={navigateToSendFeedback}
//                   label=" view order"
//                   styles={{
//                     backgroundColor: colors.buttonColor,
//                     width: "70%",
//                     height: "auto",
//                     padding: scale(2),
//                     borderRadius: verticalScale(6),
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                   labelStyles={{
//                     color: colors.backgroundColor,
//                     fontSize: verticalScale(12),
//                     fontWeight: "400",
//                     // lineHeight: verticalScale(15),
//                   }}
//                 />
//               </View>
//             </View>
//           </View>
//         }
//         styles={{
//           height: "auto",
//         }}
//         shadow={true}
//       />
//     </View>
//   );

//   return (
//     <View style={[globalStyles.containerStyles, { gap: verticalScale(10) }]}>
//       <ScrollView>
//         <View
//           style={{
//             marginLeft: scale(11),
//             marginRight: scale(11),
//             marginTop: verticalScale(5),
//           }}
//         >
//           <View>
//             <View>
//               <Text
//                 style={{
//                   fontSize: scale(20),
//                   fontWeight: "600",
//                   fontFamily: fontFamily,
//                   lineHeight: scale(25),
//                 }}
//               >
//                 Previous orders:
//               </Text>
//             </View>

//             <View style={{ marginBottom: verticalScale(15) }}>
//               <FlatList
//                 data={PreviousOrderDetails}
//                 renderItem={renderItem}
//                 keyExtractor={(item) => item.id}
//                 style={styles.flatList}
//               />
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default OrderHistory;

// const styles = StyleSheet.create({
//   groupItemLayout: {
//     width: "96%",
//     marginTop: verticalScale(15),
//     marginBottom: verticalScale(15),
//     justifyContent: "center",
//     alignSelf: "center",
//   },
//   image80Layout: {
//     height: "100%",
//     width: "100%",
//   },
//   parentFlexBox: {
//     paddingVertical: Padding.p_8xs,
//     backgroundColor: Color.colorChocolate,
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//   },
//   textTypo: {
//     fontFamily: fontFamily,
//     fontWeight: "600",
//   },
//   asrNdlsExpClr: {
//     color: "#5B5B5E",
//     textAlign: "left",
//   },
//   with: {
//     fontFamily: fontFamily,
//   },
//   text: {
//     color: Color.colorWhite,
//     fontSize: scale(11),
//     textAlign: "center",
//   },
//   wrapper: {
//     top: verticalScale(13),
//     left: scale(65),
//     borderRadius: 5,
//     paddingHorizontal: Padding.p_3xs,
//     position: "absolute",
//   },
//   statusCancelled: {
//     fontSize: scale(11),
//     fontFamily: fontFamily,
//     fontWeight: "600",
//     marginTop: 5,
//   },
//   frameGroup: {
//     padding: scale(15),
//     justifyContent: "center",
//     width: "60%",
//   },
//   view: {
//     width: 28,
//     marginLeft: 5,
//     height: 18,
//   },
// });


import React, { useEffect } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
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
import { colors } from "../../styles/colors";
import RajBhogButton from "../../components/RajBhogButton";
import RajBhogCard from "../../components/RajBhogCard";

// redux
import { useDispatch, useSelector } from "react-redux";
import { PreviousOrder } from "../../redux/actions/profile.js";

const constants = {
  fontSize: {
    heading: scale(20),
    text: scale(11),
  },
  padding: {
    xs: Padding.p_8xs,
    s: Padding.p_3xs,
  },
  borderRadius: 5,
};

const OrderHistory = ({ navigation }) => {
  const dispatch = useDispatch();
  const PreviousOrderDetails = useSelector(
    (state) => state.profile.PreviousOrder
  );
//  const [advance, orderDetails, orderSummary, previousOrder] = useSelector(
//    (state) => state.profile.PreviousOrder
//  );
  // console.log({ PreviousOrderDetails}, "PreviousOrderDetails");

  useEffect(() => {
    const getPreviousOrderDetails = async () => {
      try {
        await dispatch(PreviousOrder());
      } catch (err) {
        console.log(err.message);
      }
    };
    getPreviousOrderDetails();
  }, [dispatch]);

  const navigateToSendFeedback = () => {
    navigation.navigate("OrderDetailScreen");
  };

  const renderItem = ({ item }) => (
    <View style={styles.groupItemLayout}>
      <RajBhogCard
        children={
          <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={require("../../assets/Images/welcomeImage/FourthImage.png")}
              />

              <View style={[styles.wrapper, styles.parentFlexBox]}>
                <Text style={styles.text}>₹ 299</Text>
              </View>
            </View>

            <View style={styles.frameGroup}>
              <Text style={styles.heading}>{item.name}</Text>
              <Text style={styles.text}>
                {item.trainName}-{item.station}
              </Text>

              <Text>
                <Text style={styles.textTypo}>27th October 2023</Text>
                <Text style={styles.with}>{` at `}</Text>
                <Text style={styles.textTypo}>19:28 Pm</Text>
              </Text>
              <Text style={[styles.statusCancelled, styles.asrNdlsExpClr]}>
                Status: Cancelled
              </Text>
              <Text style={[styles.statusCancelled, styles.asrNdlsExpClr]}>
                ID: #{item.id}
              </Text>
              <View style={styles.buttonContainer}>
                <RajBhogButton
                  onPress={navigateToSendFeedback}
                  label="View Order"
                  styles={styles.button}
                  labelStyles={styles.buttonLabel}
                />
              </View>
            </View>
          </View>
        }
        styles={{
          height: "auto",
        }}
        shadow={true}
      />
    </View>
  );

  return (
    <View style={[globalStyles.containerStyles, { gap: verticalScale(10) }]}>
      <RajBhogTopBar title={"Order History"} />
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>Order History:</Text>
          </View>

          <View style={styles.flatListContainer}>
            <FlatList
              data={PreviousOrderDetails}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              style={styles.flatList}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  container: {
    marginLeft: scale(11),
    marginRight: scale(11),
    marginTop: verticalScale(5),
  },
  heading: {
    fontSize: constants.fontSize.heading,
    fontWeight: "600",
    fontFamily: fontFamily,
    lineHeight: scale(25),
  },
  flatListContainer: {
    marginBottom: verticalScale(15),
  },
  groupItemLayout: {
    width: "96%",
    marginTop: verticalScale(15),
    marginBottom: verticalScale(15),
    justifyContent: "center",
    alignSelf: "center",
  },
  cardContainer: {
    width: "100%",
    height: verticalScale(200),
    flexDirection: "row",
    padding: scale(15),
    borderRadius: constants.borderRadius,
  },
  imageContainer: {
    borderRadius: constants.borderRadius,
    width: "40%",
  },
  image: {
    height: "90%",
    width: "90%",
  },
  parentFlexBox: {
    paddingVertical: constants.padding.xs,
    backgroundColor: Color.colorChocolate,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontFamily: fontFamily,
    fontWeight: "600",
  },
  asrNdlsExpClr: {
    color: "#5B5B5E",
    textAlign: "left",
  },
  with: {
    fontFamily: fontFamily,
  },
  text: {
    color: Color.colorWhite,
    fontSize: constants.fontSize.text,
    textAlign: "center",
  },
  wrapper: {
    top: verticalScale(13),
    left: scale(65),
    borderRadius: constants.borderRadius,
    paddingHorizontal: constants.padding.s,
    position: "absolute",
  },
  statusCancelled: {
    fontSize: constants.fontSize.text,
    fontFamily: fontFamily,
    fontWeight: "600",
    marginTop: verticalScale(5),
  },
  frameGroup: {
    padding: scale(15),
    justifyContent: "center",
    width: "60%",
  },
  buttonContainer: {
    marginTop: verticalScale(5),
  },
  button: {
    backgroundColor: colors.buttonColor,
    width: "70%",
    height: "auto",
    padding: scale(2),
    borderRadius: verticalScale(6),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    color: colors.backgroundColor,
    fontSize: verticalScale(12),
    fontWeight: "400",
  },
});
