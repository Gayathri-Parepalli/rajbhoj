import { API_URL } from "../../utils";
import * as events from "../Events";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const getCoupons = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/dashboard`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const resError = await response.json();

        if (resError && resError.message) {
          throw new Error(resError.message);
        }
      } else {
        const resData = await response.json();
        const data = resData.data;

        dispatch({ type: events.GET_COUPONS, data: data });

        // window.location.reload(false);
        return data ? true : false;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };
};
export const search = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${API_URL}/restaurantByPnr?pnr=${data.pnr}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // body:JSON.stringify(data)
        }
      );

      if (!response.ok) {
        const resError = await response.json();

        if (resError && resError.message) {
          throw new Error(resError.message);
        }
      } else {
        const resData = await response.json();
        const data1 = resData.data;

        dispatch({ type: events.SEARCH, data: data1 });
        await AsyncStorage.setItem("pnr",data.pnr)
        // window.location.reload(false);
        return data1 ? true : false;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };
};
export const getbyStation = (data,status) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${API_URL}/pnrResturantMenu?status=${status}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify(data)
        }
      );

      if (!response.ok) {
        const resError = await response.json();

        if (resError && resError.message) {
          throw new Error(resError.message);
        }
      } else {
        const resData = await response.json();
        const data = resData.data;

        dispatch({ type: events.SEARCH_BY_STATION, data: data });

        // window.location.reload(false);
        return data ? true : false;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };
};
