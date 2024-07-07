import React,{useRef,useState} from "react";
import { View, Text, Button, Image,StyleSheet,ImageBackground } from "react-native";
import { useForm } from "react-hook-form";
//styles
import { fontFamily } from "../../styles/fontStyles";
//scale
import { verticalScale, scale } from "../Scaling";
//components
import RajBhogCard from "../../components/RajBhogCard";
import RajBhogButton from "../../components/RajBhogButton";
import RajBhogInput from "../../components/RajBhogInput";
import { globalStyles } from "../../styles/styles";
import { colors } from "../../styles/colors";
import RajBhojOTPInput from "../../components/RajBhogOTPInput";
import { AntDesign } from "@expo/vector-icons";

//redux
import { useSelector,useDispatch } from "react-redux";
import { submitOtp } from "../../redux/actions/auth";
import RajBhogGradiant from "../../components/RajBhogGradiant";
const LoginFailure = ({ navigation }) => {
 



  return (
    <View style={globalStyles.containerStyles}>
      <View style={globalStyles.successPaddingView}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: verticalScale(24),
              fontWeight: "700",
              fontFamily: fontFamily,
              // marginBottom:verticalScale(30.97),
              lineHeight: verticalScale(30.24),
            }}
          >
            Sign in Failed!
          </Text>
        </View>
        <View style={styles.container}>
          {/* Main Image */}
          <ImageBackground
            source={require("../../assets/Images/Ellipse.png")}
            style={styles.mainImage}
          >
            {/* <Image source={require('../../assets/Images/Vector.png')} style={styles.insideImage} /> */}
            <AntDesign name="close" size={scale(60)} color="white" />
            <View style={styles.dotContainer}>
              <View
                style={[
                  styles.dot,
                  {
                    top: scale(70),
                    left: scale(50),
                    width: 11.07,
                    height: 11.07,
                  },
                ]}
              />
              <View
                style={[
                  styles.dot,
                  {
                    top: scale(130),
                    left: scale(60),
                    width: 5.53,
                    height: 5.53,
                  },
                ]}
              />
              <View
                style={[
                  styles.dot,
                  {
                    top: scale(110),
                    left: scale(130),
                    width: 6.92,
                    height: 6.92,
                  },
                ]}
              />
              <View
                style={[
                  styles.dot,
                  {
                    top: scale(70),
                    left: scale(99),
                    width: 2.77,
                    height: 2.77,
                  },
                ]}
              />
              <View
                style={[
                  styles.dot,
                  {
                    top: scale(40),
                    left: scale(130),
                    width: 4.15,
                    height: 4.15,
                  },
                ]}
              />
              {/* Add more dots as needed */}
            </View>
          </ImageBackground>

          {/* Small Images in Diagonal Positions */}
          <Image
            source={require("../../assets/Images/Ellipse.png")}
            style={[styles.smallImage, styles.topLeft, styles.smallImage1]}
          />
          <Image
            source={require("../../assets/Images/Ellipse.png")}
            style={[styles.smallImage, styles.topRight, styles.smallImage2]}
          />
          <Image
            source={require("../../assets/Images/Ellipse.png")}
            style={[styles.smallImage, styles.bottomLeft, styles.smallImage3]}
          />
          <Image
            source={require("../../assets/Images/Ellipse.png")}
            style={[styles.smallImage, styles.bottomRight, styles.smallImage4]}
          />
        </View>
        {/* <View style={styles.bottomFixedView}>
        <Image
          source={require('../../assets/Images/Ellipse 1.png')}
          style={styles.bottomImage}
        />
      </View> */}
      </View>
    </View>
  );
};

export default LoginFailure;
const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    marginTop:verticalScale(50),
      justifyContent: 'center',
      alignItems: 'center',
    },
    mainImage: {
      width: verticalScale(185.42),
      height: verticalScale(185.42),
      borderRadius: 100,
      alignItems:"center",
      justifyContent:"center"
    },
    smallImage: {     
      position: 'absolute',
     
  
    },
    smallImage1:{
    width:29.06,
    height:29.06
    },
    smallImage2:{
        width:17.99,
        height:17.99
    },
    smallImage3:{
        width:15.82,
        height:15.82
    },
    smallImage4:{
        width:6.92,
        height:6.92
    },
    topLeft: {
      top: -25,
      left: -25,
    },
    topRight: {
      top: -5,
      right: -25,
    },
    bottomLeft: {
      bottom: -5,
      left: -25,
    },
    bottomRight: {
      bottom: -25,
      right: -25,
    },
    insideImage:{
        width:57.26,
        height:49.98,
        
        
    },  dotContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
      },
     
      dot: {
      
        borderRadius: 5,
        backgroundColor: 'white',
        position: 'absolute',
      },
      // bottomFixedView: {
      //   position: 'absolute',
      //   backgroundColor: '#F0F5FA',
      //   bottom: 0,
      //   right: 0,
      //   margin: 0,
      //   padding: 0,
      //   top:"100%",
      //   width: 200, // Adjust width as needed
      //   height: 200, // Adjust height as needed
      // },
      bottomImage: {
        top:110,
        position:"absolute",
        width: verticalScale(200),
        height:verticalScale(200),
        resizeMode: 'contain',
      },
  });