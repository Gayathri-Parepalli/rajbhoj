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

const FAQ = ({ navigation }) => {
  const [searchby, setSearchby] = useState("train");
  const [isPressed, setIsPressed] = useState(false);
  const [isPressed1, setIsPressed1] = useState(false);
  const [isPressed2, setIsPressed2] = useState(false);

  const {
    control,
    formState: { errors },
  } = useForm({ mode: "all" });

  const handlePress = () => {
    setIsPressed(!isPressed);
    // Additional logic or actions can be added here
  };

  const handlePress1 = () => {
    setIsPressed1(!isPressed1);
    // Additional logic or actions can be added here
  };

  const handlePress2 = () => {
    setIsPressed2(!isPressed2);
    // Additional logic or actions can be added here
  };

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
      <RajBhogTopBar title={"FAQs"} />
      <ScrollView>
        <View
          style={{
            marginLeft: scale(15),
            marginRight: scale(15),
            flex: 1,
            marginTop: verticalScale(15),
            marginBottom: verticalScale(30),
            //   justifyContent: "center",
            //   alignItems: "center",
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
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document.
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document.
            </Text>

            <View style={{ marginTop: verticalScale(30) }}>
              <View>
                <TouchableOpacity onPress={handlePress}>
                  <RajBhogCard
                    children={
                      <View style={{ width: "100%" }}>
                        <View
                          style={[
                            styles.titleCard,
                            {
                              backgroundColor: isPressed ? "#DE7A22" : "white",
                            },
                          ]}
                        >
                          <View>
                            <Text
                              style={[
                                styles.titleText,
                                {
                                  color: isPressed ? "white" : "black",
                                },
                              ]}
                            >
                              Frequently asked questions
                            </Text>
                          </View>
                          <View>
                            <AntDesign
                              name={isPressed ? "up" : "down"}
                              size={22}
                              color="black"
                            />
                          </View>
                        </View>
                      </View>
                    }
                    styles={styles.rajBhogCard}
                    shadow={true}
                  />
                </TouchableOpacity>
                {isPressed ? (
                  <View
                    style={{
                      backgroundColor: "#DE7A22",
                      width: "100%",
                      height: "auto",
                      marginTop: verticalScale(5),
                      padding: scale(10),
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: scale(16),
                        fontWeight: "400",
                        lineHeight: verticalScale(20),
                        fontFamily: fontFamily,
                      }}
                    >
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document.
                    </Text>
                  </View>
                ) : null}
              </View>

              <View style={{ marginTop: verticalScale(10) }}>
                <TouchableOpacity onPress={handlePress1}>
                  <RajBhogCard
                    children={
                      <View style={{ width: "100%" }}>
                        <View
                          style={[
                            styles.titleCard,
                            {
                              backgroundColor: isPressed1 ? "#DE7A22" : "white",
                            },
                          ]}
                        >
                          <View>
                            <Text
                              style={[
                                styles.titleText,
                                {
                                  color: isPressed1 ? "white" : "black",
                                },
                              ]}
                            >
                              Frequently asked questions
                            </Text>
                          </View>
                          <View>
                            <AntDesign
                              name={isPressed1 ? "up" : "down"}
                              size={22}
                              color="black"
                            />
                          </View>
                        </View>
                      </View>
                    }
                    styles={styles.rajBhogCard}
                    shadow={true}
                  />
                </TouchableOpacity>
                {isPressed1 ? (
                  <View
                    style={{
                      backgroundColor: "#DE7A22",
                      width: "100%",
                      height: "auto",
                      marginTop: verticalScale(5),
                      padding: scale(10),
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: scale(16),
                        fontWeight: "400",
                        lineHeight: verticalScale(20),
                        fontFamily: fontFamily,
                      }}
                    >
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document.
                    </Text>
                  </View>
                ) : null}
              </View>

              <View style={{ marginTop: verticalScale(10) }}>
                <TouchableOpacity onPress={handlePress2}>
                  <RajBhogCard
                    children={
                      <View style={{ width: "100%" }}>
                        <View
                          style={[
                            styles.titleCard,
                            {
                              backgroundColor: isPressed2 ? "#DE7A22" : "white",
                            },
                          ]}
                        >
                          <View>
                            <Text
                              style={[
                                styles.titleText,
                                {
                                  color: isPressed2 ? "white" : "black",
                                },
                              ]}
                            >
                              Frequently asked questions
                            </Text>
                          </View>
                          <View>
                            <AntDesign
                              name={isPressed2 ? "up" : "down"}
                              size={22}
                              color="black"
                            />
                          </View>
                        </View>
                      </View>
                    }
                    styles={styles.rajBhogCard}
                    shadow={true}
                  />
                </TouchableOpacity>
                {isPressed2 ? (
                  <View
                    style={{
                      backgroundColor: "#DE7A22",
                      width: "100%",
                      height: "auto",
                      marginTop: verticalScale(5),
                      padding: scale(10),
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: scale(16),
                        fontWeight: "400",
                        lineHeight: verticalScale(20),
                        fontFamily: fontFamily,
                      }}
                    >
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document.
                    </Text>
                  </View>
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default FAQ;

const styles = StyleSheet.create({
  textHeading: {
    textAlign: "center",
    fontFamily: fontFamily,
    fontWeight: "700",
    fontSize: scale(24),
    lineHeight: verticalScale(30),
    marginBottom: verticalScale(10),
  },
  content: {
    // textAlign: "center",
    fontFamily: fontFamily,
    fontWeight: "400",
    fontSize: scale(16),
    lineHeight: verticalScale(20),
    marginTop:verticalScale(10)
  },
  callUs: {
    marginTop: verticalScale(10),
    textAlign: "center",
    fontFamily: fontFamily,
    fontWeight: "700",
    fontSize: scale(16),
    lineHeight: verticalScale(20),
    color: "#5B5B5E",
  },
  number: {
    marginBottom: verticalScale(10),
    textAlign: "center",
    fontFamily: fontFamily,
    fontWeight: "400",
    fontSize: scale(16),
    lineHeight: verticalScale(20),
    color: "#5B5B5E",
  },
  titleCard: {
    paddingLeft: scale(10),
    paddingRight: scale(10),
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
    height: "auto",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 0,
    width: "100%",
    flexDirection: "row",
  },
});
