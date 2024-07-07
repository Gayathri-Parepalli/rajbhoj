// import React from "react";
// import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
// import { useForm, Controller } from "react-hook-form";
// import { globalStyles } from "../../styles/styles";
// import { fontFamily } from "../../styles/fontStyles";
// import { verticalScale, scale } from "../Scaling";
// import RajBhogButton from "../../components/RajBhogButton";
// import { colors } from "../../styles/colors";
// import RajBhogInput from "../../components/RajBhogInput";
// import RajBhogAvatar from "../../components/RajBhogAvatar";

// const EditProfile = ({ navigation }) => {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ mode: "all" });

//   const onSubmit = (data) => {
//     // Handle form submission here
//     console.log("Form Data:", data);
//   };

//   return (
//     <View style={[globalStyles.containerStyles, { gap: verticalScale(10) }]}>
//       <ScrollView>
//         <View
//           style={{
//             marginLeft: scale(11),
//             marginRight: scale(11),
//             marginTop: verticalScale(10),
//           }}
//         >
//           <View>
//             <Text
//               style={{
//                 fontSize: scale(20),
//                 fontFamily: fontFamily,
//                 fontWeight: "600",
//                 lineHeight: verticalScale(25),
//               }}
//             >
//               Update your profile:
//             </Text>
//           </View>
//           <View
//             style={{
//               justifyContent: "center",
//               alignContent: "center",
//               alignSelf: "center",
//               marginTop: verticalScale(15),
//             }}
//           >
//             <RajBhogAvatar
//               source="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//               size={scale(156)}
//             />
//           </View>
//         </View>
//         <View
//           style={{
//             marginLeft: scale(25),
//             marginRight: scale(25),
//             marginTop: verticalScale(20),
//             marginBottom: verticalScale(20),
//           }}
//         >
//           <View>
//             <View style={{ marginLeft: scale(5) }}>
//               <Text style={styles.labelText}>Full Name</Text>
//             </View>
//             <View style={{ marginTop: scale(3) }}>
//               {/* <RajBhogInput
//                 control={control}
//                 name="fullName"
//                 placeholder="Full Name"
//                 styles={styles.inputStyles}
//                 rules={{
//                   required: {
//                     value: true,
//                     message: "Full Name is required",
//                   },
//                 }}
//                 invalid={errors.fullName ? true : false}
//                 error={errors.fullName ? errors.fullName.message : ""}
//               /> */}
//               <RajBhogInput
//                 control={control}
//                 name="fullName"
//                 placeholder="Full Name"
//                 styles={styles.inputStyles}
//                 rules={{
//                   required: {
//                     value: true,
//                     message: "Full Name is required",
//                   },
//                   pattern: {
//                     value: /^[A-Za-z]+$/,
//                     message: "Only alphabets allowed in the name",
//                   },
//                 }}
//                 invalid={errors.fullName ? true : false}
//                 error={errors.fullName ? errors.fullName.message : ""}
//               />
//             </View>
//           </View>
//           <View style={{ marginTop: verticalScale(10) }}>
//             <View style={{ marginLeft: scale(5) }}>
//               <Text style={styles.labelText}>E-mail</Text>
//             </View>
//             <View style={{ marginTop: scale(3) }}>
//               <RajBhogInput
//                 control={control}
//                 name="email"
//                 placeholder="E-mail"
//                 styles={styles.inputStyles}
//                 rules={{
//                   required: {
//                     value: true,
//                     message: "Email is required",
//                   },
//                   pattern: {
//                     value: /^\S+@\S+$/,
//                     message: "Invalid email format",
//                   },
//                 }}
//                 invalid={errors.email ? true : false}
//                 error={errors.email ? errors.email.message : ""}
//               />
//             </View>
//           </View>
//           <View style={{ marginTop: verticalScale(10) }}>
//             <View style={{ marginLeft: scale(5) }}>
//               <Text style={styles.labelText}>Phone Number</Text>
//             </View>
//             <View style={{ marginTop: scale(3) }}>
//               <RajBhogInput
//                 keyboardType={"numeric"}
//                 control={control}
//                 name="phoneNumber"
//                 placeholder="Phone Number"
//                 styles={styles.inputStyles}
//                 rules={{
//                   required: {
//                     value: true,
//                     message: "Phone Number is required",
//                   },
//                   pattern: {
//                     value: /^\d{10}$/,
//                     message: "Invalid phone number format (10 digits only)",
//                   },
//                 }}
//                 invalid={errors.phoneNumber ? true : false}
//                 error={errors.phoneNumber ? errors.phoneNumber.message : ""}
//               />
//             </View>
//           </View>
//           <View style={{ marginTop: verticalScale(10) }}>
//             <View style={{ marginLeft: scale(5) }}>
//               <Text style={styles.labelText}>Alternative Phone Number</Text>
//             </View>
//             <View style={{ marginTop: scale(3) }}>
//               <RajBhogInput
//                 keyboardType={"numeric"}
//                 control={control}
//                 name="alternativeNumber"
//                 placeholder="Alternative Number"
//                 styles={styles.inputStyles}
//                 rules={{
//                   pattern: {
//                     value: /^\d{10}$/,
//                     message:
//                       "Invalid Alternative number format (10 digits only)",
//                   },
//                 }}
//                 invalid={errors.alternativeNumber ? true : false}
//                 error={
//                   errors.alternativeNumber
//                     ? errors.alternativeNumber.message
//                     : ""
//                 }
//               />
//             </View>
//           </View>
//           <View style={{ marginTop: scale(3) }}>
//             <View style={{ marginLeft: scale(5) }}>
//               <Text style={styles.labelText}>Professional</Text>
//             </View>
//             <View style={{ marginTop: scale(3) }}>
//               <RajBhogInput
//                 control={control}
//                 name="professional"
//                 placeholder="Professional"
//                 styles={styles.inputStyles}
//                 // No required rule for Professional
//                 invalid={errors.professional ? true : false}
//                 error={errors.professional ? errors.professional.message : ""}
//               />
//             </View>
//           </View>
//           <View style={{ marginTop: verticalScale(25) }}>
//             <RajBhogButton
//               onPress={handleSubmit(onSubmit)}
//               label="SAVE CHANGES"
//               styles={{
//                 backgroundColor: colors.buttonColor,
//                 width: "100%",
//                 borderRadius: verticalScale(17.75),
//               }}
//               labelStyles={{
//                 color: colors.backgroundColor,
//                 fontSize: verticalScale(17.75),
//                 fontWeight: "700",
//                 lineHeight: verticalScale(22.36),
//               }}
//             />
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default EditProfile;

// const styles = StyleSheet.create({
//   inputStyles: {
//     height: verticalScale(50),
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 5,
//     borderColor: "#ddd",
//   },
//   labelText: {
//     fontFamily: fontFamily,
//     fontSize: scale(16),
//     lineHeight: verticalScale(20),
//     fontWeight: "400",
//     color: "#9796A1",
//   },
// });

// import React, { useState } from "react";
// import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";
// import { useForm, Controller } from "react-hook-form";
// import { launchImageLibrary } from "react-native-image-picker"; // Import the library
// import { globalStyles } from "../../styles/styles";
// import { fontFamily } from "../../styles/fontStyles";
// import { verticalScale, scale } from "../Scaling";
// import RajBhogButton from "../../components/RajBhogButton";
// import RajBhogInput from "../../components/RajBhogInput";
// import RajBhogAvatar from "../../components/RajBhogAvatar";
// import { colors } from "../../styles/colors";

// const EditProfile = ({ navigation }) => {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ mode: "all" });

//   const [avatarSource, setAvatarSource] = useState(null);

//   const selectImage = () => {
//     const options = {
//       mediaType: "photo",
//       includeBase64: false,
//     };

//     launchImageLibrary(options, (response) => {
//       if (response.didCancel) {
//         console.log("User cancelled image picker");
//       } else if (response.error) {
//         console.log("ImagePicker Error: ", response.error);
//       } else {
//         // Set the selected image source
//         setAvatarSource(response.uri);
//       }
//     });
//   };

//   const onSubmit = (data) => {
//     // Handle form submission here
//     console.log("Form Data:", data);
//   };

//   return (
//     <View style={[globalStyles.containerStyles, { gap: verticalScale(10) }]}>
//       <ScrollView>
//         <View
//           style={{
//             marginLeft: scale(11),
//             marginRight: scale(11),
//             marginTop: verticalScale(10),
//           }}
//         >
//           <View>
//             <Text
//               style={{
//                 fontSize: scale(20),
//                 fontFamily: fontFamily,
//                 fontWeight: "600",
//                 lineHeight: verticalScale(25),
//               }}
//             >
//               Update your profile:
//             </Text>
//           </View>
//           <View
//             style={{
//               justifyContent: "center",
//               alignContent: "center",
//               alignSelf: "center",
//               marginTop: verticalScale(15),
//             }}
//           >
//             <RajBhogAvatar
//               source={avatarSource}
//               size={scale(156)}
//               onPress={selectImage}
//             />
//           </View>
//         </View>
//         <View
//           style={{
//             marginLeft: scale(25),
//             marginRight: scale(25),
//             marginTop: verticalScale(20),
//             marginBottom: verticalScale(20),
//           }}
//         >
//           <View>
//             <View style={{ marginLeft: scale(5) }}>
//               <Text style={styles.labelText}>Full Name</Text>
//             </View>
//             <View style={{ marginTop: scale(3) }}>
//               <RajBhogInput
//                 control={control}
//                 name="fullName"
//                 placeholder="Full Name"
//                 styles={styles.inputStyles}
//                 rules={{
//                   required: {
//                     value: true,
//                     message: "Full Name is required",
//                   },
//                   pattern: {
//                     value: /^[A-Za-z]+$/,
//                     message: "Only alphabets allowed in the name",
//                   },
//                 }}
//                 invalid={errors.fullName ? true : false}
//                 error={errors.fullName ? errors.fullName.message : ""}
//               />
//             </View>
//           </View>
//           <View style={{ marginTop: verticalScale(10) }}>
//             <View style={{ marginLeft: scale(5) }}>
//               <Text style={styles.labelText}>E-mail</Text>
//             </View>
//             <View style={{ marginTop: scale(3) }}>
//               <RajBhogInput
//                 control={control}
//                 name="email"
//                 placeholder="E-mail"
//                 styles={styles.inputStyles}
//                 rules={{
//                   required: {
//                     value: true,
//                     message: "Email is required",
//                   },
//                   pattern: {
//                     value: /^\S+@\S+$/,
//                     message: "Invalid email format",
//                   },
//                 }}
//                 invalid={errors.email ? true : false}
//                 error={errors.email ? errors.email.message : ""}
//               />
//             </View>
//           </View>
//           <View style={{ marginTop: verticalScale(10) }}>
//             <View style={{ marginLeft: scale(5) }}>
//               <Text style={styles.labelText}>Phone Number</Text>
//             </View>
//             <View style={{ marginTop: scale(3) }}>
//               <RajBhogInput
//                 keyboardType={"numeric"}
//                 control={control}
//                 name="phoneNumber"
//                 placeholder="Phone Number"
//                 styles={styles.inputStyles}
//                 rules={{
//                   required: {
//                     value: true,
//                     message: "Phone Number is required",
//                   },
//                   pattern: {
//                     value: /^\d{10}$/,
//                     message: "Invalid phone number format (10 digits only)",
//                   },
//                 }}
//                 invalid={errors.phoneNumber ? true : false}
//                 error={errors.phoneNumber ? errors.phoneNumber.message : ""}
//               />
//             </View>
//           </View>
//           <View style={{ marginTop: verticalScale(10) }}>
//             <View style={{ marginLeft: scale(5) }}>
//               <Text style={styles.labelText}>Alternative Phone Number</Text>
//             </View>
//             <View style={{ marginTop: scale(3) }}>
//               <RajBhogInput
//                 keyboardType={"numeric"}
//                 control={control}
//                 name="alternativeNumber"
//                 placeholder="Alternative Number"
//                 styles={styles.inputStyles}
//                 rules={{
//                   pattern: {
//                     value: /^\d{10}$/,
//                     message:
//                       "Invalid Alternative number format (10 digits only)",
//                   },
//                 }}
//                 invalid={errors.alternativeNumber ? true : false}
//                 error={
//                   errors.alternativeNumber
//                     ? errors.alternativeNumber.message
//                     : ""
//                 }
//               />
//             </View>
//           </View>
//           <View style={{ marginTop: scale(3) }}>
//             <View style={{ marginLeft: scale(5) }}>
//               <Text style={styles.labelText}>Professional</Text>
//             </View>
//             <View style={{ marginTop: scale(3) }}>
//               <RajBhogInput
//                 control={control}
//                 name="professional"
//                 placeholder="Professional"
//                 styles={styles.inputStyles}
//                 // No required rule for Professional
//                 invalid={errors.professional ? true : false}
//                 error={errors.professional ? errors.professional.message : ""}
//               />
//             </View>
//           </View>
//           <View style={{ marginTop: verticalScale(25) }}>
//             <RajBhogButton
//               onPress={handleSubmit(onSubmit)}
//               label="SAVE CHANGES"
//               styles={{
//                 backgroundColor: colors.buttonColor,
//                 width: "100%",
//                 borderRadius: verticalScale(17.75),
//               }}
//               labelStyles={{
//                 color: colors.backgroundColor,
//                 fontSize: verticalScale(17.75),
//                 fontWeight: "700",
//                 lineHeight: verticalScale(22.36),
//               }}
//             />
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default EditProfile;

// const styles = StyleSheet.create({
//   inputStyles: {
//     height: verticalScale(50),
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 5,
//     borderColor: "#ddd",
//   },
//   labelText: {
//     fontFamily: fontFamily,
//     fontSize: scale(16),
//     lineHeight: verticalScale(20),
//     fontWeight: "400",
//     color: "#9796A1",
//   },
// });

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { launchImageLibrary } from "react-native-image-picker";
import { globalStyles } from "../../styles/styles";
import { fontFamily } from "../../styles/fontStyles";
import { verticalScale, scale } from "../Scaling";
import RajBhogButton from "../../components/RajBhogButton";
import RajBhogInput from "../../components/RajBhogInput";
import RajBhogTopBar from "../../components/RajBhogTopBar";
// import RajBhogAvatar from "../../components/RajBhogAvatar";
import { colors } from "../../styles/colors";
import { AntDesign } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";

//redux
import { useSelector, useDispatch } from "react-redux";
import { GetProfileDetails } from "../../redux/actions/profile";

const RajBhogAvatar = ({ source, size, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ alignItems: "center" }}>
      <Image
        source={{ uri: source }}
        style={{ width: size, height: size, borderRadius: size / 2 }}
      />
      <AntDesign
        name="camera"
        size={scale(30)}
        style={{ alignSelf: "flex-end", marginTop: scale(-20) }}
        color="black"
      />
    </TouchableOpacity>
  );
};

const EditProfile = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const [avatarSource, setAvatarSource] = useState(
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
  console.log({ avatarSource }, "avatarSource");

  const dispatch = useDispatch();


    const profileDetails = useSelector(
      (state) => state.profile.getPofileDetails
    );

    const [state, setState] = useState([]);
    console.log(state,"state")
    console.log(profileDetails, "profileDetails12");


       useEffect(() => {
         // Check if profileDetails has a value before updating the state
         if (profileDetails) {
           // Update local state with profileDetails
           setState(profileDetails.data[0]);
         }
       }, [profileDetails]);

   const fetchData = async () => {
     try {
       const userId = await AsyncStorage.getItem("userId");
       const iflag = 1;
       dispatch(GetProfileDetails(userId, iflag));
     } catch (err) {
       console.log(err.message);
     }
   };

  useEffect(() => {
    fetchData();
  }, [dispatch]);




 

  const selectImage = () => {
    const options = {
      mediaType: "photo",
      includeBase64: true, // Request base64 data
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        // Assuming the response contains base64 data
        const base64Image = `data:${response.assets[0].type};base64,${response.assets[0].base64}`;
        setAvatarSource(base64Image);
      }
    });
  };

  const onSubmit = (data) => {
    // Handle form submission here
    console.log("Form Data:", data);
  };


 const updateName = (newName) => {
   setState((prev) => ({
     ...prev,
     name: newName,
   }));
 };

 // Handler for input change
 const handleNameChange = (event) => {
   const newName = event.target.value;
   updateName(newName);
 };


  return (
    <View style={[globalStyles.containerStyles, { gap: verticalScale(10) }]}>
      <RajBhogTopBar title={"Edit Profile"} />
      <ScrollView>
        <View
          style={{
            marginLeft: scale(11),
            marginRight: scale(11),
            marginTop: verticalScale(10),
          }}
        >
          <View>
            <Text
              style={{
                fontSize: scale(20),
                fontFamily: fontFamily,
                fontWeight: "600",
                lineHeight: verticalScale(25),
              }}
            >
              Update Your Profile:
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignSelf: "center",
              marginTop: verticalScale(15),
            }}
          >
            {/* <RajBhogAvatar source={avatarSource} size={scale(156)} /> */}
            {/* <RajBhogAvatar source={{ uri: avatarSource }} size={scale(156)} /> */}
            <Image
              source={require("../../assets/Images/blankProfileImage.png")}
              style={{ width: 140, height: 140, borderRadius: 180 / 2 }}
            />

            {/* <RajBhogAvatar
              source={avatarSource}
              size={scale(156)}
              onPress={selectImage}
            /> */}

            {/* <TouchableOpacity
              style={{
                justifyContent: "flex-end",
                alignSelf: "flex-end",
                paddingRight: scale(25),
                marginTop: scale(-30),
              }}
            >
              <AntDesign name="camera" size={scale(30)} color="black" />
            </TouchableOpacity> */}
          </View>
        </View>
        <View
          style={{
            marginLeft: scale(25),
            marginRight: scale(25),
            marginTop: verticalScale(25),
            marginBottom: verticalScale(20),
          }}
        >
          <View>
            <View style={{ marginLeft: scale(5) }}>
              <Text style={styles.labelText}>Full Name</Text>
            </View>
            <View style={{ marginTop: scale(3) }}>
              <RajBhogInput
                control={control}
                name="fullName"
                placeholder="full name"
                value={state ? state.name : ""}
                styles={styles.inputStyles}
                rules={{
                  required: {
                    value: true,
                    message: "Full Name is required",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Only alphabets allowed in the name",
                  },
                }}
                invalid={errors.fullName ? true : false}
                error={errors.fullName ? errors.fullName.message : ""}
                onChange={handleNameChange}
              />
            </View>
          </View>
          <View style={{ marginTop: verticalScale(10) }}>
            <View style={{ marginLeft: scale(5) }}>
              <Text style={styles.labelText}>E-mail</Text>
            </View>
            <View style={{ marginTop: scale(3) }}>
              <RajBhogInput
                control={control}
                name="email"
                placeholder="E-mail"
                styles={styles.inputStyles}
                rules={{
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^\S+@\S+$/,
                    message: "Invalid email format",
                  },
                }}
                invalid={errors.email ? true : false}
                error={errors.email ? errors.email.message : ""}
              />
            </View>
          </View>
          <View style={{ marginTop: verticalScale(10) }}>
            <View style={{ marginLeft: scale(5) }}>
              <Text style={styles.labelText}>Phone Number</Text>
            </View>
            <View style={{ marginTop: scale(3) }}>
              <RajBhogInput
                keyboardType={"numeric"}
                control={control}
                name="phoneNumber"
                placeholder="Phone Number"
                styles={styles.inputStyles}
                rules={{
                  required: {
                    value: true,
                    message: "Phone Number is required",
                  },
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Invalid phone number format (10 digits only)",
                  },
                }}
                invalid={errors.phoneNumber ? true : false}
                error={errors.phoneNumber ? errors.phoneNumber.message : ""}
              />
            </View>
          </View>
          <View style={{ marginTop: verticalScale(10) }}>
            <View style={{ marginLeft: scale(5) }}>
              <Text style={styles.labelText}>Alternative Phone Number</Text>
            </View>
            <View style={{ marginTop: scale(3) }}>
              <RajBhogInput
                keyboardType={"numeric"}
                control={control}
                name="alternativeNumber"
                placeholder="Alternative Number"
                styles={styles.inputStyles}
                rules={{
                  pattern: {
                    value: /^\d{10}$/,
                    message:
                      "Invalid Alternative number format (10 digits only)",
                  },
                }}
                invalid={errors.alternativeNumber ? true : false}
                error={
                  errors.alternativeNumber
                    ? errors.alternativeNumber.message
                    : ""
                }
              />
            </View>
          </View>
          <View style={{ marginTop: verticalScale(10) }}>
            <View style={{ marginLeft: scale(5) }}>
              <Text style={styles.labelText}>Professional</Text>
            </View>
            <View style={{ marginTop: scale(3) }}>
              <RajBhogInput
                control={control}
                name="professional"
                placeholder="Professional"
                styles={styles.inputStyles}
                invalid={errors.professional ? true : false}
                error={errors.professional ? errors.professional.message : ""}
              />
            </View>
          </View>
          <View style={{ marginTop: verticalScale(25) }}>
            <RajBhogButton
              onPress={handleSubmit(onSubmit)}
              label="SAVE CHANGES"
              styles={{
                backgroundColor: colors.buttonColor,
                width: "100%",
                borderRadius: verticalScale(17.75),
              }}
              labelStyles={{
                color: colors.backgroundColor,
                fontSize: verticalScale(17.75),
                fontWeight: "700",
                lineHeight: verticalScale(22.36),
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  inputStyles: {
    height: verticalScale(50),
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#ddd",
  },
  labelText: {
    fontFamily: fontFamily,
    fontSize: scale(16),
    lineHeight: verticalScale(20),
    fontWeight: "400",
    color: "#9796A1",
  },
});
