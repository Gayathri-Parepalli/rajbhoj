import React, { useRef } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View } from "react-native";
import { Controller } from "react-hook-form";
import { verticalScale } from "../screens/Scaling";
import { colors } from "../styles/colors";
import { fontFamily } from "../styles/fontStyles";

const RajBhogInput = React.forwardRef((props, ref) => {
  const prefixAddedRef = useRef(false);
  return (
    // <FormControl
    //   onFocus={props.onFocus}
    //   isRequired={props.isRequired}
    //   isInvalid={props.invalid}
    //   isReadOnly={props.isReadOnly || false}
    //   style={{
    //     ...props.style,
    //   }}
    // >
    //   {props.label && (
    //     <FormControl.Label
    //       style={{
    //         // fontSize: ah(16),
    //         // fontFamily: "Sora",
    //         // fontWeight:"400",
    //         color: props.invalid ? "red.500" : "rgba(102, 102, 102, 0.7)",

    //         ...props.labelstyle,
    //       }}
    //     >
    //       <Text
    //       style={{fontSize: ah(16),
    //       fontFamily: "Sora",
    //       fontWeight:"400",
    //       color:"#431201"
    //       }}>
    //         {props.label}
    //       </Text>
    //     </FormControl.Label>
    //   )}
    <View style={{ width: "100%", gap: verticalScale(5) }}>
      {props.label && (
        <Text
          style={{
            fontSize: verticalScale(16),
            fontFamily: fontFamily,
            fontWeight: "400",
            color: colors.labelColor,

            width: "100%",
            ...props.labelStyles,
          }}
        >
          {props.label}
        </Text>
      )}
      <Controller
        control={props.control}
        rules={props.rules}
        name={props.name}
        // style={{
        //   zIndex: 1,
        // }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            isDisabled={props.isDisabled || false}
            tabIndex={props.tabIndex}
            isReadOnly={props.isReadOnly || false}
            ref={ref}
            size={props.size || "lg"}
            multiline={props.multiline || false}
            rows={props.numberOfLines || 1}
            minLength={props.minLength || 1}
            maxLength={props.maxLength || 255}
            isInvalid={props.invalid}
            autoComplete="off"
            autoFocus={props.autoFocus || false}
            type={props.type || "text"}
            onSubmitEditing={props.onSubmitEditing}
            inputMode={props.keyboardType}
            // borderColor={"#D1D5DB" || props.borderColor}
            // onChangeText={(value) => {
            //   onChange(value);

            //   if (props.onChangeText) {
            //     props.onChangeText(value);
            //   }
            // }}

            // onChangeText={(value) => {
            //   //  if(props.type==="phone"){
            //   //   if (!prefixAddedRef.current&&!value.startsWith('+91-')) {
            //   //     prefixAddedRef.current = true;
            //   //     // Prefix the phone number with "91"
            //   //     onChange(`+91-${value}`)
            //   //   }else{
            //   //     // prefixAddedRef.current = false;
            //   //   onChange(value);
            //   //   }
            //   //  }else{
            //   onChange(props.toCaptlize ? value.toUpperCase() : value);
            //   if (props.onChangeText) {
            //     props.onChangeText(value);
            //   }
            //   // }
            // }}

            onChangeText={(inputValue) => {
              onChange(
                props.toCaptlize ? inputValue.toUpperCase() : inputValue
              );
              if (props.onChangeText) {
                props.onChangeText(inputValue);
              }
            }}
            _focus={{
              backgroundColor: "white",
            }}
            onBlur={() => {
              onBlur();
              if (props.onBlur) {
                props.onBlur(value);
              }
            }}
            value={value || ""}
            // value={value || props.defaultValue || ""}
            // variant={props.variant || "outline"}

            // focusOutlineColor={props.focusOutlineColor || "#2230F8"}

            style={{
              width: "100%",
              backgroundColor: colors.inputbgColor,
              fontFamily: fontFamily,
              fontSize: verticalScale(16),
              fontWeight: "400",
              height: verticalScale(50),
              paddingLeft: 10,
              paddingRight: 10,
              //    width:"full",
              zIndex: 1,
              borderRadius: 6,
              borderWidth: props.invalid ? 1 : 0,
              borderColor: props.invalid ? "red" : "white",
              ...props.styles,
            }}
            _hover={{
              borderColor: "#D1D5DB",
            }}
            InputLeftElement={props.leftIcon || null}
            InputRightElement={props.rightIcon || null}
            placeholder={props.placeholder}
          />
        )}
      />
      {props.error && (
        <View>
          <Text
            style={{
              color: "red",
              fontFamily: fontFamily,
              fontSize: verticalScale(10),
            }}
          >
            {props.error}
          </Text>
        </View>
      )}
    </View>
    //   <FormControl.ErrorMessage >
    //     {props.error}
    //   </FormControl.ErrorMessage>
    //   <FormControl.HelperText >
    //     {props.help}
    //   </FormControl.HelperText>
    // </FormControl>
  );
});

export default RajBhogInput;
