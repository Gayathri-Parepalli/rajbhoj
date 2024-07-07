// // import React from "react";
// // import { Button } from "react-native";
// // import { aw, ah } from "./utils";

// // const RajBhogButton = (props) => {
// //   return (
// //     <Button
// //         title={props.loading ? 'Submitting...' : props.label}
// //         onPress={props.handleSubmit}
// //         disabled={props.loading||props.disabled} // Disable the button while loading
// //     style={{
// // backgroundColor:"#DE7A22"
// //     }}
// //       />
// //   );
// // };

// // export default RajBhogButton;

// import React from 'react';
// import { TouchableOpacity, Text, StyleSheet ,Pressable} from 'react-native';

// const RajBhogButton = ({ label, backgroundColor, onPress, style,marginBottom}) => {
//   return (
//     <TouchableOpacity
//       style={[styles.button, { backgroundColor },{marginBottom}, style]}
//       onPress={onPress}
//     >
//       <Text style={styles.buttonText}>{label}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     padding: 10,
//     borderRadius: 16,
//     justifyContent:"center",
//     alignItems:"center",
//     height:60
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     alignSelf:"center",
//     justifyContent:"center",
//     alignItems:"center"

//   },
// });

// export default RajBhogButton;

import React from "react";
import { Pressable, Text, View, TouchableOpacity } from "react-native";
import { fontFamily } from "../styles/fontStyles";
import { scale, verticalScale } from "../screens/Scaling";

const RajBhogButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        width: "100%",
        // padding: 10,
        justifyContent: "center",
        alignItems: "center",
        height: verticalScale(60),
        borderRadius: scale(6.66),
        ...props.styles,
      }}
    >
      {props.type === "icon" ? (
        <View>{props.label}</View>
      ) : props.type === "both" ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: verticalScale(5),
            justifyContent: "center",
          }}
        >
          <Text style={{ ...props.labelStyles, fontFamily: fontFamily }}>
            {props.label}
          </Text>
          <View style={{ marginTop: props.required ? verticalScale(3) : 0 }}>
            {props.icon}
          </View>
        </View>
      ) : (
        <Text style={{ ...props.labelStyles, fontFamily: fontFamily }}>
          {props.label}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export default RajBhogButton;
