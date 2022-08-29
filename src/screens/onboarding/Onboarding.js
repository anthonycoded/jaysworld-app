import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import * as Progress from "react-native-progress";
import { theme } from "../../config/Theme";
import FirstScreen from "./screens/FirstScreen";
import Profile from "./screens/Profile";
import Interview from "./screens/Interview";
import { config } from "../../config/Config";

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [payload, setPayload] = useState({
    ethnicity: null,
    gender: null,
    profession: null,
    tags: [],
  });

  function handleChange(name, value) {
    setPayload({
      ...payload,
      [name]: value,
    });
  }

  function handleNext() {
    setStep(step + 1);
  }
  function handleBack() {
    setStep(step - 1);
  }
  function handleCancel() {}

  function handleSubmit() {}
  function handleStep(step) {
    switch (step) {
      case 0:
        return <FirstScreen handleNext={handleNext}></FirstScreen>;
      case 1:
        return (
          <View style={{ flex: 1 }}>
            <View
              style={{ alignItems: "center", marginBottom: config.hp("2%") }}
            >
              <Progress.Bar
                progress={step / 4}
                width={config.wp("85%")}
                height={config.hp("2%")}
                borderRadius={12}
                color={theme.colors.primary}
              />
            </View>
            <Profile
              payload={payload}
              handleBack={handleBack}
              handleNext={handleNext}
            ></Profile>
          </View>
        );

      case 2:
        return (
          <View style={{ flex: 1 }}>
            <View
              style={{ alignItems: "center", marginBottom: config.hp("2%") }}
            >
              <Progress.Bar
                progress={step / 4}
                width={config.wp("85%")}
                height={config.hp("2%")}
                borderRadius={12}
                color={theme.colors.primary}
              />
            </View>
            <Interview
              payload={payload}
              handleBack={handleBack}
              handleNext={handleNext}
              handleChange={handleChange}
            ></Interview>
          </View>
        );

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
