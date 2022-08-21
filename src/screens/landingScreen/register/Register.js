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
        navigation.navigate("Drawer");
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
    <View style={{ alignItems: "center", width: "100%" }}>
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
          <>
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
              </View>
            </View>
            <View
              style={{
                //flex: 1,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                paddingTop: config.hp("2%"),
              }}
            >
              <TouchableOpacity
                onPress={submit}
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
          </>
        )}
      </View>
      <ErrorModal
        showErrorModal={status.showError}
        error={status.error}
        closeErrorModal={closeError}
      ></ErrorModal>
    </View>
  );
};

export default Register;
