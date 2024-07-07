// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   ScrollView,
//   FlatList,
//   Modal,
//   Pressable,
//   TouchableOpacity,
// } from "react-native";
// import { useForm } from "react-hook-form";
// import { Entypo } from "@expo/vector-icons";
// //styles
// import { globalStyles } from "../../styles/styles";
// import { fontFamily } from "../../styles/fontStyles";
// import { verticalScale, scale } from "../Scaling";
// //components
// import RajBhogTopBar from "../../components/RajBhogTopBar";
// import RajBhogButton from "../../components/RajBhogButton";
// import { colors } from "../../styles/colors";
// import RajBhogInput from "../../components/RajBhogInput";
// import RajBhogCard from "../../components/RajBhogCard";

// //redux
// import { useDispatch, useSelector } from "react-redux";
// import { Ordertrack } from "../../redux/actions/profile.js";

// const TrackOrder = () => {
//   const [searchby, setSearchby] = useState("train");
//   const [modalVisible, setModalVisible] = useState(false);

//   const dispatch = useDispatch();
//   const trackOrders = useSelector((state) => state.profile.trackOrders);
//   console.log("trackOrders", { trackOrders });

//   useEffect(() => {
//     const getDashboardData = async () => {
//       try {
//         await dispatch(Ordertrack());
//       } catch (err) {
//         console.log(err.message);
//       }
//     };
//     getDashboardData();
//   }, [dispatch]);

//   const {
//     control,
//     formState: { errors },
//   } = useForm({ mode: "all" });

//   const openModal = () => {
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   const renderItem = ({ item }) => (
//     <View style={{ marginBottom: verticalScale(10) }}>
//       <View
//         style={{
//           marginTop: verticalScale(10),
//           width: "98%",
//           padding: verticalScale(1),
//         }}
//       >
//         <RajBhogCard
//           shadow={true}
//           children={
//             <View
//               style={{
//                 width: "100%",
//                 // padding:verticalScale(1)
//               }}
//             >
//               <View style={{ flexDirection: "row" }}>
//                 <View style={{ width: "30%" }}>
//                   <Image
//                     source={item.imageSource}
//                     // source={{ uri: item.image }}
//                     style={{
//                       width: scale(85),
//                       height: scale(85),
//                       resizeMode: "contain",
//                       // marginTop:verticalScale(10)
//                     }}
//                   />
//                 </View>
//                 <View
//                   style={{
//                     width: "70%",
//                     marginLeft: scale(15),
//                     padding: scale(4),
//                   }}
//                 >
//                   <Text
//                     style={{
//                       fontFamily: fontFamily,
//                       fontSize: scale(18),
//                       lineHeight: verticalScale(22),
//                       marginBottom: scale(5),
//                       fontWeight: "600",
//                     }}
//                   >
//                     {item.name}
//                   </Text>
//                   <Text
//                     style={{
//                       fontFamily: fontFamily,
//                       fontSize: scale(12),
//                       fontWeight: "500",
//                       lineHeight: verticalScale(15),
//                       marginBottom: scale(5),
//                       color: "#5B5B5E",
//                     }}
//                   >
//                     Serving : {item.station}
//                   </Text>
//                   <View style={{ marginTop: verticalScale(5) }}>
//                     <RajBhogButton
//                       onPress={() => setModalVisible(true)}
//                       label="Track order"
//                       styles={{
//                         backgroundColor: colors.buttonColor,
//                         width: "60%",
//                         height: "auto",
//                         padding: scale(2),
//                         borderRadius: verticalScale(6),
//                         justifyContent: "center",
//                         alignItems: "center",
//                       }}
//                       labelStyles={{
//                         color: colors.backgroundColor,
//                         fontSize: verticalScale(12),
//                         fontWeight: "400",
//                         // lineHeight: verticalScale(15),
//                       }}
//                     />
//                   </View>
//                 </View>
//               </View>
//             </View>
//           }
//           styles={styles.rajBhogCard}
//         />
//       </View>
//       <View style={styles.centeredView}>
//         <Modal
//           animationType="slide"
//           // transparent={true}
//           visible={modalVisible}
//           backgroundColor="blur"
//           backdropOpacity={0.9}
//           transparent={false}
//           style={{
//             boxShadow: "0px 7px 10px #0000000D",
//             backgroundColor: "#DE7A22",
//             opacity: 4,
//             // borderRadius: aw(14),
//           }}
//           onRequestClose={() => {
//             setModalVisible(!modalVisible);
//           }}
//         >
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <View
//                 style={{
//                   alignSelf: "flex-end",
//                   marginBottom: verticalScale(10),
//                 }}
//               >
//                 <TouchableOpacity
//                   onPress={() => setModalVisible(!modalVisible)}
//                 >
//                   <Entypo name="cross" size={verticalScale(30)} color="white" />
//                 </TouchableOpacity>
//               </View>
//               <View style={styles.textView}>
//                 <View style={{ width: "40%" }}>
//                   <Text style={styles.modalText}>OrderId </Text>
//                 </View>
//                 <View style={{ width: "60%" }}>
//                   <Text style={styles.modalText}>: {item?.id}</Text>
//                 </View>
//               </View>
//               <View style={styles.textView}>
//                 <View style={{ width: "40%" }}>
//                   <Text style={styles.modalText}>Order Date</Text>
//                 </View>
//                 <View style={{ width: "60%" }}>
//                   <Text style={styles.modalText}>:{item?.order_date}</Text>
//                 </View>
//               </View>
//               <View style={styles.textView}>
//                 <View style={{ width: "40%" }}>
//                   <Text style={styles.modalText}>Customer Details</Text>
//                 </View>
//                 <View style={{ width: "60%" }}>
//                   <Text style={styles.modalText}>: {item?.customer_name}</Text>
//                 </View>
//               </View>
//               <View style={styles.textView}>
//                 <View style={{ width: "40%" }}>
//                   <Text style={styles.modalText}>Train/Station</Text>
//                 </View>
//                 <View style={{ width: "60%" }}>
//                   <Text style={styles.modalText}>
//                     : {item.trainName}-{item.station}
//                   </Text>
//                 </View>
//               </View>
//               <View style={{ marginTop: verticalScale(10) }}>
//                 <TouchableOpacity
//                   style={[styles.button, styles.buttonClose]}
//                   onPress={() => setModalVisible(!modalVisible)}
//                 >
//                   <Text style={styles.textStyle}>Cancel</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </View>
//   );

//   return (
//     <View style={[globalStyles.containerStyles, { gap: verticalScale(10) }]}>
//       {/* <RajBhogTopBar /> */}
//       <ScrollView>
//         <View
//           style={{
//             marginLeft: scale(11),
//             marginRight: scale(11),
//             marginTop: verticalScale(10),
//           }}
//         >
//           <View>
//             <Text
//               style={{
//                 fontSize: scale(20),
//                 fontFamily: fontFamily,
//                 fontWeight: "600",
//                 lineHeight: 25,
//               }}
//             >
//               Track your order:
//             </Text>
//           </View>
//           <View style={{ marginBottom: verticalScale(15) }}>
//             <FlatList
//               data={trackOrders}
//               renderItem={renderItem}
//               keyExtractor={(item) => item.id}
//               style={styles.flatList}
//             />
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default TrackOrder;

// const styles = StyleSheet.create({
//   dataText: {
//     fontSize: scale(12),
//     fontWeight: "600",
//     fontFamily: fontFamily,
//     color: "#9796A1",
//     marginTop: verticalScale(7),
//     lineHeight: 15,
//   },
//   flatList: {
//     marginTop: verticalScale(5),
//     marginBottom: verticalScale(15),
//   },
//   rajBhogCard: {
//     width: "100%",
//     height: "auto",
//     flexDirection: "row",
//     padding: 15,
//     borderRadius: 16,
//     backgroundColor: "white",
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     // marginTop: 22,
//   },
//   modalView: {
//     margin: scale(10),
//     width: "80%",
//     height: "auto",
//     backgroundColor: "#DE7A22",
//     borderRadius: 10,
//     padding: scale(10),
//     alignItems: "flex-start",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 10,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     backgroundColor: "white",
//   },
//   textStyle: {
//     color: "#DE7A22",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   // modalText: {
//   //   marginBottom: 15,
//   //   textAlign: "center",
//   // },
//   modalText: {
//     fontFamily: fontFamily,
//     fontWeight: "500",
//     fontSize: scale(12),
//     lineHeight: verticalScale(18),
//     color: "white",
//   },
//   textView: {
//     justifyContent: "space-between",
//     flexDirection: "row",
//     width: "100%",
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
  Modal,
  Pressable,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useForm } from "react-hook-form";
import { Entypo } from "@expo/vector-icons";
//styles
import { globalStyles } from "../../styles/styles";
import { fontFamily } from "../../styles/fontStyles";
import { verticalScale, scale } from "../Scaling";
//components
import RajBhogTopBar from "../../components/RajBhogTopBar";
import RajBhogButton from "../../components/RajBhogButton";
import { colors } from "../../styles/colors";
import RajBhogInput from "../../components/RajBhogInput";
import RajBhogCard from "../../components/RajBhogCard";

//redux
import { useDispatch, useSelector } from "react-redux";
import { Ordertrack } from "../../redux/actions/profile.js";

const TrackOrder = () => {
  const [searchby, setSearchby] = useState("train");
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const trackOrders = useSelector((state) => state.profile.trackOrders);
  console.log("trackOrders", { trackOrders });

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        await dispatch(Ordertrack());
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    getDashboardData();
  }, [dispatch]);

  const {
    control,
    formState: { errors },
  } = useForm({ mode: "all" });

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: verticalScale(10) }}>
      <View
        style={{
          marginTop: verticalScale(10),
          width: "98%",
          padding: verticalScale(1),
        }}
      >
        <RajBhogCard
          shadow={true}
          children={
            <View
              style={{
                width: "100%",
                // padding:verticalScale(1)
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: "30%" }}>
                  <Image
                    source={item.imageSource}
                    // source={{ uri: item.image }}
                    style={{
                      width: scale(85),
                      height: scale(85),
                      resizeMode: "contain",
                      // marginTop:verticalScale(10)
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "70%",
                    marginLeft: scale(15),
                    padding: scale(4),
                  }}
                >
                  <Text
                    style={{
                      fontFamily: fontFamily,
                      fontSize: scale(18),
                      lineHeight: verticalScale(22),
                      marginBottom: scale(5),
                      fontWeight: "600",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily,
                      fontSize: scale(12),
                      fontWeight: "500",
                      lineHeight: verticalScale(15),
                      marginBottom: scale(5),
                      color: "#5B5B5E",
                    }}
                  >
                    Serving : {item.station}
                  </Text>
                  <View style={{ marginTop: verticalScale(5) }}>
                    <RajBhogButton
                      onPress={() => setModalVisible(true)}
                      label="Track order"
                      styles={{
                        backgroundColor: colors.buttonColor,
                        width: "60%",
                        height: "auto",
                        padding: scale(2),
                        borderRadius: verticalScale(6),
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      labelStyles={{
                        color: colors.backgroundColor,
                        fontSize: verticalScale(12),
                        fontWeight: "400",
                        // lineHeight: verticalScale(15),
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          }
          styles={styles.rajBhogCard}
        />
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          // transparent={true}
          visible={modalVisible}
          backgroundColor="blur"
          backdropOpacity={0.9}
          transparent={false}
          style={{
            boxShadow: "0px 7px 10px #0000000D",
            backgroundColor: "#DE7A22",
            opacity: 4,
            // borderRadius: aw(14),
          }}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  alignSelf: "flex-end",
                  marginBottom: verticalScale(10),
                }}
              >
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Entypo name="cross" size={verticalScale(30)} color="white" />
                </TouchableOpacity>
              </View>
              <View style={styles.textView}>
                <View style={{ width: "40%" }}>
                  <Text style={styles.modalText}>OrderId </Text>
                </View>
                <View style={{ width: "60%" }}>
                  <Text style={styles.modalText}>: {item?.id}</Text>
                </View>
              </View>
              <View style={styles.textView}>
                <View style={{ width: "40%" }}>
                  <Text style={styles.modalText}>Order Date</Text>
                </View>
                <View style={{ width: "60%" }}>
                  <Text style={styles.modalText}>:{item?.order_date}</Text>
                </View>
              </View>
              <View style={styles.textView}>
                <View style={{ width: "40%" }}>
                  <Text style={styles.modalText}>Customer Details</Text>
                </View>
                <View style={{ width: "60%" }}>
                  <Text style={styles.modalText}>: {item?.customer_name}</Text>
                </View>
              </View>
              <View style={styles.textView}>
                <View style={{ width: "40%" }}>
                  <Text style={styles.modalText}>Train/Station</Text>
                </View>
                <View style={{ width: "60%" }}>
                  <Text style={styles.modalText}>
                    : {item.trainName}-{item.station}
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: verticalScale(10) }}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );

  return (
    <View style={[globalStyles.containerStyles, { gap: verticalScale(10) }]}>
      {/* <RajBhogTopBar /> */}
      <RajBhogTopBar title={"Track Your Order"} />
      <ScrollView>
        <View
          style={{
            marginLeft: scale(11),
            marginRight: scale(11),
            marginTop: verticalScale(10),
          }}
        >
          <View>
            <Text
              style={{
                fontSize: scale(20),
                fontFamily: fontFamily,
                fontWeight: "600",
                lineHeight: 25,
              }}
            >
              Track your order:
            </Text>
          </View>
          <View style={{ marginBottom: verticalScale(15) }}>
            {loading && (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: verticalScale(50),
                }}
              >
                <ActivityIndicator size="large" color="#DE7A22" />
              </View>
            )}
            {!loading && (
              <FlatList
                data={trackOrders}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.flatList}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TrackOrder;

const styles = StyleSheet.create({
  dataText: {
    fontSize: scale(12),
    fontWeight: "600",
    fontFamily: fontFamily,
    color: "#9796A1",
    marginTop: verticalScale(7),
    lineHeight: 15,
  },
  flatList: {
    marginTop: verticalScale(5),
    marginBottom: verticalScale(15),
  },
  rajBhogCard: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    padding: 15,
    borderRadius: 16,
    backgroundColor: "white",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    margin: scale(10),
    width: "80%",
    height: "auto",
    backgroundColor: "#DE7A22",
    borderRadius: 10,
    padding: scale(10),
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "white",
  },
  textStyle: {
    color: "#DE7A22",
    fontWeight: "bold",
    textAlign: "center",
  },
  // modalText: {
  //   marginBottom: 15,
  //   textAlign: "center",
  // },
  modalText: {
    fontFamily: fontFamily,
    fontWeight: "500",
    fontSize: scale(12),
    lineHeight: verticalScale(18),
    color: "white",
  },
  textView: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
});



