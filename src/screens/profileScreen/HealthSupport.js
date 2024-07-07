import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useForm } from "react-hook-form";
//styles
import { globalStyles } from "../../styles/styles";
import { fontFamily } from "../../styles/fontStyles";
import { verticalScale, scale } from "../Scaling";
//components
import RajBhogCard from "../../components/RajBhogCard";
import RajBhogAvatar from "../../components/RajBhogAvatar";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import RajBhogTopBar from "../../components/RajBhogTopBar";

const HealthSupport = ({ navigation }) => {
  const [searchby, setSearchby] = useState("train");
  const {
    control,
    formState: { errors },
  } = useForm({ mode: "all" });

  return (
    // <View
    //   style={[
    //     globalStyles.containerStyles,
    //     {
    //       gap: verticalScale(10),
    //       flex: 1,
    //       paddingHorizontal: scale(20),
    //     },
    //   ]}
    // >
    <View style={[globalStyles.containerStyles, { gap: verticalScale(10) }]}>
      <RajBhogTopBar title={"Help And Support"} />
      <View
        style={{
          marginLeft: scale(20),
          marginRight: scale(20),
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop:verticalScale(20)
        }}
      >
        <View
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <Text style={styles.textHeading}>About Rajbhog Khana</Text>
          <Text style={styles.content}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document. In
            publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document.
          </Text>
          <Text style={styles.callUs}>Call us at:</Text>
          <Text style={styles.number}>+91-1234565434</Text>
          <Text style={styles.callUs}>E-mail us at:</Text>
          <Text style={styles.number}>conatact@therlvtstudios.com</Text>
        </View>
      </View>
    </View>
  );
};
export default HealthSupport;

const styles = StyleSheet.create({
  textHeading: {
    textAlign: "center",
    fontFamily: fontFamily,
    fontWeight: "700",
    fontSize: scale(24),
    lineHeight: verticalScale(30),
    marginBottom:verticalScale(10)
  },
  content: {
    // textAlign: "center",
    fontFamily: fontFamily,
    fontWeight: "400",
    fontSize: scale(16),
    lineHeight: verticalScale(20),
  },
  callUs: {
    marginTop:verticalScale(10),
    textAlign: "center",
    fontFamily: fontFamily,
    fontWeight: "700",
    fontSize: scale(16),
    lineHeight: verticalScale(20),
    color: "#5B5B5E",
  },
  number: {
    marginBottom:verticalScale(10),
    textAlign: "center",
    fontFamily: fontFamily,
    fontWeight: "400",
    fontSize: scale(16),
    lineHeight: verticalScale(20),
    color: "#5B5B5E",
  },
});
