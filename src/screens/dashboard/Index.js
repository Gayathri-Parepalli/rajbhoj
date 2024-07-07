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
  Alert,
} from "react-native";
import { useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import Carousel, { Pagination } from "react-native-snap-carousel";
//styles
import { globalStyles } from "../../styles/styles";
import { fontFamily } from "../../styles/fontStyles";
import { verticalScale, scale } from "../Scaling";

//components
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
//services images
const servicesImages = [
  require("../../assets/Images/servicesImages/1.png"),
  require("../../assets/Images/servicesImages/2.png"),
  require("../../assets/Images/servicesImages/3.png"),
  require("../../assets/Images/servicesImages/4.png"),
  require("../../assets/Images/servicesImages/5.png"),
  require("../../assets/Images/servicesImages/6.png"),

  // require("../../assets/Images/servicesImages/Image3.png"),
];
const renderItem = ({ item }) => {
  return (
    <View style={{ gap: verticalScale(10) }}>
      <Image
        source={item}
        style={{
          width: scale(55.94),
          height: scale(55.94),
          resizeMode: "contain",
          // marginTop:verticalScale(10)
        }}
      />
    </View>
  );
};

const renderItem1 = ({ item }) => (
  <View>
    <Image
      source={{ uri: item.image }}
      style={{
        width: "90%",
        height: scale(217),
        resizeMode: "contain",
      }}
    />
  </View>
);

const renderItem2 = ({ item }) => {
  return (
    <View style={{ marginRight: verticalScale(10) }}>
      <Image
        source={{ uri: item.image }}
        style={{
          width: scale(134.94),
          height: scale(80.94),
          // resizeMode: "contain",
          // marginTop:verticalScale(10)
        }}
      />
    </View>
  );
};

const Dashboard = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const dispatch = useDispatch();
  const [searchby, setSearchby] = useState("pnr");
  const couponcodes = useSelector((state) => state.dashboard.coupons);
  const [searchLoading, setSearchLoading] = useState(false);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });
  //for coupons
  useEffect(() => {
    const getDashboardData = async () => {
      try {
        await dispatch(getCoupons());
      } catch (err) {
        console.log(err.message);
      }
    };
    getDashboardData();
  }, [dispatch]);
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
      navigation.navigate("StationList", {
        searchby1: searchby,
        value: data.pnr,
      });
    } catch (err) {
      Alert.alert("error", err.message);
      console.log(err);
    }
    setSearchLoading(false);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: colors.backgroundColor }}
    >
      <View style={globalStyles.dashboardContentStyle}>
        <View>
          <Text
            style={{
              fontFamily: fontFamily,
              fontSize: verticalScale(20),
              lineHeight: verticalScale(30.24),
              fontWeight: "300",
            }}
          >
            Order great food all while
          </Text>
          <Text
            style={{
              fontFamily: fontFamily,
              fontSize: verticalScale(20),
              lineHeight: verticalScale(30.24),
              fontWeight: "700",
            }}
          >
            Travelling...
          </Text>
        </View>
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
                styles={styles.inputStyles}
                keyboardType={"numeric"}
                control={control}
                name="pnr"
                placeholder="Enter PNR"
                rules={{
                  required: {
                    value: true,
                    message: "Pnr Required",
                  },
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Please Enter 10 digit pnr Number",
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
                  width: "18%",
                  height: verticalScale(45),
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
            alignItems: "center",
            // justifyContent: "center",
            // gap: verticalScale(4),
            marginTop: verticalScale(4),
            marginLeft: scale(3),
            alignSelf:"center"
          }}
        >
          <Text style={[styles.textStyles, { fontSize: verticalScale(16) }]}>
            Most Trusted Partner Of IRCTC
          </Text>
          <View
            style={{
              // borderWidth: 2,
              borderColor: colors.buttonColor,
              borderRadius: scale(52),
            }}
          >
            <Image
              source={require("../../assets/Images/irctcLogo.jpg")}
              style={{
                width: scale(40),
                height: scale(40),
                // resizeMode: "contain",
                // marginTop:verticalScale(10)
              }}
            />
          </View>
          {/* <Text style={styles.textStyles}>Partner</Text> */}
        </View>
        <Image
          source={require("../../assets/Images/Dashboard1.png")}
          style={{
            width: "100%",
            height: scale(173),
            resizeMode: "contain",
            // marginTop:verticalScale(10)
          }}
        />
        {/* services */}
        <View>
          <Text style={styles.headingStyles}>More services</Text>
        </View>
        {/* <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={servicesImages}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          // extraData={selectedId}
        /> */}
        <View
          style={{
            flexDirection: "row",
            gap: verticalScale(10),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {servicesImages.map((item, index) => (
            <View key={index}>
              <Image
                source={item}
                style={{
                  // width: scale(55.94),
                  // height: scale(55.94),
                  width: scale(45),
                  height: scale(45),
                  resizeMode: "contain",
                  // marginTop:verticalScale(10)
                }}
              />
            </View>
          ))}
        </View>
        {/* bulk orders */}
        <View>
          <RajBhogCard
            styles={{
              backgroundColor: colors.buttonColor,
              height: verticalScale(141),
              width: "100%",
              borderRadius: verticalScale(6),
            }}
          >
            <View
              style={{
                width: "100%",
                alignItems: "center",
                gap: verticalScale(11.09),
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  color: colors.backgroundColor,
                  fontFamily: fontFamily,
                  fontSize: verticalScale(18),
                  fontWeight: "700",
                  lineHeight: verticalScale(22.68),
                }}
              >
                Want to do bulk order for your trip?
              </Text>
              <View
                style={{
                  paddingHorizontal: verticalScale(10),
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <RajBhogButton
                  onPress={() => navigation.navigate("BulkOrder")}
                  label="Order now"
                  styles={{
                    backgroundColor: colors.backgroundColor,
                    width: "45%",
                    borderRadius: verticalScale(17.75),
                    height: verticalScale(40),
                  }}
                  labelStyles={{
                    fontSize: verticalScale(17.75),
                    fontWeight: "700",
                    lineHeight: verticalScale(22.36),
                  }}
                />
              </View>
            </View>
          </RajBhogCard>
        </View>
        {/* Offers */}
        {/* <View>
          <Text style={styles.headingStyles}>Avail exciting offers!</Text>
          <View style={{ width: "100%" }}>
            <Carousel
              layout="default"
              data={couponcodes ? couponcodes.coupon_code : []}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              renderItem={renderItem1}
              onSnapToItem={(index) => setActiveIndex(index)}
            />
            <Pagination
              dotsLength={couponcodes ? couponcodes.coupon_code.length : 0}
              activeDotIndex={activeIndex}
              containerStyle={styles.paginationContainer}
              dotStyle={styles.paginationDot}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </View>
        </View> */}
        {/* Work Flow */}
        <View
          style={{
            width: "100%",
            alignItems: "center",
            gap: verticalScale(10),
            paddingTop: verticalScale(10),
          }}
        >
          <Text
            style={{
              fontFamily: fontFamily,
              fontSize: verticalScale(19),
              fontWeight: "700",
              lineHeight: verticalScale(30.24),
              textAlign: "center",
            }}
          >
            How food delivery in train works?
          </Text>
          <Image
            source={require("../../assets/Images/Flow.png")}
            style={{
              width: "100%",
              height: scale(71.83),
              resizeMode: "contain",
              // marginTop:verticalScale(10)
            }}
          />
        </View>
        {/* slider */}

        <View>
          <Text style={styles.headingStyles}>Order delicious food</Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={couponcodes ? couponcodes.related_menu : []}
          // data={servicesImages}
          renderItem={renderItem2}
          keyExtractor={(item, index) => index}
          // extraData={selectedId}
        />
        <View
          style={{
            paddingBottom: verticalScale(20),
            paddingTop: verticalScale(10),
          }}
        >
          <RajBhogCard
            styles={{
              backgroundColor: colors.buttonColor,
              height: verticalScale(250),
              width: "100%",
              borderRadius: verticalScale(6),
              paddingHorizontal: verticalScale(10),
            }}
          >
            <View
              style={{
                gap: verticalScale(10),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={[
                  styles.textStyles,
                  {
                    color: colors.backgroundColor,
                    fontWeigth: "700",
                    fontSize: verticalScale(18),
                  },
                ]}
              >
                Want to become a vendor?
              </Text>
              <Image
                source={require("../../assets/Images/Flow.png")}
                style={{
                  width: "100%",
                  height: scale(71.83),
                  resizeMode: "contain",
                  // marginTop:verticalScale(10)
                }}
              />

              <RajBhogButton
                onPress={async () => {
                  navigation.navigate("Splash");
                  try {
                    // await AsyncStorage.clear();
                    await AsyncStorage.removeItem("token");
                    await AsyncStorage.removeItem("userId");
                    await AsyncStorage.removeItem("pnr");
                    await AsyncStorage.removeItem("outletId");
                    await AsyncStorage.removeItem("stationCode");
                    console.log("Data removed successfully!");
                  } catch (error) {
                    console.error("Error removing data:", error);
                  }
                }}
                label="Sign Up As Patner"
                styles={{
                  backgroundColor: colors.backgroundColor,
                  borderRadius: verticalScale(17.75),
                  height: verticalScale(40),
                  paddingHorizontal: scale(15),
                }}
                labelStyles={{
                  fontSize: verticalScale(17.75),
                  fontWeight: "700",
                  lineHeight: verticalScale(22.36),
                  fontFamily: fontFamily,
                }}
              />
            </View>
          </RajBhogCard>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  inputStyles: {
    height: verticalScale(50),
  },
  textStyles: {
    fontFamily: fontFamily,
    fontSize: verticalScale(17),
    fontWeigth: "600",
    lineHeight: verticalScale(20.16),
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
});
