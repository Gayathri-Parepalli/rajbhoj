import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Alert,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { set, useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RazorpayCheckout from 'react-native-razorpay'
//styles
import { globalStyles } from "../../styles/styles";
import { fontFamily } from "../../styles/fontStyles";
import { verticalScale, scale } from "../Scaling";
import { colors } from "../../styles/colors";
//components
import RajBhogTopBar from "../../components/RajBhogTopBar";
import RajBhogButton from "../../components/RajBhogButton";
import RajBhogInput from "../../components/RajBhogInput";
import RajBhogCard from "../../components/RajBhogCard";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
  passengerDetails,
  addtocart,
  deleteFromCart,
  applyCoupan,
  submitOrder,
} from "../../redux/actions/cart";
//svg
import GroupIcon from "../../svg/GroupIcon";
import AddIcon from "../../svg/AddIcon";
import MinusIcon from "../../svg/MinusIcon";
// import { TouchableOpacity } from "react-native-gesture-handler";

const Cart = () => {
  // console.log(RazorpayCheckout)
  // const razorpayInstance = new RazorpayCheckout();
  // console.log(razorpayInstance)
  // RazorpayCheckout.setKey('rzp_test_eWAmQvZIK25FWa');

  // RazorpayCheckout.init({
  //   key: 'rzp_test_eWAmQvZIK25FWa',
  // });
  let razorpayKeyId = "rzp_test_eWAmQvZIK25FWa"
  // let razorpayKeySecret = RAZORPAY_KEY_SECRET
  console.log(RazorpayCheckout)
  const userDetails = useSelector((state) => state.cart.passengerDetails);
  // const discount = useSelector((state) => state.cart.coupon);
  const [couponError, setCouponError] = useState("");
  const [coupanLoading, setCoupanLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [addLoading, setAddLoading] = useState("");
  const [discount, setDiscount] = useState(null);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });
  const {
    control: control1,
    formState: { errors: errors1 },
    handleSubmit: handleSubmit1,
  } = useForm({ mode: "all" });
  const dispatch = useDispatch();

  //fetch passengerDetails
  const fetchPassengerDetails = async () => {
    setLoading(true);
    const pnr = await AsyncStorage.getItem("pnr");
    const userId = await AsyncStorage.getItem("userId");
    const stationcode = await AsyncStorage.getItem("stationCode");
    const outlet_id = await AsyncStorage.getItem("outletId");
    if (stationcode && outlet_id) {
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
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchPassengerDetails();
  }, []);
  const handleAddToCart = async (item, qty) => {
    setAddLoading(item.menu_id);
    const id = await AsyncStorage.getItem("userId");
    const pnr = await AsyncStorage.getItem("pnr");

    const stationcode = await AsyncStorage.getItem("stationCode");
    const outlet_id = await AsyncStorage.getItem("outletId");
    try {
      await dispatch(
        addtocart({
          productId: item.menu_id,
          rate: parseInt(item.rate),
          qty: 1,
          UserId: id,
        })
      );
      await dispatch(
        passengerDetails({
          UserId: id,
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
    const userId = await AsyncStorage.getItem("userId");
    const pnr = await AsyncStorage.getItem("pnr");
    const stationcode = await AsyncStorage.getItem("stationCode");
    const outlet_id = await AsyncStorage.getItem("outletId");
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
  //handleApply coupan
  const handleApplyCoupon = async (data) => {
    setCoupanLoading(true);
    const userId = await AsyncStorage.getItem("userId");
    // const pnr = await AsyncStorage.getItem("pnr");
    // const stationcode = await AsyncStorage.getItem("stationCode");
    // const outlet_id = await AsyncStorage.getItem("outletId");
    try {
      const data1 = await dispatch(
        applyCoupan({ UserId: userId, Coupon: data.coupon })
      );

      setDiscount(data1);
      setCouponError("");
    } catch (err) {
      console.log(err);
      setCouponError("Invaild Coupon Code");
      setDiscount(null);
    }
    setCoupanLoading(false);
  };
  //submit order
  const handleProceedToPayment = async (data) => {
    setPaymentLoading(true);
    const userId = await AsyncStorage.getItem("userId");
    const pnr = await AsyncStorage.getItem("pnr");
    const stationcode = await AsyncStorage.getItem("stationCode");
    const outlet_id = await AsyncStorage.getItem("outletId");
    try {
   const response= await dispatch(
        submitOrder({
          UserId: userId,
          outlets_id: outlet_id,
          email: data.email,
          name: data.name,
          pnr_no: pnr,
          mobile: "9912519418",
          station_id:userDetails.station_id,
          coach: userDetails.coach,
          berth: userDetails.berth,
          train_no: userDetails.train_id,
          train_name: userDetails.train_name,
          station_name: userDetails.station_name,
          station_code: userDetails.station_code,
          hd_discount_amount: discount
            ? discount.discount
            : userDetails.discount,
          noteForMessage: "CBJ",
          bookflag: "5",
          shipping_charge: discount
            ? discount.delivery_fees
            : userDetails.delivery_fees,
          delivery_time: userDetails.schArrivalTime,
          delivery_date: userDetails.schArrivalDate,
        })
      )
   if(response){
    const options = {
      description: 'Payment for placingorder',
      image: 'https://rajbhogkhana.com/images/logo.png',
      currency: 'INR',
      key:razorpayKeyId,
      order_id: 'order_DslnoIgkIDL8Zt',
      amount:discount
        ? discount.total_payble.toFixed(2)*100
        : userDetails.total_payble.toFixed(2)*100,
      external: {
        wallets: ['paytm']
      },
      name: 'Hello',

      prefill: {
          email: data.email,
          name: data.name,
          contact:"9912519418"
      },
      theme: {color: '#F37254'}
    }
    console.log(options)
   RazorpayCheckout.open(options)
    .then((data) => {
      // handle success
      console.log(`Payment success: ${data.razorpay_payment_id}`);
    })
   
   }
    } catch (err) {
      console.log(err);
      alert(err);
    }
    setPaymentLoading(false);
  };
  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={{
          marginBottom: verticalScale(15),
          paddingHorizontal: verticalScale(2),
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
              minHeight: verticalScale(71.37),
              paddingHorizontal: verticalScale(10),
              alignItems: "flex-start",
              paddingTop: verticalScale(10),
              paddingBottom: verticalScale(10),

              // justifyContent: "flex-start",
            }}
          >
            <View style={{ gap: verticalScale(5), width: "100%" }}>
              <Text style={styles.textStyles}>{item.name}</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    gap: verticalScale(5),
                    alignItems: "center",
                  }}
                >
                  <GroupIcon
                    color={item.veg_status === 0 ? "#FF0000" : "#00EB34"}
                  />
                  <Text style={[styles.textStyles, { color: "#5B5B5E" }]}>
                    {item.rate}
                  </Text>
                </View>
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
                      <MinusIcon color={colors.backgroundColor} />
                    </View>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: fontFamily,
                      fontSize: verticalScale(9),
                      fontWeight: "700",
                      color: colors.backgroundColor,
                    }}
                  >
                    {addLoading === item.menu_id ? (
                      <ActivityIndicator color={colors.backgroundColor} />
                    ) : (
                      `Qty ${item.qty}`
                    )}
                  </Text>
                  <TouchableOpacity
                    onPress={() => handleAddToCart(item)}
                    style={{ padding: verticalScale(5) }}
                  >
                    <View>
                      <AddIcon color={colors.backgroundColor} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </RajBhogCard>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={[globalStyles.containerStyles, { gap: verticalScale(10) }]}>
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
              Checkout to order...
            </Text>
            <Text style={styles.dataText}>
              Total items: {userDetails?.CartDetails.length || 0}
            </Text>
          </View>
          <View style={{ marginTop: verticalScale(15) }}>
            <RajBhogCard
              children={
                <View
                  style={{
                    padding: 10,
                  }}
                >
                  <View style={{ width: "100%", padding: scale(5) }}>
                    <Text
                      style={{
                        fontSize: scale(14),
                        color: "white",
                        fontFamily: fontFamily,
                        fontWeight: "400",
                      }}
                    >
                      PNR : {userDetails && userDetails.pnr_no}
                    </Text>
                    <Text
                      style={{
                        fontSize: scale(14),
                        color: "white",
                        fontFamily: fontFamily,
                        fontWeight: "400",
                      }}
                    >
                      Train Name : {userDetails && userDetails.train_name}
                    </Text>
                    <Text
                      style={{
                        fontSize: scale(14),
                        color: "white",
                        fontFamily: fontFamily,
                        fontWeight: "400",
                      }}
                    >
                      Station : {userDetails && userDetails.station_name}
                    </Text>
                  </View>
                </View>
              }
              styles={{
                backgroundColor: "#DE7A22",
                height: "auto",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            />
          </View>
          <View style={{ marginTop: verticalScale(15) }}>
            <Text
              style={{
                fontSize: scale(20),
                fontFamily: fontFamily,
                fontWeight: "600",
                lineHeight: 25,
              }}
            >
              Add more details
            </Text>
            <View style={{ marginTop: verticalScale(10) }}>
              <RajBhogInput
                control={control1}
                name="name"
                placeholder="Add your name"
                styles={styles.inputStyles}
                rules={{
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                }}
                invalid={errors1.name ? true : false}
                error={errors1.name ? errors1.name.message : ""}
              />
            </View>
            <View style={{ marginTop: verticalScale(10) }}>
              <RajBhogInput
                control={control1}
                name="email"
                placeholder="Add your Email id"
                styles={styles.inputStyles}
                rules={{
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                }}
                invalid={errors1.email ? true : false}
                error={errors1.email ? errors1.email.message : ""}
              />
            </View>
            <View style={{ marginTop: verticalScale(10) }}>
              <RajBhogInput
                control={control1}
                multiline={true}
                name="Remarks"
                placeholder="Add remarks"
                styles={styles.remarkStyle}
              />
            </View>
          </View>
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
              data={userDetails ? userDetails.CartDetails : []}
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
          {userDetails && (
            <View
              style={{
                gap: verticalScale(10),
                paddingBottom: verticalScale(50),
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily,
                  fontSize: verticalScale(20),
                  fontWeight: "600",
                  lineHeight: verticalScale(25.2),
                }}
              >
                Apply coupon code
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <View style={{ width: "70%" }}>
                  <RajBhogInput
                    control={control}
                    name="coupon"
                    placeholder="Enter Coupon Code"
                    styles={{
                      height: verticalScale(45),
                      padding: scale(10),
                      fontSize: scale(16),
                      width: "100%",
                    }}
                    rules={{
                      required: {
                        value: true,
                        message: "Coupon Code is required",
                      },
                    }}
                    invalid={errors.coupon ? true : false}
                    error={errors.coupon ? errors.coupon.message : ""}
                  />
                  {couponError ? (
                    <Text
                      style={{
                        color: "red",
                        fontFamily: fontFamily,
                        fontSize: verticalScale(12),
                        paddingTop: verticalScale(5),
                      }}
                    >
                      {couponError}
                    </Text>
                  ) : null}
                </View>
                <View
                  style={{
                    width: "25%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <RajBhogButton
                    onPress={handleSubmit(handleApplyCoupon)}
                    label={
                      coupanLoading ? (
                        <ActivityIndicator
                          color={colors.backgroundColor}
                          size="large"
                        />
                      ) : (
                        "Apply"
                      )
                    }
                    styles={{
                      backgroundColor: colors.buttonColor,
                      // width: "100%",
                      borderRadius: verticalScale(17.75),
                      height: verticalScale(40),
                    }}
                    labelStyles={{
                      fontSize: verticalScale(14.75),
                      fontWeight: "700",
                      // lineHeight: verticalScale(22.36),
                      color: colors.backgroundColor,
                    }}
                  />
                </View>
              </View>
              {discount && (
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: verticalScale(16),
                    fontWeight: "400",
                    lineHeight: verticalScale(20.16),
                    color: "green",
                  }}
                >
                  {/* Find more coupon codes */}
                  Coupon Applied Successfully
                </Text>
              )}
              <View
                style={{
                  paddingTop: verticalScale(10),
                  gap: verticalScale(10),
                }}
              >
                <Text
                  style={{
                    fontFamily: fontFamily,
                    fontSize: verticalScale(20),
                    fontWeight: "600",
                    lineHeight: verticalScale(25.2),
                  }}
                >
                  Order Summary
                </Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: fontFamily,
                      fontSize: verticalScale(16),
                      fontWeight: "400",
                      fontFamily: fontFamily,
                    }}
                  >
                    order amount
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily,
                      fontSize: verticalScale(16),
                      fontWeight: "400",
                      fontFamily: fontFamily,
                    }}
                  >
                    {discount
                      ? discount.order_amount.toFixed(2)
                      : userDetails.order_amount.toFixed(2)}{" "}
                    Rs.
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: fontFamily,
                      fontSize: verticalScale(16),
                      fontWeight: "400",
                      fontFamily: fontFamily,
                    }}
                  >
                    Tax
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily,
                      fontSize: verticalScale(16),
                      fontWeight: "400",
                      fontFamily: fontFamily,
                    }}
                  >
                    {discount
                      ? discount.tax_amount.toFixed(2)
                      : userDetails.tax_amount.toFixed(2)}{" "}
                    Rs.
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: fontFamily,
                      fontSize: verticalScale(16),
                      fontWeight: "400",
                      fontFamily: fontFamily,
                    }}
                  >
                    Delivery Fess
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily,
                      fontSize: verticalScale(16),
                      fontWeight: "400",
                      fontFamily: fontFamily,
                    }}
                  >
                    {discount
                      ? discount.delivery_fees.toFixed(2)
                      : userDetails.delivery_fees.toFixed(2)}{" "}
                    Rs.
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: fontFamily,
                      fontSize: verticalScale(16),
                      fontWeight: "400",
                      fontFamily: fontFamily,
                    }}
                  >
                    Discount
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily,
                      fontSize: verticalScale(16),
                      fontWeight: "400",
                      fontFamily: fontFamily,
                    }}
                  >
                    {discount
                      ? discount.discount.toFixed(2)
                      : userDetails.discount.toFixed(2)}{" "}
                    Rs.
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: fontFamily,
                      fontSize: verticalScale(16),
                      fontWeight: "700",
                      fontFamily: fontFamily,
                      coloe: "#5B5B5E",
                    }}
                  >
                    Total amount payable
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily,
                      fontSize: verticalScale(16),
                      fontWeight: "700",
                      fontFamily: fontFamily,
                    }}
                  >
                    {discount
                      ? discount.total_payble.toFixed(2)
                      : userDetails.total_payble.toFixed(2)}{" "}
                    Rs.
                  </Text>
                </View>
                <View style={{ marginTop: verticalScale(20) }}>
                  <RajBhogButton
                    label={
                      paymentLoading ? (
                        <ActivityIndicator
                          color={colors.backgroundColor}
                          size="large"
                        />
                      ) : (
                        "Proceed To Payment"
                      )
                    }
                    onPress={handleSubmit1(handleProceedToPayment)}
                    styles={{
                      backgroundColor: colors.buttonColor,
                      width: "100%",
                      borderRadius: verticalScale(17.75),
                      // height: verticalScale(50),
                      height: verticalScale(50),
                    }}
                    labelStyles={{
                      fontSize: verticalScale(17.75),
                      fontWeight: "700",
                      lineHeight: verticalScale(22.36),
                      color: colors.backgroundColor,
                    }}
                  />
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Cart;

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
    // marginTop: verticalScale(5),
  },
  inputStyles: {
    height: verticalScale(52),
    padding: scale(10),
    fontSize: scale(16),
    lineHeight: scale(20),
  },
  remarkStyle: {
    height: verticalScale(195),
    padding: scale(10),
    fontSize: scale(16),
    lineHeight: scale(20),
    textAlignVertical: "top",
  },
  textStyles: {
    fontFamily: fontFamily,
    fontSize: verticalScale(12),
    fontWeigth: "600",
    lineHeight: verticalScale(17.6),
    color: "#000000",
  },
  textStyles1: {
    fontFamily: fontFamily,
    fontSize: verticalScale(18),
    fontWeigth: "600",
    lineHeight: verticalScale(25.2),
  },
  shadowButtonStyles: {
    height: verticalScale(25),
    width: scale(86),
    // Shadow properties for iOS
    shadowColor: "#000",
    backgroundColor: colors.buttonColor,
    borderRadius: verticalScale(16),
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    // Elevation for Android
    elevation: 5,
  },
});
