import { API_URL } from "../../utils";
import * as events from "../Events";

export const Ordertrack = () => {
  const order_id = 1304126835;

  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/Ordertrack`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ order_id }),
        // body: { order_id: order_id },
      });

      if (!response.ok) {
        const resError = await response.json();

        if (resError && resError.message) {
          throw new Error(resError.message);
        }
      } else {
        const resData = await response.json();
        const data = resData.data;
        console.log(data, "dattaaa");
        dispatch({ type: events.ORDER_TRACK, data: data });

        // window.location.reload(false);
        return data ? true : false;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };
};

export const OrderDetails = () => {
  const order_id = 1301902218;

  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/OrderDetails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ order_id }),
        // body: { order_id: order_id },
      });

      if (!response.ok) {
        const resError = await response.json();

        if (resError && resError.message) {
          throw new Error(resError.message);
        }
      } else {
        const resData = await response.json();
        const data = resData;
        console.log(data, "dattaaa");
        dispatch({ type: events.ORDER_DETAILS, data: data });

        // window.location.reload(false);
        return data ? true : false;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };
};

export const RatingAndFeedback = (data) => {
  console.log({ data }, "dattaaat");
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/rating`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UserId: 1,
          rating: data.rating,
          remarks: data.feedback,
        }),
        // body: { order_id: order_id },
      });

      if (!response.ok) {
        const resError = await response.json();

        if (resError && resError.message) {
          throw new Error(resError.message);
        }
      } else {
        const resData = await response.json();
        const data = resData;
        console.log(data, "dattaaa");
        dispatch({ type: events.RATNG_AND_FEEDBACK, data: data });

        // window.location.reload(false);
        return data ? data : false;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };
};

export const PreviousOrder = () => {

  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/PreviousOrder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UserId: 1,
        }),
        // body: { order_id: order_id },
      });

      if (!response.ok) {
        const resError = await response.json();

        if (resError && resError.message) {
          throw new Error(resError.message);
        }
      } else {
        const resData = await response.json();
        const data = resData.data;
        console.log(data, "dattaaa");
        dispatch({ type: events.PREVIOUS_ORDER, data: data });

        // window.location.reload(false);
        return data ? true : false;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };
};

export const GetProfileDetails = (userId, iflag) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/getProfileDetails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UserId: userId,
          iflag: iflag,
        }),
        // body: { order_id: order_id },
      });

      if (!response.ok) {
        const resError = await response.json();

        if (resError && resError.message) {
          throw new Error(resError.message);
        }
      } else {
        const resData = await response.json();
        const data = resData;
        console.log(data, "getProfileDetails");
        dispatch({ type: events.GET_PROFILE_DETAILS, data: data });

        // window.location.reload(false);
        return data ? data : false;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };
};

export const EditProfile = (data) => {
  console.log({ data }, "dattaaat");
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/rating`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UserId: 1,
          rating: data.rating,
          remarks: data.feedback,
        }),
        // body: { order_id: order_id },
      });

      if (!response.ok) {
        const resError = await response.json();

        if (resError && resError.message) {
          throw new Error(resError.message);
        }
      } else {
        const resData = await response.json();
        const data = resData;
        console.log(data, "dattaaa");
        dispatch({ type: events.RATNG_AND_FEEDBACK, data: data });

        // window.location.reload(false);
        return data ? data : false;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };
};
