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
import AsyncStorage from "@react-native-async-storage/async-storage";
//styles
import { globalStyles } from "../../styles/styles";
import { fontFamily } from "../../styles/fontStyles";
import { verticalScale, scale } from "../Scaling";
//components
import RajBhogCard from "../../components/RajBhogCard";
import RajBhogAvatar from "../../components/RajBhogAvatar";
import RajBhogTopBar from "../../components/RajBhogTopBar";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  const [searchby, setSearchby] = useState("train");
  const {
    control,
    formState: { errors },
  } = useForm({ mode: "all" });

  const navigateToEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  const navigateToOrderHistory = () => {
    navigation.navigate("OrderHistory");
  };

  const navigateToTrackOrder = () => {
    navigation.navigate("TrackOrder");
  };

  const navigateToHealthSupport = () => {
    navigation.navigate("HealthSupport");
  };

  const navigateToSendFeedback = () => {
    navigation.navigate("SendFeedback");
    // navigation.navigate("FAQ");
    // navigation.navigate("PolicyOfUse")
    //  navigation.navigate("CancellationPage");
  };

  const logOut = async () => {
    navigation.navigate("Splash");
    try {
      // await AsyncStorage.clear();
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("userId");
      await AsyncStorage.removeItem("pnr");
      await AsyncStorage.removeItem("outletId");
      await AsyncStorage.removeItem("stationCode")
      console.log("Data removed successfully!");
    } catch (error) {
      console.error("Error removing data:", error);
    }
  };

  return (
    <View style={[globalStyles.containerStyles, { gap: verticalScale(10) }]}>
      {/* <RajBhogTopBar /> */}
      <RajBhogTopBar title={"Profile"} />
      <ScrollView>
        <View
          style={{
            marginLeft: scale(11),
            marginRight: scale(11),
            marginTop: verticalScale(10),
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
          }}
        >
          <RajBhogAvatar
            size={scale(154)}
            source="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
            marginTop: verticalScale(10),
          }}
        >
          <Text style={styles.profileName}>Albert Einstien</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
            marginTop: verticalScale(5),
            backgroundColor: "#DE7A22",
            paddingVertical: scale(5),
            paddingHorizontal: scale(10),
          }}
        >
          <TouchableOpacity onPress={navigateToEditProfile}>
            <Text style={styles.editProfile}>Edit profile</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginLeft: scale(25),
            marginRight: scale(25),
            marginTop: verticalScale(15),
            marginBottom: verticalScale(20),
          }}
        >
          <View>
            <TouchableOpacity onPress={navigateToOrderHistory}>
              <RajBhogCard
                shadow={true}
                children={
                  <View
                    style={{
                      width: "100%",
                    }}
                  >
                    <View style={styles.titleCard}>
                      <View>
                        <Text style={styles.titleText}>Order History</Text>
                      </View>
                      <View>
                        <AntDesign name="right" size={22} color="black" />
                      </View>
                    </View>
                  </View>
                }
                styles={styles.rajBhogCard}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: verticalScale(20) }}>
            <TouchableOpacity onPress={navigateToTrackOrder}>
              <RajBhogCard
                children={
                  <View
                    style={{
                      width: "100%",
                    }}
                  >
                    <View style={styles.titleCard}>
                      <View>
                        <Text style={styles.titleText}>Track order</Text>
                      </View>
                      <View>
                        <AntDesign name="right" size={22} color="black" />
                      </View>
                    </View>
                  </View>
                }
                styles={styles.rajBhogCard}
              />
            </TouchableOpacity>
          </View>
          {/* <View style={{ marginTop: verticalScale(20) }}>
            <TouchableOpacity onPress={navigateToHealthSupport}>
              <RajBhogCard
                children={
                  <View
                    style={{
                      width: "100%",
                    }}
                  >
                    <View style={styles.titleCard}>
                      <View>
                        <Text style={styles.titleText}>Help and support</Text>
                      </View>
                      <View>
                        <AntDesign name="right" size={22} color="black" />
                      </View>
                    </View>
                  </View>
                }
                styles={styles.rajBhogCard}
              />
            </TouchableOpacity>
          </View> */}
          <View style={{ marginTop: verticalScale(20) }}>
            <TouchableOpacity onPress={navigateToSendFeedback}>
              <RajBhogCard
                children={
                  <View
                    style={{
                      width: "100%",
                    }}
                  >
                    <View style={styles.titleCard}>
                      <View>
                        <Text style={styles.titleText}>Send feedback</Text>
                      </View>
                      <View>
                        <AntDesign name="right" size={22} color="black" />
                      </View>
                    </View>
                  </View>
                }
                styles={styles.rajBhogCard}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: verticalScale(20) }}>
            <TouchableOpacity onPress={logOut}>
              <RajBhogCard
                children={
                  <View
                    style={{
                      width: "100%",
                    }}
                  >
                    <View style={styles.titleCard}>
                      <View>
                        <Text style={styles.titleText}>Logout</Text>
                      </View>
                      <View>
                        <MaterialIcons name="logout" size={24} color="black" />
                      </View>
                    </View>
                  </View>
                }
                styles={styles.rajBhogCard}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  dataText: {
    fontSize: scale(12),
    fontWeight: "600",
    fontFamily: fontFamily,
    color: "#9796A1",
    marginTop: verticalScale(7),
    lineHeight: 15,
  },
  flatList: {
    // marginTop: verticalScale(5),
  },
  profileName: {
    fontFamily: fontFamily,
    fontSize: scale(15),
    lineHeight: scale(18),
    fontWeight: "600",
  },
  editProfile: {
    fontFamily: fontFamily,
    fontSize: scale(14),
    lineHeight: scale(17),
    fontWeight: "400",
    color:"white"
  },
  titleCard: {
    marginLeft: scale(10),
    marginRight: scale(10),
    justifyContent: "space-between",
    height: scale(38),
    alignItems: "center",
    flexDirection: "row",
  },
  titleText: {
    fontFamily: fontFamily,
    fontSize: scale(15),
    lineHeight: scale(19),
    fontWeight: "600",
  },
  rajBhogCard: {
    height: scale(20),
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 1,
    width: "100%",
    width: "100%",
    height: "auto",
    flexDirection: "row",
    padding: 10,
    shadowColor: "rgba(0, 0, 0, 0.7)",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    backgroundColor: "white",
  },
});
