import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useForm } from "react-hook-form";
//styles
import { globalStyles } from "../../styles/styles";
import { fontFamily } from "../../styles/fontStyles";
import { verticalScale, scale } from "../Scaling";
//components
import RajBhogTopBar from "../../components/RajBhogTopBar";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getCoupons, search } from "../../redux/actions/dashboard";

const Coupon = ({ navigation }) => {
  const [searchby, setSearchby] = useState("train");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const couponcodes = useSelector((state) => state.dashboard.coupons);

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        await dispatch(getCoupons());
        setLoading(false); // Set loading to false once coupons are fetched
      } catch (err) {
        console.log(err.message);
      }
    };
    getDashboardData();
  }, [dispatch]);

  const {
    control,
    formState: { errors },
  } = useForm({ mode: "all" });

  const navToDashboard = () => {
    navigation.navigate("Home");
  };

  const renderItem = ({ item }) => (
    <View
      style={{ width: "100%", marginTop: scale(15), marginBottom: scale(15) }}
    >
      <TouchableOpacity onPress={navToDashboard}>
        <Image
          source={{ uri: item.image }}
          style={{
            width: "100%",
            height: scale(217),
            resizeMode: "contain",
          }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[globalStyles.containerStyles, { gap: verticalScale(10) }]}>
      <RajBhogTopBar title={"Coupons"} />
      <ScrollView>
        <View
          style={{
            marginLeft: scale(11),
            marginRight: scale(11),
            marginTop: verticalScale(10),
          }}
        >
          <View>
            <Text
              style={{
                fontSize: scale(20),
                fontFamily: fontFamily,
                fontWeight: "600",
                lineHeight: 25,
              }}
            >
              Available coupon codes:
            </Text>
            <Text style={styles.dataText}>
              Total active: {couponcodes.coupon_code.length}
            </Text>
          </View>
          <View>
            {loading && (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: verticalScale(50),
                }}
              >
                <ActivityIndicator size="large" color="#DE7A22" />
              </View>
            )}
            {!loading && (
              <FlatList
                data={couponcodes ? couponcodes.coupon_code : []}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.flatList}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Coupon;

const styles = StyleSheet.create({
  dataText: {
    fontSize: scale(12),
    fontWeight: "600",
    fontFamily: fontFamily,
    color: "#9796A1",
    marginTop: verticalScale(7),
    lineHeight: 15,
  },
  flatList: {},
});
