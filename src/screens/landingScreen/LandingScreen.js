import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Login from "./Login";
import { config } from "../../config/Config";
import { theme } from "../../config/Theme";
import AuthContainer from "./authContainer/AuthContainer";
import BannerImage from "./BannerImage";

const LandingScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <BannerImage />
      <AuthContainer navigation={navigation} />
      <Login navigation={navigation} />
    </ScrollView>
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
