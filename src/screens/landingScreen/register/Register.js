import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { config } from "../../../config/Config";
import { theme } from "../../../config/Theme";
import { newUser } from "../../../store/actions/authActions";
import LottieView from "lottie-react-native";
import ErrorModal from "../../../components/modals/ErrorModal";

const Register = ({ navigation, setTab, handleChange }) => {
  const state = useSelector((state) => state.auth);

  const dispatch = useDispatch();
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
    showError: false,
    success: false,
  });

  function handleChange(name, value) {
    setPayload({
      ...payload,
      [name]: value,
    });
  }

  function closeError() {
    setStatus({
      ...status,
      showError: false,
      error: undefined,
      loading: false,
    });
  }

  function submit() {
    setStatus({
      ...status,
      loading: true,
    });

    dispatch(newUser(payload));
  }

  useEffect(() => {
    let authStatus = state.status;

    switch (authStatus) {
      case "Success":
        navigation.navigate("Onboarding");
        setStatus({
          ...state,
          loading: false,
          error: false,
          showError: false,
        });
        return;

      case "Error":
        setStatus({
          ...state,
          loading: false,
          error: state.error,
          showError: true,
        });
        return;

      default:
        setStatus({
          ...state,
          loading: false,
          error: undefined,
          showError: false,
        });
        return;
    }
  }, [state]);

  return (
    <View style={{ alignItems: "center", width: "100%", height: "65%" }}>
      <Text
        style={{
          fontSize: 24,
          //fontWeight: "bold",
          marginBottom: config.hp("1%"),
          color: theme.colors.primary,
        }}
      >
        Register
      </Text>

      {status.loading ? (
        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
            height: "100%",
            paddingTop: 25,
            width: "100%",
          }}
        >
          <LottieView
            loop
            autoPlay
            style={{
              width: 160,
              height: 160,
            }}
            source={require("../../../../assets/lottieFiles/loading-spinner.json")}
          />
          <Text>Loading</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text
              style={{
                fontSize: 18,
                marginBottom: config.hp(".5%"),
                color: theme.colors.primary,
              }}
            >
              Create a Username
            </Text>
            <TextInput
              placeholderTextColor={"gray"}
              underlineColor="gray"
              style={styles.input}
              label="username"
              placeholder="Enter your username"
              onChangeText={(value) => handleChange("username", value)}
              textContentType="username"
            />
            <Text
              style={{
                fontSize: 18,

                color: theme.colors.primary,
              }}
            >
              Set up Password
            </Text>
            <Text style={{ fontSize: 12, marginBottom: config.hp("1%") }}>
              Must be at least 8 characters long and contain at least 1 number,
              and 1 capitalized letter
            </Text>
            <TextInput
              placeholderTextColor={"gray"}
              underlineColor="gray"
              style={styles.input}
              label="Email"
              placeholder="Enter a password"
              onChangeText={(value) => handleChange("email", value)}
              textContentType="email"
            />

            <Text
              style={{
                fontSize: 18,
                marginBottom: config.hp(".5%"),
                color: theme.colors.primary,
              }}
            >
              Confirm Password
            </Text>
            <TextInput
              placeholderTextColor={"gray"}
              underlineColor="gray"
              style={styles.input}
              label="Password"
              placeholder="Passwords must match"
              onChangeText={(value) => handleChange("password", value)}
              //value={user.password}
              secureTextEntry
              textContentType="password"
            />
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: config.hp("8%"),
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Onboarding")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: config.wp("80"),
                backgroundColor: theme.colors.primary,
                paddingVertical: config.hp("1%"),
                borderRadius: 7,
              }}
            >
              <Text style={{ fontSize: 18, color: "white" }}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTab("Login")}>
              <Text style={{ paddingVertical: 10 }}>
                Already have an account, Login.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <ErrorModal
        showErrorModal={status.showError}
        error={status.error}
        closeErrorModal={closeError}
      ></ErrorModal>
    </View>
  );
};

export default Register;
