import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { config } from "../../../config/Config";
import { theme } from "../../../config/Theme";
import LottieView from "lottie-react-native";

const FirstScreen = ({ handleNext }) => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: config.hp("35"),
          paddingTop: 25,
          width: "100%",
          backgroundColor: theme.colors.primary,
          borderBottomRightRadius: 25,
          borderBottomLeftRadius: 25,
          marginBottom: config.hp("4%"),
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Jay's World</Text>
        <LottieView
          loop
          autoPlay
          style={{
            width: 180,
            //height: 160,
          }}
          source={require("../../../../assets/lottieFiles/dj.json")}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          paddingHorizontal: config.wp("2%"),
          width: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: theme.colors.primary,
            marginBottom: config.hp("1%"),
          }}
        >
          Lets Get Started
        </Text>
        <Text
          style={{
            textAlign: "left",
            fontSize: 16,
            marginBottom: 10,
          }}
        >
          We just have a few questions. These questions will help us to tailer
          your experience and provide you with the content you are looking for.
        </Text>
      </View>

      <View
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: config.hp("1%"),
          }}
        >
          <Text>By continuing you agree to our </Text>
          <Text style={{ textDecorationLine: "underline" }}>
            Terms and Conditions
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleNext}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.colors.primary,
            width: "80%",
            borderRadius: 7,
            paddingVertical: config.hp("1%"),
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: config.hp("4%"),
    backgroundColor: "white",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    elevation: config.hp("1%"),
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: "black",
    height: config.hp("40%"),
    width: "100%",
    marginBottom: config.hp("2%"),
  },
  image: {
    width: config.wp("80%"),
    height: 500,
  },
});

export default FirstScreen;
