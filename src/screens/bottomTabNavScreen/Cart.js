

// // Routes.js
// import React from "react";
// import { View } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";
// //componets
// import RajBhogTopBar from "../../components/RajBhogTopBar";
// import Dashboard from "../dashboard/Index";
// import BulkOrderForm from "../bulkorders/BulkOrderForm";
// import StationList from "../dashboard/StationsList";
// //styles
// import { globalStyles } from "../../styles/styles";
// import { verticalScale } from "../Scaling";


// const Stack = createStackNavigator();

// const Routes = () => {
//   return (
//     <View style={[globalStyles.containerStyles, { gap: verticalScale(10) }]}>
//       <RajBhogTopBar />
    
//       <Stack.Navigator initialRouteName="Dashboard">
//         <Stack.Screen
//           name="Dashboard"
//           component={Dashboard}
//           options={{ title: "Dashboard", headerShown: false }}
//         />         
//         <Stack.Screen
//           name="BulkOrder"
//           component={BulkOrderForm}
//           options={{ title: "BulkOrderForm", headerShown: false }}
//         />
//         <Stack.Screen
//           name="StationList"
//           component={StationList}
//           options={{ title: "StationList", headerShown: false }}
//         />
//       </Stack.Navigator>
//     </View>
//   );
// };

// export default Routes;


// Routes.js
import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
//componets
import RajBhogTopBar from "../../components/RajBhogTopBar";
import Cart from "../cart/Index";

//styles
import { globalStyles } from "../../styles/styles";
import { verticalScale } from "../Scaling";
import Rastaurants from "../dashboard/Restaurants";
import Menu from "../dashboard/Menu";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <View style={[globalStyles.containerStyles]}>
       <RajBhogTopBar title={"Cart Details"}/> 
      <Stack.Navigator initialRouteName="cart">
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ title: "Cart", headerShown: false }}
        />         
       
      </Stack.Navigator>

   
    </View>
  );
};

export default Routes;