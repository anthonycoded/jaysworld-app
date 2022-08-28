import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { config } from "../../config/Config";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../config/Theme";
import FirstScreen from "./screens/FirstScreen";
import Profile from "./screens/Profile";

const Onboarding = () => {
  const [step, setStep] = useState(0);

  function handleNext() {
    setStep(step + 1);
  }
  function handleStep(step) {
    switch (step) {
      case 0:
        return <FirstScreen handleNext={handleNext}></FirstScreen>;
      case 1:
        return <Profile></Profile>;

      default:
        break;
    }
  }
  return (
    <SafeAreaView style={styles.container}>{handleStep(step)}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    //paddingVertical: config.hp("2%"),
    //paddingHorizontal: config.wp("2%"),
  },
});

export default Onboarding;
