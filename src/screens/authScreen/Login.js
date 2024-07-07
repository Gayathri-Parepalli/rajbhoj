import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Image,
  ActivityIndicator,
  Alert,
  ScrollView,
} from "react-native";
import { useForm } from "react-hook-form";
//styles
import { fontFamily } from "../../styles/fontStyles";
//scale
import { verticalScale, scale } from "../Scaling";
//components
import RajBhogCard from "../../components/RajBhogCard";
import RajBhogButton from "../../components/RajBhogButton";
import RajBhogInput from "../../components/RajBhogInput";
import { globalStyles } from "../../styles/styles";
import { colors } from "../../styles/colors";
//redux
import { useDispatch } from "react-redux";
import { getOtp } from "../../redux/actions/auth";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  //activeindicator
  const [loading, setLoading] = useState(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "all" });

  //handlesubmit phone
  const handlesubmitPhone = async (data) => {
    setLoading(true);
    try {
      await dispatch(getOtp(data.phone));
      navigation.navigate("Otp");
      // reset();
    } catch (err) {
      Alert.alert("Error", err.message);
      console.log(err);
    }
    setLoading(false);
  };
  // const checkToken = async () => {
  //   try {
  //     const storedToken = await AsyncStorage.getItem("token");
  //     const onboarding = await AsyncStorage.getItem("onboarding");
  //     if (onboarding) {
  //       if (storedToken) {
  //         // navigation.navigate("Dashboard")
  //         navigation.reset({
  //           index: 0,
  //           routes: [{ name: "Dashboard" }],
  //         });
  //         // setUser(storedToken);
  //         console.log("Dashboard");
  //       } else {
  //         navigation.reset({
  //           index: 0,
  //           routes: [{ name: "AuthScreenNavigation" }],
  //         });
  //         // navigation.navigate("AuthScreenNavigation");
  //         console.log("AuthScreenNavigation");
  //         // setUser(null); console.log("Dashboard")
  //       }
  //     } else {
  //       navigation.reset({
  //         index: 0,
  //         routes: [{ name: "onBoardingNavigation" }],
  //       });
  //       // navigation.navigate("onBoardingNavigation")
  //     }
  //   } catch (error) {
  //     console.error("Error checking token:", error);
  //   }
  // };
  // useEffect(() => {
  //   console.log("rendered");
  //   checkToken();
  // }, []);
  return (
    <View style={globalStyles.containerStyles}>
      <ScrollView>
        <View style={globalStyles.loginPaddingView}>
          <Text
            style={{
              fontSize: verticalScale(24),
              fontWeight: "700",
              fontFamily: fontFamily,
              marginBottom: verticalScale(30.97),
              lineHeight: verticalScale(30.24),
            }}
          >
            Log In
          </Text>
          <View style={globalStyles.loginContentStyles}>
            <RajBhogCard
              styles={{
                backgroundColor: "#DE7A22",
                height: verticalScale(48.28),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  paddingHorizontal: verticalScale(11.09),
                  width: "99%",
                }}
              >
                <RajBhogButton
                  label="As User"
                  styles={{
                    width: "50%",
                    height: verticalScale(30),
                    backgroundColor: "#FFFFFF",
                  }}
                  labelStyles={{
                    fontSize: verticalScale(16),
                    fontWeight: "400",
                  }}
                />
                <RajBhogButton
                  label="As Vendor"
                  styles={{
                    width: "50%",
                    height: verticalScale(30),
                  }}
                  labelStyles={{
                    color: "#FFFFFF",
                    fontSize: verticalScale(16),
                    fontWeight: "400",
                  }}
                />
              </View>
            </RajBhogCard>
            <View
              style={{
                paddingHorizontal: verticalScale(15),
                gap: verticalScale(20),
                alignItems: "center",
                width: "100%",
                marginTop: verticalScale(10),
              }}
            >
              <RajBhogInput
                keyboardType={"numeric"}
                type="phone"
                control={control}
                name="phone"
                label="Phone Number"
                maxLength={10}
                placeholder="9876545675"
                rules={{
                  required: {
                    value: true,
                    message: "Phone Number Required",
                  },
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Please Enter 10 digit phone Number",
                  },
                }}
                invalid={errors.phone ? true : false}
                error={errors.phone ? errors.phone.message : ""}
              />
              <RajBhogButton
                label={
                  loading ? (
                    <ActivityIndicator
                      color={colors.backgroundColor}
                      size="large"
                    />
                  ) : (
                    "Send OTP"
                  )
                }
                onPress={handleSubmit(handlesubmitPhone)}
                styles={{
                  width: "100%",
                  height: verticalScale(40),
                  borderRadius: scale(16),
                  backgroundColor: colors.buttonColor,
                }}
                labelStyles={{
                  color: "#FFFFFF",
                  fontSize: verticalScale(16),
                  fontWeight: "700",
                }}
              />
              <RajBhogCard
                styles={{
                  height: verticalScale(45),
                  backgroundColor: colors.buttonColor,
                  borderRadius: scale(16),
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    width: "100",
                  }}
                >
                  <Text
                    style={{
                      color: colors.backgroundColor,
                      fontFamily: fontFamily,
                      fontSize: verticalScale(12),
                      fontWeight: "700",
                    }}
                  >
                    Want to sign up as partner?{" "}
                  </Text>
                  <Text
                    style={{
                      color: colors.backgroundColor,
                      fontFamily: fontFamily,
                      fontSize: verticalScale(12),
                      fontWeight: "700",
                    }}
                  >
                    CLICK HERE
                  </Text>
                </View>
              </RajBhogCard>
              <Image
                source={require("../../assets/Images/appIcon.png")}
                style={{
                  width: scale(179.08),
                  height: scale(185),
                  resizeMode: "contain",
                  marginTop: verticalScale(10),
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
