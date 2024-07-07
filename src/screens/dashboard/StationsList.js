import React, { useState, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
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
// import Carousel, { Pagination } from "react-native-snap-carousel";
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
//redux
import { useDispatch, useSelector } from "react-redux";
import { getCoupons, search } from "../../redux/actions/dashboard";
import SearchIcon from "../../svg/SearchIcon";
// Dimensions
const { width: screenWidth } = Dimensions.get("window");

const StationList = ({ route, navigation }) => {
  const { searchby1, value } = route.params;

  const dispatch = useDispatch();
  const [searchby, setSearchby] = useState(searchby1);
  const restaurants = useSelector((state) => state.dashboard.restaurant);
  const [searchLoading, setSearchLoading] = useState(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
    defaultValues: searchby === "pnr" && { pnr: value },
  });

  //getdata onsearch
  const handleSearch = async (data) => {
    setSearchLoading(true);
    const reqData =
      searchby === "pnr"
        ? { pnr: data.pnr }
        : {
            train_number: data.train_number,
            boarding_date: data.boarding_date,
            boarding_station: data.boarding_station,
          };
    try {
      await dispatch(search(reqData));
    } catch (err) {
      console.log(err);
    }
    setSearchLoading(false);
  };
  useEffect(() => {
    const fetcData = async () => {
      const reqData = searchby === "pnr" ? { pnr: pnr } : null;
      // : {
      //     train_number: data.train_number,
      //     boarding_date: data.boarding_date,
      //     boarding_station: data.boarding_station,
      //   };
      try {
        await dispatch(search(reqData));
      } catch (err) {
        console.log(err);
      }
    };
    if (!restaurants) {
      fetcData();
    }
  });
  const renderItem1 = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.7} // Controls the opacity of the button when it's touched
      underlayColor="lightgrey"
      style={{ width: "100%", marginBottom: verticalScale(15) }}
      onPress={() =>
        navigation.navigate("Rastaurants", {
          stationcode: item.station_code,
          pnr: value,
        })
      }
    >
      <Image
        source={require("../../assets/Images/train.png")}
        //  source={{ uri: item.station_image }}
        style={{
          width: "100%",
          height: scale(130),
          // resizeMode: "contain",
        }}
      />
      <View
        style={[
          styles.buttonStyles,
          { top: verticalScale(8), left: verticalScale(8) },
        ]}
      >
        <Text
          style={{
            fontFamily: fontFamily,
            fontSize: verticalScale(10),
            fontWeight: "600",
            paddingHorizontal:scale(6)
          }}
        >
          {item.station_name}
        </Text>
      </View>
      <View
        style={[
          styles.buttonStyles,
          { bottom: verticalScale(8), right: verticalScale(8) },
        ]}
      >
        <Text
          style={{
            fontFamily: fontFamily,
            fontSize: verticalScale(10),
            fontWeight: "600",
          }}
        >
          {item.arrivalTime} Hrs.
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: colors.backgroundColor }}
    >
      <View
        style={[
          globalStyles.dashboardContentStyle,
          { marginTop: verticalScale(10) },
        ]}
      >
        <View style={globalStyles.groupButton}>
          <RajBhogButton
            onPress={() => setSearchby("pnr")}
            label="Search by PNR"
            styles={{
              width: "49%",
              height: verticalScale(40),
              backgroundColor:
                searchby === "pnr"
                  ? colors.buttonColor
                  : colors.backgroundColor,
              borderRadius: scale(23.5),
            }}
            labelStyles={{
              color: searchby === "pnr" ? colors.backgroundColor : colors.black,
              fontSize: verticalScale(13),
              fontWeight: "400",
            }}
          />
          <RajBhogButton
            label="Search by Train"
            onPress={() => setSearchby("train")}
            styles={{
              width: "49%",
              height: verticalScale(40),
              backgroundColor:
                searchby === "train"
                  ? colors.buttonColor
                  : colors.backgroundColor,
              borderRadius: scale(23.5),
            }}
            labelStyles={{
              color:
                searchby === "train" ? colors.backgroundColor : colors.black,
              fontSize: verticalScale(13),
              fontWeight: "400",
            }}
          />
        </View>
        {searchby === "pnr" ? (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ width: "75%" }}>
              <RajBhogInput
                control={control}
                name="pnr"
                placeholder="Boarding Station"
                styles={styles.inputStyles}
                rules={{
                  required: {
                    value: true,
                  },
                }}
                invalid={errors.pnr ? true : false}
                error={errors.pnr ? errors.pnr.message : ""}
              />
            </View>
            <RajBhogButton
              onPress={handleSubmit(handleSearch)}
              label={
                searchLoading ? (
                  <ActivityIndicator
                    color={colors.backgroundColor}
                    size="small"
                  />
                ) : (
                  <SearchIcon />
                )
              }
              type="icon"
              styles={{
                width: "20%",
                height: verticalScale(50),
                backgroundColor: colors.buttonColor,
                // borderRadius:scale(23.5)
              }}
            />
          </View>
        ) : (
          <View style={{ gap: verticalScale(10) }}>
            <RajBhogInput
              keyboardType={"numeric"}
              control={control}
              name="train_number"
              placeholder="Train Number"
              styles={styles.inputStyles}
              rules={{
                required: {
                  value: true,
                },
              }}
              invalid={errors.train_number ? true : false}
              error={errors.train_number ? errors.train_number.message : ""}
            />
            <RajBhogInput
              control={control}
              keyboardType={"numeric"}
              name="boarding_date"
              placeholder="Boarding Date"
              styles={styles.inputStyles}
              rules={{
                required: {
                  value: true,
                },
              }}
              invalid={errors.boarding_date ? true : false}
              error={errors.boarding_date ? errors.boarding_date.message : ""}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "75%" }}>
                <RajBhogInput
                  control={control}
                  name="boarding_station"
                  placeholder="Boarding Station"
                  styles={styles.inputStyles}
                  rules={{
                    required: {
                      value: true,
                    },
                  }}
                  invalid={errors.boarding_station ? true : false}
                  error={
                    errors.boarding_station
                      ? errors.boarding_station.message
                      : ""
                  }
                />
              </View>
              <RajBhogButton
                // labelStyles={{alignSelf:"center"}}
                onPress={handleSubmit(handleSearch)}
                type="icon"
                labelType="icon"
                label={
                  searchLoading ? (
                    <ActivityIndicator
                      color={colors.backgroundColor}
                      size="small"
                    />
                  ) : (
                    <SearchIcon />
                  )
                }
                styles={{
                  width: "20%",
                  height: verticalScale(50),
                  backgroundColor: colors.buttonColor,
                  // borderRadius:scale(23.5)
                }}
              />
            </View>
          </View>
        )}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={styles.textStyles}>Order food in </Text>
          <Text style={styles.textStyles1}>Unchahar Exp</Text>
        </View>
        {/* Availble stations */}
        <View>
          <FlatList
            removeClippedSubviews
            data={
              restaurants &&
              restaurants.flatMap((val) => {
                const arrivalTime = val.ArrivalTime;
                return val.Station.map((obj) => ({ ...obj, arrivalTime }));
              })
            }
            // data={[]}
            renderItem={renderItem1}
            keyExtractor={(item, index) => index.toString()}
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
            // extraData={selectedId}
          />
        </View>
        {/* sort */}
        {/* <View style={{ flexDirection: "row", zIndex: 2, alignItems: "center" }}>
          <Text
            style={{
              fontFamily: fontFamily,
              fontSize: verticalScale(15),
              fontWeight: "700",
            }}
          >
            Sort By
          </Text>
          <View style={{ width: verticalScale(115) }}>
            <DropDownPicker
              placeholder="Select"
              open={open}
              value={value1}
              items={items}
              setOpen={setOpen}
              setValue={setValue1}
              setItems={setItems}
              style={{ borderColor: "#FFFFFF", width: verticalScale(115) }}
              dropDownContainerStyle={{
                borderColor: "#FFFFFF",
                backgroundColor: colors.buttonColor,
              }}
              textStyle={{
                fontFamily: fontFamily,
                fontSize: verticalScale(15),
                fontWeight: "700",
                color: "#FFFFFF",
              }}
              // selectedItemLabelStyle={{color:"black"}}
              labelStyle={{ color: "black" }}
            />
          </View>
        </View> */}
        {/* Populer Dishes */}
        {/* <View>
          <FlatList
            removeClippedSubviews
            // showsHorizontalScrollIndicator={false}
            // horizontal={true}
            showsVerticalScrollIndicator={false}
            data={data[5].Outlets}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            // extraData={selectedId}
          />
        </View> */}
      </View>
    </ScrollView>
  );
};

export default StationList;

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

  buttonStyles: {
    paddingHorizontal: verticalScale(5),
    alignItems: "center",
    justifyContent: "center",
    minWidth: verticalScale(80),
    height: verticalScale(24),
    borderRadius: verticalScale(16),
    backgroundColor: "#FFFFFF",
    position: "absolute",
  },
});
