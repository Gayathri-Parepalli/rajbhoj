import * as events from "../Events";

const initialState = {
  coupons: null,
  restaurant: null,
  menuList:null,
};
export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case events.GET_COUPONS:
      return {
        ...state,
        coupons: action.data,
      };
    case events.SEARCH:
      return {
        ...state,
        restaurant: action.data,
      };
      case events.SEARCH_BY_STATION:
        return {
          ...state,
          menuList:action.data
        };
        case events.ADD_TO_CART:
          return {
            ...state,
          }
    default:
      return state;
  }
};
