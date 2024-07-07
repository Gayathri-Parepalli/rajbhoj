import React, { useRef, useState } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { useForm } from "react-hook-form";
import { CommonActions } from "@react-navigation/native";
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
import RajBhojOTPInput from "../../components/RajBhogOTPInput";
//redux
import { useSelector, useDispatch } from "react-redux";
import { submitOtp, getOtp } from "../../redux/actions/auth";
const OTP = ({ navigation }) => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  //activity indicator
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);
  // Array to store OTP digits
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  // Refs for OTP input fields
  const otpInputRefs = useRef(
    Array(6)
      .fill(0)
      .map(() => React.createRef())
  );
  const handleOtpChange = (index, value) => {
    // Check for backspace or delete
    if (value === "" && index > 0) {
      otpInputRefs.current[index - 1].focus();
    }
    // Update the OTP array with the new value
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input field if available
    if (index < otp.length - 1 && value !== "") {
      otpInputRefs.current[index + 1].focus();
    }
  };

  const handleSubmitOTP = async () => {
    // console.log(otp)
    const filledotp = otp.join("");
    if (filledotp && filledotp.length === 6) {
      setLoading(true);
      setError(false);
      console.log(user && user[0].mobile_no);
      try {
        await dispatch(submitOtp(user && user[0].mobile_no, otp.join("")));
        // navigation.navigate("Dashboard");
        setOtp(["", "", "", "", "", ""]);
        navigation.reset({
          index: 0,
          routes: [{ name: "Dashboard" }],
        });
      } catch (err) {
        navigation.navigate("LoginFailure");

        console.log(err);
      }
      setLoading(false);
    } else {
      setError(true);
    }
  };
  //redend otp
  const handleResedOtp = async (data) => {
    try {
      await dispatch(getOtp(data.phone));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={globalStyles.containerStyles}>
      <View style={globalStyles.loginPaddingView}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: verticalScale(24),
              fontWeight: "700",
              fontFamily: fontFamily,
              lineHeight: verticalScale(30.24),
            }}
          >
            Enter OTP
          </Text>
          <Text
            style={{
              fontSize: verticalScale(16),
              fontWeight: "400",
              fontFamily: fontFamily,
              marginBottom: verticalScale(30.97),
              lineHeight: verticalScale(20.16),
            }}
          >
            Verify your Phone number...
          </Text>
        </View>
        <View style={globalStyles.loginContentStyles}>
          <View
            style={{
              gap: verticalScale(20),
              alignItems: "center",
              width: "100%",
            }}
          >
            <RajBhojOTPInput
              error={error}
              otp={otp}
              otpInputRefs={otpInputRefs}
              handleOtpChange={handleOtpChange}
              label="Verify the code sent to your Phone:"
            />
            <RajBhogButton
              onPress={handleSubmitOTP}
              label={
                loading ? (
                  <ActivityIndicator
                    size="large"
                    color={colors.backgroundColor}
                  />
                ) : (
                  "Verify Code"
                )
              }
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
            <View style={{ width: "100%", alignItems: "flex-end" }}>
              <Text
                onPress={handleResedOtp}
                style={{
                  fontSize: verticalScale(14),
                  fontFamily: fontFamily,
                  fontWeight: "700",
                  lineHeight: verticalScale(17.6),
                }}
              >
                Resend code
              </Text>
            </View>

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
    </View>
  );
};

export default OTP;
