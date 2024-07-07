import * as events from "../Events";

const initialState = {
  walletDetails: null,
};

export const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case events.WALLET_DETAILS:
      return {
        ...state,
        walletDetails: action.data,
      };
    default:
      return state;
  }
};
