import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet,Text } from 'react-native';
import { verticalScale ,scale} from '../screens/Scaling';
import { colors } from '../styles/colors';
import { fontFamily } from '../styles/fontStyles';

const RajBhojOTPInput = ({error,otp,otpInputRefs,handleOtpChange,label}) => {
 
  useEffect(() => {
    // Ensure refs are assigned before trying to access them
    otpInputRefs.current = otpInputRefs.current.map((ref) => ref.current);
  }, []);

  return (
    <View style={{gap:verticalScale(8),width:"100%", alignItems:"center", justifyContent:"center"}} >
       <Text 

style={{
  fontSize: verticalScale(16),
fontFamily: fontFamily,
fontWeight:"400",
color:colors.labelColor,
lineHeight:verticalScale(20.16)
}}>
  {label}
</Text>
    <View style={styles.container}>
     
      {otp.map((_, index) => (
        <TextInput
          key={index}
          style={[styles.input,{ borderWidth: error ? 1 :0,
            borderColor: error ? "red" :"white"}]}
          maxLength={1}
          value={otp[index]}
          onChangeText={(value) => handleOtpChange(index, value)}
          keyboardType="numeric"
          ref={otpInputRefs.current[index]}
        />
      ))}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',    
    // gap:verticalScale(8),
    alignItems:"center",
    width:"100%",
    justifyContent:"space-between"
   
  },
  input: {
    height: verticalScale(40),
    width:  verticalScale(40),
   backgroundColor:colors.inputbgColor,  
    textAlign: 'center',
    fontFamily:fontFamily,
   fontSize:verticalScale(16),
   fontWeight:"400",
    borderRadius:scale(6),
   
  },
});

export default RajBhojOTPInput;
