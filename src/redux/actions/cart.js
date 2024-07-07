// import { API_URL } from "../../utils";
// import * as events from "../Events";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const addtocart = (data) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch(`${API_URL}/addtocart`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         const resError = await response.json();

//         if (resError && resError.message) {
//           throw new Error(resError.message);
//         }
//       } else {
//         const resData = await response.json();
//         const data = resData;

//         dispatch({ type: events.ADD_TO_CART, data: data });

//         // window.location.reload(false);
//         return data ? true : false;
//       }
//     } catch (err) {
//       throw new Error(err.message);
//     }
//   };
// };
// export const deleteFromCart = (data) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch(`${API_URL}/removecart`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         const resError = await response.json();

//         if (resError && resError.message) {
//           throw new Error(resError.message);
//         }
//       } else {
//         const resData = await response.json();
//         const data = resData;

//         dispatch({ type: events.DELETE_FROM_CART, data: data });

//         // window.location.reload(false);
//         return data ? true : false;
//       }
//     } catch (err) {
//       throw new Error(err.message);
//     }
//   };
// };
// //passenger Details
// export const passengerDetails = (data) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch(`${API_URL}/PassengerDetails`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         const resError = await response.json();

//         if (resError && resError.message) {
//           throw new Error(resError.message);
//         }
//       } else {
//         const resData = await response.json();
//         const data1 = resData.data;

//         dispatch({ type: events.PASSENGER_DETAILS, data: data1 });
//         await AsyncStorage.setItem("stationCode", data.station_code);
//         await AsyncStorage.setItem("outletId", data.outlet_id.toString());

//         // window.location.reload(false);
//         return data1 ? true : false;
//       }
//     } catch (err) {
//       throw new Error(err.message);
//     }
//   };
// };


import { API_URL } from "../../utils";
import * as events from "../Events";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const addtocart = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/addtocart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const resError = await response.json();

        if (resError && resError.message) {
          throw new Error(resError.message);
        }
      } else {
        const resData = await response.json();
        const data = resData;

        dispatch({ type: events.ADD_TO_CART, data: data });

        // window.location.reload(false);
        return data ? true : false;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };
};
export const deleteFromCart = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/removecart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const resError = await response.json();

        if (resError && resError.message) {
          throw new Error(resError.message);
        }
      } else {
        const resData = await response.json();
        const data = resData;

        dispatch({ type: events.DELETE_FROM_CART, data: data });

        // window.location.reload(false);
        return data ? true : false;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };
};
//passenger Details
export const passengerDetails = (data) => {
  console.log(data, "data");
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/PassengerDetails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const resError = await response.json();

        if (resError && resError.message) {
          throw new Error(resError.message);
        }
      } else {
        const resData = await response.json();
        const data1 = resData.data;

        dispatch({ type: events.PASSENGER_DETAILS, data: data1 });
        await AsyncStorage.setItem("stationCode", data.station_code);
        await AsyncStorage.setItem("outletId", data.outlet_id.toString());

        // window.location.reload(false);
        return data1 ? true : false;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };
};

//Apply Coupon
export const applyCoupan = (data) => {
  console.log(data, "data");
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/applycoupon`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const resError = await response.json();

        if (resError && resError.message) {
          throw new Error(resError.message);
        }
      } else {
        const resData = await response.json();
        const data1 = resData.data;

        dispatch({ type: events.APPLY_COUPON, data: data1 });

        // window.location.reload(false);
        return data1 ? data1 : false;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };
};
//submit order
export const submitOrder = (data) => {
  console.log(data, "data");
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/SubmitOrder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const resError = await response.json();

        if (resError && resError.message) {
          throw new Error(resError.message);
        }
      } else {
        const resData = await response.json();
        const data1 = resData.data;

        dispatch({ type: events.SUBMIT_ORDER, data: data1 });

        // window.location.reload(false);
        return data1 ? data1 : false;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };
};
