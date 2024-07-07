import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
//styles
import { globalStyles } from "../../styles/styles";
import { fontFamily } from "../../styles/fontStyles";
import { verticalScale, scale } from "../Scaling";

//components
import RajBhogButton from "../../components/RajBhogButton";
import RajBhogTopBar from "../../components/RajBhogTopBar";
import { colors } from "../../styles/colors";
import Modal from "react-native-modal";
//redux
import { useSelector, useDispatch } from "react-redux";
import { RatingAndFeedback } from "../../redux/actions/profile";

const SendFeedback = ({ navigation }) => {
  const feedback = useSelector((state) => state.profile.rating);
  console.log(feedback, "feedback");
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  //activeindicator
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    criteriaMode: "all",
  });

  const CustomModal = ({ isVisible, onClose, onOK }) => {
    return (
      <Modal isVisible={isVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            width: "auto",
            height: "auto",
            alignItems: "center",
          }}
        >
          <View
            style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}
          >
            <Text
              style={{
                fontSize: scale(24),
                fontFamily: fontFamily,
                lineHeight: verticalScale(30),
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              Successful!
            </Text>
            <Text
              style={{
                fontSize: scale(16),
                fontFamily: fontFamily,
                lineHeight: verticalScale(20),
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              Thank you for Your Feedback.
            </Text>
            <View style={{ alignSelf: "flex-end" }}>
              <TouchableOpacity
                onPress={onClose}
                style={{
                  marginTop: 10,
                  backgroundColor: "#DE7A22",
                  width: "auto",
                  paddingHorizontal: scale(10),
                  paddingVertical: scale(5),
                  height: "auto",
                  borderRadius: scale(5),
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: scale(16),
                    fontFamily: fontFamily,
                    lineHeight: verticalScale(20),
                    textAlign: "center",
                  }}
                >
                  OK
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const handleOK = () => {
    console.log("OK Pressed");
    toggleModal();
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);
    if (rating && data.feedback) {
      const formData = {
        rating,
        feedback: data.feedback,
      };
      try {
        const response = await dispatch(RatingAndFeedback(formData));
        if (response.data === "Thank U for Your Feedback.") {
          setLoading(false);
          // Alert.alert("Success", "Thank U for Your Feedback.");
          toggleModal();
          reset({ feedback :""});
          setRating(0);
          // navigation.navigate("SendFeedback");
          console.log("rest");
        }
      } catch (err) {
        Alert.alert("Error", err.message);
        console.log(err);
      }
    } else {
      setErrorMessage("Please submit the rating and feedback");
    }
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    setErrorMessage("");
  };

  return (
    <View style={[globalStyles.containerStyles, { gap: verticalScale(10) }]}>
      <RajBhogTopBar title={"Send Feedback"} />
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
          <Image
            source={require("../../assets/Images/appIcon.png")}
            style={{
              width: scale(194),
              height: scale(201),
              resizeMode: "contain",
              marginTop: verticalScale(10),
            }}
          />
        </View>
        <View
          style={{
            marginLeft: scale(25),
            marginRight: scale(25),
            marginTop: verticalScale(15),
            marginBottom: verticalScale(20),
          }}
        >
          <Text style={styles.ratingText}>
            Share your Rating<Text style={{ color: "red" }}>*</Text>
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => handleStarClick(star)}
              >
                <Text
                  style={{
                    fontSize: scale(30),
                    color: star <= rating ? "#DE7A22" : "gray",
                  }}
                >
                  &#9733; {/* Unicode character for a star */}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {errorMessage ? (
            <Text style={{ color: "red", marginTop: 10, textAlign: "center" }}>
              {errorMessage}
            </Text>
          ) : null}
          <Text style={styles.feedbackText}>
            Share your Feedback<Text style={{ color: "red" }}>*</Text>
          </Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Feed back"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                multiline
                numberOfLines={8}
                maxLength={100}
                style={styles.textInput}
              />
            )}
            name="feedback"
          />
          {errors.feedback && (
            <Text
              style={{
                color: "red",
                marginTop: verticalScale(5),
                marginBottom: verticalScale(15),
              }}
            >
              Please submit the rating and feedback
            </Text>
          )}
          <RajBhogButton
            label={
              loading ? (
                <ActivityIndicator
                  color={colors.backgroundColor}
                  size="large"
                />
              ) : (
                "Send Feedback"
              )
            }
            onPress={handleSubmit(onSubmit)}
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
            }}
          />
        </View>
      </ScrollView>
      <CustomModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        onOK={handleOK}
      />
    </View>
  );
};

export default SendFeedback;

const styles = StyleSheet.create({
  ratingText: {
    fontFamily: fontFamily,
    fontSize: scale(20),
    lineHeight: verticalScale(25),
    fontWeight: "600",
    textAlign: "center",
  },
  feedbackText: {
    fontFamily: fontFamily,
    fontSize: scale(16),
    lineHeight: verticalScale(20),
    fontWeight: "600",
    marginTop: verticalScale(15),
  },
  textInput: {
    borderColor: "#DE7A22",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: verticalScale(15),
    marginBottom: verticalScale(15),
    padding: scale(10),
  },
});
