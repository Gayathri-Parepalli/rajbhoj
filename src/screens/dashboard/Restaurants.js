import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useForm } from "react-hook-form";
//styles
import { globalStyles } from "../../styles/styles";
import { fontFamily } from "../../styles/fontStyles";
import { verticalScale, scale } from "../Scaling";
//components
import { colors } from "../../styles/colors";
import RajBhogCard from "../../components/RajBhogCard";
//svg
import GroupIcon from "../../svg/GroupIcon";
//redux
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../redux/actions/dashboard";

const Rastaurants = ({ route, navigation }) => {
  const { stationcode, pnr } = route.params;
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.dashboard.restaurant);
  const requiredData =
    restaurants &&
    restaurants.find((val) => val.Station[0].station_code === stationcode);
  const [searchLoading, setSearchLoading] = useState(false);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });
  useEffect(() => {
    const fetcData = async () => {
      try {
        await dispatch(search({ pnr }));
      } catch (err) {
        console.log(err);
      }
    };
    if (!restaurants) {
      fetcData();
    }
  });
  //render card
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        // activeOpacity={0.7} // Controls the opacity of the button when it's touched
        activeOpacity={0.7}
        style={{
          marginBottom: verticalScale(15),
          paddingHorizontal: verticalScale(1),
          paddingTop: verticalScale(1),
        }}
        onPress={() => {
          navigation.navigate("Menu", {
            stationcode,
            outlet_id: item.outlets_id,
            pnr,
          });
        }}
      >
        <View>
          <RajBhogCard
            shadow={true}
            styles={{
              width: "100%",
              //  minHeight:verticalScale(250),
              minHeight: verticalScale(250),
              paddingHorizontal: verticalScale(10),
              alignItems: "flex-start",
              justifyContent: "flex-start",
              borderRadius: verticalScale(16),
              paddingVertical: verticalScale(10),
            }}
          >
            <View style={{ gap: verticalScale(5), width: "100%" }}>
              <View style={{ width: "100%" }}>
                <Image
                  source={require("../../assets/Images/imagefood.png")}
                  style={{
                    width: "100%",
                    height: scale(171),
                    // resizeMode: "contain",
                    borderRadius: verticalScale(16),
                    // marginTop:verticalScale(10)
                  }}
                />
                <View
                  style={[
                    styles.buttonStyles,
                    { bottom: verticalScale(20), left: verticalScale(10) },
                  ]}
                >
                  <Text
                    style={{
                      fontFamily: fontFamily,
                      fontSize: verticalScale(10),
                    }}
                  >
                    Min Order :{" "}
                    {item.minimum_order_value
                      ? parseInt(item.minimum_order_value).toFixed()
                      : "-"}
                    Rs.
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", width: "100%" }}>
                <View
                  style={{
                    gap: verticalScale(5),
                    width: "85%",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: fontFamily,
                      fontSize: verticalScale(18),
                      fontWeight: "600",
                      lineHeight: verticalScale(25.2),
                    }}
                  >
                    {item.outlate_name}
                  </Text>
                  {item.short_description && (
                    <Text
                      style={{
                        fontFamily: fontFamily,
                        fontSize: verticalScale(8),
                        fontWeight: "400",
                        lineHeight: verticalScale(12.6),
                        color: "#5B5B5E",
                      }}
                    >
                      {item.short_description}
                    </Text>
                  )}
                  <Text
                    style={{
                      fontFamily: fontFamily,
                      fontSize: verticalScale(10),
                      fontWeight: "400",
                      lineHeight: verticalScale(12.6),
                      color: "#5B5B5E",
                    }}
                  >
                    serving:{item.station_code}
                  </Text>
                </View>
                <View
                  style={{
                    gap: verticalScale(5),
                    alignItems: "flex-end",
                    justifyContent: "center",
                    width: "15%",
                    // backgroundColor:"black"
                  }}
                >
                  {(item.meal_type === "Both" || item.meal_type === "Veg") && (
                    <GroupIcon />
                  )}
                  {(item.meal_type === "Both" ||
                    item.meal_type === "Nonveg") && (
                    <GroupIcon color={"#FF0000"} />
                  )}
                </View>
              </View>
            </View>
          </RajBhogCard>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    //availble restaurants
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        globalStyles.dashboardContentStyle,
        { backgroundColor: colors.backgroundColor },
      ]}
    >
      <FlatList
        ListEmptyComponent={
          <View
            style={{
              height: verticalScale(400),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.textStyles1}>No Data Found</Text>
          </View>
        }
        style={{ marginTop: verticalScale(10) }}
        removeClippedSubviews
        showsVerticalScrollIndicator={false}
        // showsHorizontalScrollIndicator={false}
        // horizontal={true}
        data={restaurants ? requiredData.Outlets : []}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        // extraData={selectedId}
      />
    </ScrollView>
  );
};

export default Rastaurants;

const styles = StyleSheet.create({
  inputStyles: {
    height: verticalScale(50),
  },
  textStyles: {
    fontFamily: fontFamily,
    fontSize: verticalScale(14),
    fontWeigth: "400",
    lineHeight: verticalScale(22.68),
  },
  textStyles1: {
    fontFamily: fontFamily,
    fontSize: verticalScale(16),
    fontWeigth: "800",
    lineHeight: verticalScale(22.68),
  },
  headingStyles: {
    alignSelf: "center",
    fontFamily: fontFamily,
    fontSize: verticalScale(22),
    fontWeight: "700",
    lineHeight: verticalScale(30.24),
  },
  paginationContainer: {
    position: "absolute",
    bottom: -35, // Adjust the vertical distance from the bottom
    alignSelf: "center",
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: colors.buttonColor,
  },
  buttonStyles: {
    paddingHorizontal: verticalScale(5),
    alignItems: "center",
    justifyContent: "center",
    minWidth: verticalScale(86),
    height: verticalScale(28),
    borderRadius: verticalScale(16),
    backgroundColor: "#FFFFFF",
    position: "absolute",
  },
});
