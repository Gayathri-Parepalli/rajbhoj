import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import { authReducer } from "./reducers/auth";
import { dashboardReducer } from "./reducers/dashboard";
import { cartReducer } from "./reducers/cart";
import { profileReducer } from "./reducers/profile";
import { walletReducer } from "./reducers/wallet";

const reducer = combineReducers({
  auth: authReducer,
  dashboard:dashboardReducer,
  cart:cartReducer,
  profile: profileReducer,
  wallet: walletReducer,
});
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsDenylist, actionsCreators and other options
});
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;