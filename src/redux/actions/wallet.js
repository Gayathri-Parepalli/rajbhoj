import { API_URL } from "../../utils";
import * as events from "../Events";

export const walletDetail = () => {
  const UserId = 5;

  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/walletList`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ UserId }),
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
        dispatch({ type: events.WALLET_DETAILS, data: data });

        // window.location.reload(false);
        return data ? true : false;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };
};
