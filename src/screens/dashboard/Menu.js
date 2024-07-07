// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   ScrollView,
//   FlatList,
//   Dimensions,
//   ActivityIndicator,
//   Pressable,
//   Alert,
//   TouchableOpacity,
// } from "react-native";
// import { useForm } from "react-hook-form";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// //styles
// import { globalStyles } from "../../styles/styles";
// import { fontFamily } from "../../styles/fontStyles";
// import { verticalScale, scale } from "../Scaling";
// //components
// import RajBhogButton from "../../components/RajBhogButton";
// import { colors } from "../../styles/colors";
// import RajBhogInput from "../../components/RajBhogInput";
// import RajBhogCard from "../../components/RajBhogCard";
// //svg
// import GroupIcon from "../../svg/GroupIcon";
// import AddIcon from "../../svg/AddIcon";
// import MinusIcon from "../../svg/MinusIcon";
// import CircleIcon from "../../svg/DotIcon";
// //redux
// import { useDispatch, useSelector } from "react-redux";
// import { getbyStation } from "../../redux/actions/dashboard";
// import {
//   addtocart,
//   deleteFromCart,
//   passengerDetails,
// } from "../../redux/actions/cart";

// const Menu = ({ route, navigation }) => {
//   const { stationcode, outlet_id, pnr } = route.params;

//   const restaurants = useSelector((state) => state.dashboard.restaurant);
//   const cartDetails = useSelector((state) => state.cart.passengerDetails);
//   const menuList = useSelector((state) => state.dashboard.menuList);
//   const [userId, setUserId] = useState("");
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(true);
//   const [addLoading, setAddLoading] = useState("");
//   // const [showDish, setShowDish] = useState(true);
//   const [status, setStatus] = useState("");
//   const {
//     control,
//     formState: { errors },
//     handleSubmit,
//   } = useForm({ mode: "all" });
//   useEffect(() => {
//     const checkId = async () => {
//       try {
//         const id = await AsyncStorage.getItem("userId");
//         setUserId(id);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     checkId();
//   }, []);
//   const handleAddToCart = async (item, qty) => {
//     setAddLoading(item.menu_id);
//     try {
//       await dispatch(
//         addtocart({
//           productId: item.menu_id,
//           rate: parseInt(item.base_price),
//           qty: qty || 1,
//           UserId: userId,
//         })
//       );
//       // fetchCartDetails();
//       await dispatch(
//         passengerDetails({
//           UserId: userId,
//           pnr_no: pnr,
//           station_code: stationcode,
//           outlet_id: outlet_id,
//           iflag: "1",
//         })
//       );
//     } catch (err) {
//       console.log(err);
//       Alert.alert(err.message);
//     }
//     setAddLoading("");
//   };
//   const handleDeleteFromCart = async (id) => {
//     setAddLoading(id);
//     try {
//       await dispatch(
//         deleteFromCart({
//           productId: id,
//           UserId: userId,
//         })
//       );
//       await dispatch(
//         passengerDetails({
//           UserId: userId,
//           pnr_no: pnr,
//           station_code: stationcode,
//           outlet_id: outlet_id,
//           iflag: "1",
//         })
//       );
//     } catch (err) {
//       console.log(err);
//       Alert.alert(err.message);
//     }
//     setAddLoading("");
//   };
//   //fetch cartDetails
//   const fetchCartDetails = async () => {
//     const userId = await AsyncStorage.getItem("userId");
//     try {
//       await dispatch(
//         passengerDetails({
//           UserId: userId,
//           pnr_no: pnr,
//           station_code: stationcode,
//           outlet_id: outlet_id,
//           iflag: "1",
//         })
//       );
//     } catch (err) {
//       Alert.alert(err.message);
//     }
//   };
//   useEffect(() => {
//     fetchCartDetails();
//   }, []);
//   //fetchmenu
//   useEffect(() => {
//     const fetchMenu = async () => {
//       setLoading(true);
//       try {
//         await dispatch(
//           getbyStation(
//             {
//               station_code: stationcode,
//               outlet_id: outlet_id,
//               pnr_no: pnr,
//               iflag: "5",
//             },
//             status
//           )
//         );
//       } catch (err) {
//         Alert.alert(err.message);
//       }
//       setLoading(false);
//     };
//     if (stationcode && outlet_id && pnr) {
//       fetchMenu();
//     }
//   }, [stationcode, outlet_id, pnr, status]);
//   //get oulet details
//   const outletDetails =
//     restaurants && restaurants.flatMap((val) => val.Outlets);
//   const requiredOutLet = outletDetails.find(
//     (val) => val.outlets_id === outlet_id
//   );
//   const renderItem = ({ item }) => {
//     return (
//       <Pressable
//         style={{
//           marginBottom: verticalScale(15),
//           paddingHorizontal: verticalScale(1),
//           paddingTop: verticalScale(1),
//         }}
//         //   onPress={() => navigation.navigate("Rastaurants")}
//       >
//         <View>
//           <RajBhogCard
//             shadow={true}
//             styles={{
//               width: "100%",
//               //  minHeight:verticalScale(250),
//               minHeight: verticalScale(123),
//               paddingHorizontal: verticalScale(10),
//               alignItems: "flex-start",
//               paddingTop: verticalScale(10),
//               // justifyContent: "flex-start",
//             }}
//           >
//             <View
//               style={{
//                 width: "100%",
//                 flexDirection: "row",
//                 gap: verticalScale(5),
//                 paddingBottom: verticalScale(10),
//               }}
//             >
//               <View style={{ width: "70%", gap: verticalScale(10) }}>
//                 <Text
//                   style={{
//                     width: "100%",
//                     fontFamily: fontFamily,
//                     fontSize: verticalScale(12),
//                     fonrWeight: "900",
//                     lineHeight: verticalScale(15.2),
//                     color: "#000000",
//                   }}
//                 >
//                   {item.name}
//                 </Text>
//                 <Text
//                   style={{
//                     width: "100%",
//                     color: "#5B5B5E",
//                     fontFamily: fontFamily,
//                     fontSize: verticalScale(11),
//                     fontWeight: "00",
//                   }}
//                 >
//                   {item.description}
//                 </Text>
//                 <View
//                   style={{
//                     flexDirection: "row",
//                     gap: verticalScale(5),
//                     alignItems: "center",
//                   }}
//                 >
//                   {
//                     <GroupIcon
//                       color={item.veg_status === 0 ? "#FF0000" : "#00EB34"}
//                     />
//                   }
//                   <Text
//                     style={{
//                       fontSize: verticalScale(12),
//                       fontFamily: fontFamily,
//                       color: "#5B5B5E",
//                       fontWeight: "700",
//                     }}
//                   >
//                     @{item.base_price ? parseInt(item.base_price) : 0} Rs
//                   </Text>
//                 </View>
//               </View>
//               <View
//                 style={{
//                   width: "27%",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   gap: verticalScale(10),
//                 }}
//               >
//                 <View style={{ height: scale(100), width: "100%" }}>
//                   <View>
//                     <Image
//                       // source={{uri:item.image?item.image:require("../../assets/Images/imagefood.png")}}
//                       // source={require("../../assets/Images/imagefood.png")}
//                       source={
//                         item.image !== ""
//                           ? { uri: item.image }
//                           : require("../../assets/Images/imagefood.png")
//                       }
//                       style={{
//                         zIndex: -1,
//                         width: scale(80),
//                         height: scale(80),
//                         resizeMode: "contain",
//                         borderRadius: verticalScale(16),
//                       }}
//                     />
//                   </View>
//                   {cartDetails &&
//                   cartDetails.CartDetails &&
//                   cartDetails.CartDetails.some(
//                     (val) => val.name === item.name
//                   ) ? (
//                     <View
//                       style={[
//                         styles.shadowButtonStyles,
//                         {
//                           flexDirection: "row",
//                           alignItems: "center",
//                           justifyContent: "space-between",
//                           paddingHorizontal: verticalScale(10),
//                         },
//                       ]}
//                     >
//                       <TouchableOpacity
//                         onPress={() => handleDeleteFromCart(item.menu_id)}
//                         style={{ padding: verticalScale(5) }}
//                       >
//                         <View>
//                           <MinusIcon color={"#000"} />
//                         </View>
//                       </TouchableOpacity>
//                       <Text
//                         style={{
//                           fontFamily: fontFamily,
//                           fontSize: verticalScale(10),
//                           fontWeight: "700",
//                         }}
//                       >
//                         {addLoading === item.menu_id ? (
//                           <ActivityIndicator
//                             color={colors.buttonColor}
//                             size="small"
//                           />
//                         ) : (
//                           (
//                             cartDetails.CartDetails.find(
//                               (val) => val.name === item.name
//                             ) || {}
//                           ).qty || 0
//                         )}
//                         {/* qty */}
//                       </Text>
//                       <TouchableOpacity
//                         style={{ padding: verticalScale(5) }}
//                         onPress={() => {
//                           handleAddToCart(
//                             item,
//                             (
//                               cartDetails.CartDetails.find(
//                                 (val) => val.name === item.name
//                               ) || {}
//                             ).qty + 1
//                           );
//                         }}
//                       >
//                         <View>
//                           <AddIcon />
//                         </View>
//                       </TouchableOpacity>
//                     </View>
//                   ) : (
//                     <View style={styles.shadowButtonStyles}>
//                       <RajBhogButton
//                         type="both"
//                         label={
//                           addLoading === item.menu_id ? (
//                             <ActivityIndicator
//                               color={colors.buttonColor}
//                               size="small"
//                             />
//                           ) : (
//                             "Add Dish"
//                           )
//                         }
//                         styles={{ height: verticalScale(23),alignSelf:"Center",paddingHorizontal:scale(2),fontSize:verticalScale(5) }}
//                         // icon={addLoading === item.menu_id ? null : <AddIcon />}
//                         onPress={() => handleAddToCart(item)}
//                       />
//                     </View>
//                   )}
//                 </View>
//               </View>
//             </View>
//           </RajBhogCard>
//         </View>
//       </Pressable>
//     );
//   };
//   return (
//     //availble restaurants
//     <ScrollView
//       showsVerticalScrollIndicator={false}
//       style={[
//         globalStyles.dashboardContentStyle,
//         { backgroundColor: colors.backgroundColor },
//       ]}
//     >
//       {requiredOutLet && (
//         <View
//           style={{
//             width: "100%",
//             gap: verticalScale(10),
//             paddingTop: verticalScale(15),
//           }}
//         >
//           <View style={{ width: "100%", gap: verticalScale(10) }}>
//             <Image
//               source={require("../../assets/Images/imagefood.png")}
//               // source={{uri:requiredOutLet.image_3}}
//               style={{
//                 width: "100%",
//                 height: scale(186),
//                 // resizeMode: "contain",
//                 // marginTop:verticalScale(10)
//                 borderRadius: verticalScale(16),
//               }}
//             ></Image>
//             {/* <View
//               style={[
//                 styles.buttonStyles,
//                 { top: verticalScale(20), right: verticalScale(10) },
//               ]}
//             >
//               <Text
//                 style={{ fontFamily: fontFamily, fontSize: verticalScale(12) }}
//               >
//                 {requiredOutLet.station_code}
//               </Text>
//             </View> */}
//             <View
//               style={[
//                 styles.buttonStyles,
//                 { bottom: verticalScale(20), left: verticalScale(10) },
//               ]}
//             >
//               <Text
//                 style={{
//                   fontFamily: fontFamily,
//                   fontSize: verticalScale(12),
//                   paddingHorizontal: verticalScale(3),
//                 }}
//               >
//                 Min Order :{" "}
//                 {requiredOutLet.minimum_order_value
//                   ? parseInt(requiredOutLet.minimum_order_value).toFixed()
//                   : 0}
//                 Rs
//               </Text>
//             </View>
//           </View>
//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "space-between",
//               // marginHorizontal:verticalScale(10),
//               width: "100%",
//             }}
//           >
//             <View
//               style={{
//                 width: requiredOutLet.meal_type === "Both" ? "65%" : "100%",
//                 justifyContent: "space-between",
//               }}
//             >
//               <Text style={styles.textStyles1}>
//                 {requiredOutLet.outlate_name}
//               </Text>
//               <Text style={styles.textStyles}>
//                 {requiredOutLet.short_description}
//               </Text>
//               <Text style={styles.textStyles}>
//                 Serving :{requiredOutLet.station_code}
//               </Text>
//             </View>
//             {requiredOutLet.meal_type === "Both" && (
//               <View
//                 style={{
//                   alignItems: "flex-end",
//                   gap: verticalScale(5),
//                   width: "33%",
//                 }}
//               >
//                 <RajBhogButton
//                   required={true}
//                   type="both"
//                   icon={<CircleIcon />}
//                   label="Veg"
//                   onPress={() => setStatus(1)}
//                   styles={styles.buttonStyles1}
//                   labelStyles={styles.labelStyles}
//                 />
//                 <RajBhogButton
//                   required={true}
//                   type="both"
//                   icon={<CircleIcon color="#FF0000" />}
//                   label="Non Veg"
//                   onPress={() => setStatus(0)}
//                   styles={{
//                     borderRadius: scale(50),
//                     borderColor: "#FF0000",
//                     borderWidth: verticalScale(1),
//                     height: verticalScale(25),
//                     width: "100%",
//                   }}
//                   labelStyles={styles.labelStyles1}
//                 />
//               </View>
//             )}
//           </View>
//         </View>
//       )}
//       {!loading ? (
//         <FlatList
//           style={{ marginTop: verticalScale(10) }}
//           removeClippedSubviews
//           showsVerticalScrollIndicator={false}
//           ListEmptyComponent={
//             <View
//               style={{
//                 height: verticalScale(400),
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Text style={styles.textStyles1}>No Data Found</Text>
//             </View>
//           }
//           // showsHorizontalScrollIndicator={false}
//           // horizontal={true}
//           data={
//             menuList && menuList.FoodDetails[0] && menuList.FoodDetails[0].Menu
//               ? menuList.FoodDetails[0].Menu
//               : []
//           }
//           renderItem={renderItem}
//           keyExtractor={(item, index) => index.toString()}
//           // extraData={selectedId}
//         />
//       ) : (
//         <View
//           style={{
//             width: "100%",
//             height: verticalScale(250),
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <ActivityIndicator color={colors.buttonColor} size="large" />
//         </View>
//       )}
//     </ScrollView>
//   );
// };

// export default Menu;

// const styles = StyleSheet.create({
//   inputStyles: {
//     height: verticalScale(50),
//   },
//   textStyles: {
//     fontFamily: fontFamily,
//     fontSize: verticalScale(10),
//     fontWeigth: "400",
//     lineHeight: verticalScale(12.6),
//     color: "#5B5B5E",
//   },
//   textStyles1: {
//     fontFamily: fontFamily,
//     fontSize: verticalScale(18),
//     fontWeigth: "600",
//     lineHeight: verticalScale(25.2),
//   },
//   headingStyles: {
//     alignSelf: "center",
//     fontFamily: fontFamily,
//     fontSize: verticalScale(22),
//     fontWeight: "700",
//     lineHeight: verticalScale(30.24),
//   },
//   paginationContainer: {
//     position: "absolute",
//     bottom: -35, // Adjust the vertical distance from the bottom
//     alignSelf: "center",
//   },
//   paginationDot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 3,
//     backgroundColor: colors.buttonColor,
//   },
//   buttonStyles: {
//     paddingHorizontal: verticalScale(5),
//     alignItems: "center",
//     justifyContent: "center",
//     minWidth: verticalScale(86),
//     height: verticalScale(28),
//     borderRadius: verticalScale(16),
//     backgroundColor: "#FFFFFF",
//     position: "absolute",
//   },
//   buttonStyles1: {
//     borderColor: "#00EB34",
//     borderWidth: verticalScale(1),
//     height: verticalScale(25),
//     width: "80%",
//     borderRadius: scale(50),
//   },
//   labelStyles: {
//     fontFamily: fontFamily,
//     fontSize: verticalScale(14),
//     alignSelf: "center",
//     fontWeight: "400",
//     color: "#00EB34",
//   },
//   labelStyles1: {
//     fontFamily: fontFamily,
//     fontSize: verticalScale(14),
//     alignSelf: "center",
//     fontWeight: "400",
//     color: "#FF0000",
//   },
//   shadowButtonStyles: {
//     position: "absolute",
//     bottom: 4,

//     height: verticalScale(23),
//     width: scale(80),
//     // Shadow properties for iOS
//     shadowColor: "#000",
//     backgroundColor: "white",
//     borderRadius: verticalScale(16),
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,

//     // Elevation for Android
//     elevation: 5,
//   },
// });



import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  ActivityIndicator,
  Pressable,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
//styles
import { globalStyles } from "../../styles/styles";
import { fontFamily } from "../../styles/fontStyles";
import { verticalScale, scale } from "../Scaling";
//components
import RajBhogButton from "../../components/RajBhogButton";
import { colors } from "../../styles/colors";
import RajBhogInput from "../../components/RajBhogInput";
import RajBhogCard from "../../components/RajBhogCard";
//svg
import GroupIcon from "../../svg/GroupIcon";
import AddIcon from "../../svg/AddIcon";
import MinusIcon from "../../svg/MinusIcon";
import CircleIcon from "../../svg/DotIcon";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getbyStation } from "../../redux/actions/dashboard";
import {
  addtocart,
  deleteFromCart,
  passengerDetails,
} from "../../redux/actions/cart";

const Menu = ({ route, navigation }) => {
  const { stationcode, outlet_id, pnr } = route.params;

  const restaurants = useSelector((state) => state.dashboard.restaurant);
  const cartDetails = useSelector((state) => state.cart.passengerDetails);
  const menuList = useSelector((state) => state.dashboard.menuList);
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [addLoading, setAddLoading] = useState("");
  // const [showDish, setShowDish] = useState(true);
  const [status, setStatus] = useState("");
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });
  useEffect(() => {
    const checkId = async () => {
      try {
        const id = await AsyncStorage.getItem("userId");
        setUserId(id);
      } catch (error) {
        console.log(error);
      }
    };
    checkId();
  }, []);
  const handleAddToCart = async (item, qty) => {
    setAddLoading(item.menu_id);
    try {
      await dispatch(
        addtocart({
          productId: item.menu_id,
          rate: parseInt(item.base_price),
          qty: qty || 1,
          UserId: userId,
        })
      );
      // fetchCartDetails();
      await dispatch(
        passengerDetails({
          UserId: userId,
          pnr_no: pnr,
          station_code: stationcode,
          outlet_id: outlet_id,
          iflag: "1",
        })
      );
    } catch (err) {
      console.log(err);
      Alert.alert(err.message);
    }
    setAddLoading("");
  };
  const handleDeleteFromCart = async (id) => {
    setAddLoading(id);
    try {
      await dispatch(
        deleteFromCart({
          productId: id,
          UserId: userId,
        })
      );
      await dispatch(
        passengerDetails({
          UserId: userId,
          pnr_no: pnr,
          station_code: stationcode,
          outlet_id: outlet_id,
          iflag: "1",
        })
      );
    } catch (err) {
      console.log(err);
      Alert.alert(err.message);
    }
    setAddLoading("");
  };
  //fetch cartDetails
  const fetchCartDetails = async () => {
    const userId = await AsyncStorage.getItem("userId");
    try {
      await dispatch(
        passengerDetails({
          UserId: userId,
          pnr_no: pnr,
          station_code: stationcode,
          outlet_id: outlet_id,
          iflag: "1",
        })
      );
    } catch (err) {
      Alert.alert(err.message);
    }
  };
  useEffect(() => {
    fetchCartDetails();
  }, []);
  //fetchmenu
  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true);
      try {
        await dispatch(
          getbyStation(
            {
              station_code: stationcode,
              outlet_id: outlet_id,
              pnr_no: pnr,
              iflag: "5",
            },
            status
          )
        );
      } catch (err) {
        Alert.alert(err.message);
      }
      setLoading(false);
    };
    if (stationcode && outlet_id && pnr) {
      fetchMenu();
    }
  }, [stationcode, outlet_id, pnr, status]);
  //get oulet details
  const outletDetails =
    restaurants && restaurants.flatMap((val) => val.Outlets);
  const requiredOutLet =
    outletDetails && outletDetails.find((val) => val.outlets_id === outlet_id);
  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={{
          marginBottom: verticalScale(15),
          paddingHorizontal: verticalScale(1),
          paddingTop: verticalScale(1),
        }}
        //   onPress={() => navigation.navigate("Rastaurants")}
      >
        <View>
          <RajBhogCard
            shadow={true}
            styles={{
              width: "100%",
              //  minHeight:verticalScale(250),
              minHeight: verticalScale(123),
              paddingHorizontal: verticalScale(10),
              alignItems: "flex-start",
              paddingTop: verticalScale(10),
              // justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                gap: verticalScale(5),
                paddingBottom: verticalScale(10),
              }}
            >
              <View style={{ width: "70%", gap: verticalScale(10) }}>
                <Text
                  style={{
                    width: "100%",
                    fontFamily: fontFamily,
                    fontSize: verticalScale(12),
                    fonrWeight: "900",
                    lineHeight: verticalScale(15.2),
                    color: "#000000",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    width: "100%",
                    color: "#5B5B5E",
                    fontFamily: fontFamily,
                    fontSize: verticalScale(11),
                    fontWeight: "00",
                  }}
                >
                  {item.description}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    gap: verticalScale(5),
                    alignItems: "center",
                  }}
                >
                  {
                    <GroupIcon
                      color={item.veg_status === 0 ? "#FF0000" : "#00EB34"}
                    />
                  }
                  <Text
                    style={{
                      fontSize: verticalScale(12),
                      fontFamily: fontFamily,
                      color: "#5B5B5E",
                      fontWeight: "700",
                    }}
                  >
                    @{item.base_price ? parseInt(item.base_price) : 0} Rs
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "27%",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: verticalScale(10),
                }}
              >
                <View style={{ height: scale(100), width: "100%" }}>
                  <View>
                    <Image
                      // source={{uri:item.image?item.image:require("../../assets/Images/imagefood.png")}}
                      // source={require("../../assets/Images/imagefood.png")}
                      source={
                        item.image !== ""
                          ? { uri: item.image }
                          : require("../../assets/Images/imagefood.png")
                      }
                      style={{
                        zIndex: -1,
                        width: scale(80),
                        height: scale(80),
                        resizeMode: "contain",
                        borderRadius: verticalScale(16),
                      }}
                    />
                  </View>
                  {cartDetails &&
                  cartDetails.CartDetails &&
                  cartDetails.CartDetails.some(
                    (val) => val.name === item.name
                  ) ? (
                    <View
                      style={[
                        styles.shadowButtonStyles,
                        {
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          paddingHorizontal: verticalScale(10),
                        },
                      ]}
                    >
                      <TouchableOpacity
                        onPress={() => handleDeleteFromCart(item.menu_id)}
                        style={{ padding: verticalScale(5) }}
                      >
                        <View>
                          <MinusIcon color={"#000"} />
                        </View>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontFamily: fontFamily,
                          fontSize: verticalScale(10),
                          fontWeight: "700",
                        }}
                      >
                        {addLoading === item.menu_id ? (
                          <ActivityIndicator
                            color={colors.buttonColor}
                            size="small"
                          />
                        ) : (
                          (
                            cartDetails.CartDetails.find(
                              (val) => val.name === item.name
                            ) || {}
                          ).qty || 0
                        )}
                        {/* qty */}
                      </Text>
                      <TouchableOpacity
                        style={{ padding: verticalScale(5) }}
                        onPress={() => {
                          handleAddToCart(
                            item,
                            (
                              cartDetails.CartDetails.find(
                                (val) => val.name === item.name
                              ) || {}
                            ).qty + 1
                          );
                        }}
                      >
                        <View>
                          <AddIcon />
                        </View>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View style={styles.shadowButtonStyles}>
                      <RajBhogButton
                        // type="both"
                        label={"Add Dish"}
                        styles={{ height: verticalScale(23) }}
                        icon={addLoading === item.menu_id ? null : <AddIcon />}
                        onPress={() => handleAddToCart(item)}
                      />
                    </View>
                  )}
                </View>
              </View>
            </View>
          </RajBhogCard>
        </View>
      </Pressable>
    );
  };
  return (
    //availble restaurants
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        globalStyles.dashboardContentStyle,
        { backgroundColor: colors.backgroundColor },
      ]}
    >
      {requiredOutLet && (
        <View
          style={{
            width: "100%",
            gap: verticalScale(10),
            paddingTop: verticalScale(15),
          }}
        >
          <View style={{ width: "100%", gap: verticalScale(10) }}>
            <Image
              source={require("../../assets/Images/imagefood.png")}
              // source={{uri:requiredOutLet.image_3}}
              style={{
                width: "100%",
                height: scale(186),
                // resizeMode: "contain",
                // marginTop:verticalScale(10)
                borderRadius: verticalScale(16),
              }}
            ></Image>
            <View
              style={[
                styles.buttonStyles,
                { top: verticalScale(20), right: verticalScale(10) },
              ]}
            >
              <Text
                style={{ fontFamily: fontFamily, fontSize: verticalScale(12) }}
              >
                {requiredOutLet.station_code}
              </Text>
            </View>
            <View
              style={[
                styles.buttonStyles,
                { bottom: verticalScale(20), left: verticalScale(10) },
              ]}
            >
              <Text
                style={{
                  fontFamily: fontFamily,
                  fontSize: verticalScale(12),
                  paddingHorizontal: verticalScale(3),
                }}
              >
                Min Order :{" "}
                {requiredOutLet.minimum_order_value
                  ? parseInt(requiredOutLet.minimum_order_value).toFixed()
                  : 0}
                Rs
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // marginHorizontal:verticalScale(10),
              width: "100%",
            }}
          >
            <View
              style={{
                width: requiredOutLet.meal_type === "Both" ? "65%" : "100%",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.textStyles1}>
                {requiredOutLet.outlate_name}
              </Text>
              <Text style={styles.textStyles}>
                {requiredOutLet.short_description}
              </Text>
              <Text style={styles.textStyles}>
                Serving :{requiredOutLet.station_code}
              </Text>
            </View>
            {requiredOutLet.meal_type === "Both" && (
              <View
                style={{
                  alignItems: "flex-end",
                  gap: verticalScale(5),
                  width: "33%",
                }}
              >
                <RajBhogButton
                  required={true}
                  type="both"
                  icon={<CircleIcon />}
                  label="Veg"
                  onPress={() => setStatus(1)}
                  styles={styles.buttonStyles1}
                  labelStyles={styles.labelStyles}
                />
                <RajBhogButton
                  required={true}
                  type="both"
                  icon={<CircleIcon color="#FF0000" />}
                  label="Non Veg"
                  onPress={() => setStatus(0)}
                  styles={{
                    borderRadius: scale(50),
                    borderColor: "#FF0000",
                    borderWidth: verticalScale(1),
                    height: verticalScale(25),
                    width: "100%",
                  }}
                  labelStyles={styles.labelStyles1}
                />
              </View>
            )}
          </View>
        </View>
      )}
      {!loading ? (
        <FlatList
          style={{ marginTop: verticalScale(10) }}
          removeClippedSubviews
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View
              style={{
                height: verticalScale(400),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.textStyles1}>No Data Found</Text>
            </View>
          }
          // showsHorizontalScrollIndicator={false}
          // horizontal={true}
          data={
            menuList && menuList.FoodDetails[0] && menuList.FoodDetails[0].Menu
              ? menuList.FoodDetails[0].Menu
              : []
          }
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          // extraData={selectedId}
        />
      ) : (
        <View
          style={{
            width: "100%",
            height: verticalScale(250),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator color={colors.buttonColor} size="large" />
        </View>
      )}
    </ScrollView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  inputStyles: {
    height: verticalScale(50),
  },
  textStyles: {
    fontFamily: fontFamily,
    fontSize: verticalScale(10),
    fontWeigth: "400",
    lineHeight: verticalScale(12.6),
    color: "#5B5B5E",
  },
  textStyles1: {
    fontFamily: fontFamily,
    fontSize: verticalScale(18),
    fontWeigth: "600",
    lineHeight: verticalScale(25.2),
  },
  headingStyles: {
    alignSelf: "center",
    fontFamily: fontFamily,
    fontSize: verticalScale(22),
    fontWeight: "700",
    lineHeight: verticalScale(30.24),
  },
  paginationContainer: {
    position: "absolute",
    bottom: -35, // Adjust the vertical distance from the bottom
    alignSelf: "center",
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: colors.buttonColor,
  },
  buttonStyles: {
    paddingHorizontal: verticalScale(5),
    alignItems: "center",
    justifyContent: "center",
    minWidth: verticalScale(86),
    height: verticalScale(28),
    borderRadius: verticalScale(16),
    backgroundColor: "#FFFFFF",
    position: "absolute",
  },
  buttonStyles1: {
    borderColor: "#00EB34",
    borderWidth: verticalScale(1),
    height: verticalScale(25),
    width: "80%",
    borderRadius: scale(50),
  },
  labelStyles: {
    fontFamily: fontFamily,
    fontSize: verticalScale(14),
    alignSelf: "center",
    fontWeight: "400",
    color: "#00EB34",
  },
  labelStyles1: {
    fontFamily: fontFamily,
    fontSize: verticalScale(14),
    alignSelf: "center",
    fontWeight: "400",
    color: "#FF0000",
  },
  shadowButtonStyles: {
    position: "absolute",
    bottom: 4,

    height: verticalScale(23),
    width: scale(80),
    // Shadow properties for iOS
    shadowColor: "#000",
    backgroundColor: "white",
    borderRadius: verticalScale(16),
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    // Elevation for Android
    elevation: 5,
  },
});