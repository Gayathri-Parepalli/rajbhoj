import * as events from "../Events";

const initialState = {
  trackOrders: null,
  OrderDetails: null,
  rating: null,
  PreviousOrder: null,
  getPofileDetails : null
};
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case events.ORDER_TRACK:
      return {
        ...state,
        trackOrders: action.data,
      };
    case events.ORDER_DETAILS:
      return {
        ...state,
        OrderDetails: action.data,
      };
    case events.RATNG_AND_FEEDBACK:
      return {
        ...state,
        rating: action.data,
      };
    case events.PREVIOUS_ORDER:
      return {
        ...state,
        PreviousOrder: action.data,
      };
    case events.GET_PROFILE_DETAILS:
      return {
        ...state,
        getPofileDetails: action.data,
      };
    default:
      return state;
  }
};
