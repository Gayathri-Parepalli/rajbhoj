// import React from "react";
// import { View, Text, Button } from "react-native";

// const Wallet = () => {
//   return (
//     <View>
//       <Text>Wallet Screen</Text>
//       <Button title="Wallet" onPress={() => {}} />
//     </View>
//   );
// };

// export default Wallet;


import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView,FlatList } from "react-native";
import { useForm } from "react-hook-form";
//styles
import { globalStyles } from "../../styles/styles";
import { fontFamily } from "../../styles/fontStyles";
import { verticalScale, scale } from "../Scaling";
//components
import RajBhogTopBar from "../../components/RajBhogTopBar";
import RajBhogButton from "../../components/RajBhogButton";
import { colors } from "../../styles/colors";
import RajBhogInput from "../../components/RajBhogInput";
import RajBhogCard from "../../components/RajBhogCard";

const Wallet = () => {
  const [searchby, setSearchby] = useState("train");
  const {
    control,
    formState: { errors },
  } = useForm({ mode: "all" });

  const cashbackData = [
    {
      id: "1",
      reason: "Cashback issued",
      date: "27TH OCTOBER 2023",
      amount: "+₹100.00",
    },
    {
      id: "2",
      reason: "Cashback issued",
      date: "27TH OCTOBER 2023",
      amount: "+₹100.00",
    },
    {
      id: "3",
      reason: "Cashback issued",
      date: "27TH OCTOBER 2023",
      amount: "+₹100.00",
    },
    {
      id: "4",
      reason: "Cashback issued",
      date: "27TH OCTOBER 2023",
      amount: "+₹100.00",
    },
    // Add more cashback items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.reasonContainer}>
        <Text style={styles.reasonText}>{item.reason}</Text>
        <Text style={styles.dataText}>{item.date}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>{item.amount}</Text>
      </View>
    </View>
  );

  return (
    <View style={[globalStyles.containerStyles, { gap: verticalScale(10) }]}>
      <RajBhogTopBar title={"Wallet"} />
      <ScrollView>
        <View
          style={{
            marginLeft: scale(28),
            marginRight: scale(28),
            marginTop: verticalScale(20),
          }}
        >
          <RajBhogCard
            children={
              <View
                style={{
                  marginLeft: scale(27),
                  marginRight: scale(27),
                  marginTop: verticalScale(23),
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Text
                      style={{
                        fontSize: scale(14),
                        color: "white",
                        fontFamily: fontFamily,
                        fontWeight: "400",
                      }}
                    >
                      Wallet balance1111
                    </Text>
                  </View>
                  <View></View>
                </View>
                <View style={{ marginTop: verticalScale(10) }}>
                  <Text
                    style={{
                      fontSize: scale(60),
                      color: "white",
                      fontFamily: fontFamily,
                      fontWeight: "400",
                    }}
                  >
                    ₹1000
                  </Text>
                </View>
              </View>
            }
            styles={{
              backgroundColor: "#DE7A22",
              height: verticalScale(156),
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          />
          <View style={{ marginTop: verticalScale(20) }}>
            <Text
              style={{
                fontSize: scale(15),
                fontFamily: fontFamily,
                fontWeight: "600",
                lineHeight: 18,
              }}
            >
              Recent transactions:
            </Text>
          </View>
          <View>
            <FlatList
              data={cashbackData}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              style={styles.flatList}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  inputStyles: {
    height: 50,
  },
  textStyles: {
    fontFamily: fontFamily,
    fontSize: verticalScale(14),
    fontWeigth: "600",
    lineHeight: verticalScale(20.16),
  },
  flatList: {
    flex: 1,
    marginTop: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: verticalScale(10),
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  reasonContainer: {
    flex: 1,
    marginTop: verticalScale(2),
  },
  reasonText: {
    fontSize: scale(15),
    fontWeight: "600",
    fontFamily: fontFamily,
  },
  dataText: {
    fontSize: scale(12),
    fontWeight: "600",
    fontFamily: fontFamily,
    color: "#9796A1",
    marginTop: verticalScale(2),
  },
  amountContainer: {
    marginLeft: 20,
  },
  amountText: {
    fontSize: scale(15),
    color: "#000000",
    fontWeight: "600",
    fontFamily: fontFamily,
  },
});