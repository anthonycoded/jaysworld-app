import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Login from "./Login";
import { config } from "../../config/Config";
import { theme } from "../../config/Theme";
import AuthContainer from "./authContainer/AuthContainer";
import BannerImage from "./BannerImage";
import Register from "./register/Register";

const LandingScreen = ({ navigation }) => {
  const [tab, setTab] = useState("Login");

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <BannerImage />
      {/* <AuthContainer navigation={navigation} /> */}
      {tab == "Login" ? (
        <Login navigation={navigation} setTab={setTab} />
      ) : (
        <Register navigation={navigation} setTab={setTab}></Register>
      )}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
  },
  helpContainer: {
    paddingHorizontal: config.wp("4%"),
  },
});

export default LandingScreen;
