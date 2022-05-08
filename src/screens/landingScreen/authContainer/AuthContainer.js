import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { styles } from "./style";
const AuthContainer = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View style={styles.mainContainer}>
      <Text
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: 24,
          color: "white",
          paddingTop: 10,
        }}
      >
        Welcome Back!
      </Text>
      {/* <View style={styles.container}>
        <View style={[styles.buttonContainer, styles.isSelected]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setIsLogin(true);
            }}
          >
            <Text style={[styles.text, styles.isSelectedText]}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("RegisterPath");
            }}
          >
            <Text style={styles.text}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
};

export default AuthContainer;
