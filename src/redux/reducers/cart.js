// import * as events from "../Events"

// const initialState={
//     cart:null,
//     passengerDetails:null
// }
// export const cartReducer = (state = initialState, action) => {
//     switch (action.type) {     
//       case events.ADD_TO_CART:
//         return {
//           ...state,
//           cart:action.data
//         };   
//       case events.PASSENGER_DETAILS:
//         return {
//           ...state,
//           passengerDetails:action.data
//         }  
//         case events.DELETE_FROM_CART:
//           return {
//             ...state
//           }
//       default:
//         return state;
//     }
//   };

import * as events from "../Events";

const initialState = {
  cart: null,
  passengerDetails: null,
  coupon: null,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case events.ADD_TO_CART:
      return {
        ...state,
        cart: action.data,
      };
    case events.APPLY_COUPON:
      return {
        ...state,
        coupon: action.data,
      };
    case events.PASSENGER_DETAILS:
      return {
        ...state,
        passengerDetails: action.data,
      };
    case events.DELETE_FROM_CART:
      return {
        ...state,
      };
      case events.SUBMIT_ORDER:
        return {
          ...state,
          orderDetails: action.data,
        };
    default:
      return state;
  }
};