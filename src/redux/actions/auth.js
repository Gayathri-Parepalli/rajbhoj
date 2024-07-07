import { API_URL } from "../../utils";
import * as events from "../Events";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getOtp = (phone) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/get_otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile: phone }),
      });

      if (!response.ok) {
        const resError = await response.json();

        if (resError && resError.message) {
          throw new Error(resError.message);
        }
      } else {
        const resData = await response.json();
        const user = resData.data && resData.data.user;
        dispatch({ type: events.GET_OTP, data: user });
        return user ? true : false;
      }
    } catch (err) {
      console.log("rr");
      throw new Error(err.message);
    }
  };
};

//submitotp
export const submitOtp = (phone, otp) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile: phone, otp: otp }),
      });

      if (!response.ok) {
        const resError = await response.json();

        if (resError && resError.message) {
          throw new Error(resError.message);
        }
      } else {
        const resData = await response.json();
        const user = resData.data && resData.data.user;
        console.log(resData.data, "USER");
        console.log(resData.token, "token");
        await AsyncStorage.setItem("token", resData.data.token);
        await AsyncStorage.setItem(
          "userId",
          resData.data.user[0].customer_id.toString()
        );
        dispatch({ type: events.SUBMIT_OTP, data: user });

        // window.location.reload(false);
        return user ? true : false;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };
};
