import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
//styles
import { globalStyles } from "../../styles/styles";
import { verticalScale,scale } from "../Scaling";
import { fontFamily } from "../../styles/fontStyles";
import { colors } from "../../styles/colors";
//components
import RajBhogInput from "../../components/RajBhogInput";
import RajBhogButton from "../../components/RajBhogButton";
import RajBhogTopBar from "../../components/RajBhogTopBar";

const BulkOrderForm = () => {
  const {
    control,
    formState: { errors },
  } = useForm({ mode: "all" });
  return (
    
      <ScrollView style={{backgroundColor:colors.backgroundColor}}>
        <View style={globalStyles.dashboardContentStyle}>
          <View style={{ gap: verticalScale(10) }}>
            <Text style={styles.headingStyles}>Please fill the form:</Text>
            <Text style={styles.textStyles}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document.
            </Text>
            <Text style={styles.textStyles}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document.
            </Text>
          </View>
          {/*Form  */}
          <View style={{paddingHorizontal:verticalScale(5),gap:verticalScale(10),paddingBottom:verticalScale(20)}}>
            <RajBhogInput
            placeholder="Enter First Name"
              control={control}
              name={"full_name"}
              label="Full name"
              labelStyles={styles.labelStyles}
              styles={styles.inputStyles}
            />
            <RajBhogInput
             placeholder="Enter Email"
             control={control}
             name={"email"}
             label="E-mail"
             labelStyles={styles.labelStyles}
             styles={styles.inputStyles}/>
              <RajBhogInput
             placeholder="Phone Number"
             control={control}
             name={"phone"}
             label="Phone Number"
             labelStyles={styles.labelStyles}
             styles={styles.inputStyles}/>
              <RajBhogInput
             placeholder="PNR"
             control={control}
             name={"pnr"}
             label="PNR"
             labelStyles={styles.labelStyles}
             styles={styles.inputStyles}/>
              <RajBhogInput
             placeholder="Start typing...."
             control={control}
             name={"message"}
             label="Message(if any)"
             labelStyles={styles.labelStyles}
             styles={styles.inputStyles}/>
             <RajBhogButton label="Save Changes"
              styles={{
                width: "100%",
                height: verticalScale(60),
                borderRadius: scale(16),
                backgroundColor: colors.buttonColor,
              }}
              labelStyles={{
                color: "#FFFFFF",
                fontSize: verticalScale(16),
                fontWeight: "700",
              }}/>
          </View>
        </View>
      </ScrollView>
  
  );
};

export default BulkOrderForm;

const styles = StyleSheet.create({
  headingStyles: {
    fontFamily: fontFamily,
    fontSize: verticalScale(19),
    fontWeight: "600",
    lineHeight: verticalScale(25.2),
  },
  textStyles: {
    fontFamily: fontFamily,
    fontSize: verticalScale(15),
    fontWeight: "600",
    lineHeight: verticalScale(25.2),
    // alignSelf:"center"
    textAlign: "center",
  },
  labelStyles: {
    color: "#9796A1",
  },
  inputStyles: {
    backgroundColor: colors.backgroundColor,
    borderColor: "#EEEEEE",
    borderWidth: verticalScale(1),
  },
});
