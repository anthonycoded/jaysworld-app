import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./style";
import { useSelector } from "react-redux";
import { config } from "../../../config/Config";

const Register = ({ navigation, setTab, handleChange }) => {
  const state = useSelector((state) => state.auth);
  const [payload, setPayload] = useState({
    email: undefined,
    username: undefined,
    password: undefined,
    confirmPwd: undefined,
  });

  const [status, setStatus] = useState({
    loading: false,
    error: undefined,
    message: undefined,
  });

  function handleChange(name, value) {
    setPayload({
      ...payload,
      [name]: value,
    });
  }
  return (
    <View style={{ alignItems: "center" }}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginBottom: config.hp("1%"),
          color: "white",
        }}
      >
        Register
      </Text>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.inputView}>
            <TextInput
              placeholderTextColor={"gray"}
              underlineColor="gray"
              style={styles.input}
              label="username"
              placeholder="Enter your username"
              onChangeText={(value) => handleChange("username", value)}
              textContentType="username"
            />
            <TextInput
              placeholderTextColor={"gray"}
              underlineColor="gray"
              style={styles.input}
              label="Email"
              placeholder="Enter your email"
              onChangeText={(value) => handleChange("email", value)}
              textContentType="email"
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              placeholderTextColor={"gray"}
              underlineColor="gray"
              style={styles.input}
              label="Password"
              placeholder="Enter your Password"
              onChangeText={(value) => handleChange("password", value)}
              //value={user.password}
              secureTextEntry
              textContentType="password"
            />
            <TextInput
              placeholderTextColor={"gray"}
              underlineColor="gray"
              style={styles.input}
              label="Password"
              placeholder="Confirm Password"
              onChangeText={(value) => handleChange("password", value)}
              //value={user.password}
              secureTextEntry
              textContentType="password"
            />
            <TouchableOpacity onPress={() => setTab("Login")}>
              <Text style={{ paddingVertical: 10 }}>
                Already have an account, Login.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Register;
