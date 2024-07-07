import * as events from "../Events"

const initialState={
    user:null
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {     
      case events.GET_OTP:
        return {
          ...state,
          user:action.data
        };      
      default:
        return state;
    }
  };