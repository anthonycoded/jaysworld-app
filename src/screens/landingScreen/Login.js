import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import LottieView from "lottie-react-native";

import { styles } from "./style";
import { userLoginMain } from "../../store/actions/authActions";

import ErrorModal from "../../components/modals/ErrorModal";
import { config } from "../../config/Config";
import { theme } from "../../config/Theme";

const Login = ({ navigation, setTab }) => {
  const profile = useSelector((state) => state.profile);
  const accounts = useSelector((state) => state.accounts);
  const auth = useSelector((state) => state.auth);
  //const rememberUserId = profile?.rememberUserId;
  const enableBioAuth = profile?.enableBioAuth || false;

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [error, setError] = useState(undefined);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isEnabled, setIsEnabled] = useState(profile?.rememberUserId || false);
  const [showLogin, setShowLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState();
  const [type, setType] = useState([]);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //INPUT HANDLER
  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  //Submit Login to backend
  const handleSubmit = () => {
    try {
      setUsername(user.email);
      setLoading(true);
      dispatch(userLoginMain(user));
    } catch (error) {
      console.log(error);
    }
  };
  async function LoginHandler(auth) {
    try {
      if (auth?.success) {
        await navigation.navigate("Drawer"); //Navigate to home screen
        setLoading(false); //Remove Loading Spinner
      } else if (auth?.success == false && auth?.error) {
        //Auth Failed
        setLoading(false); //Remove Loading Spinner
        setError(auth.error); //set error message to be displayed in modal
        setShowErrorModal(true); //Show Error Modal
        //Reset Username
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    LoginHandler(auth);
  }, [auth]);

  //Toggle Remember UserId
  const toggleSwitch = () => {
    //setIsEnabled(!isEnabled);
  };

  //Close Error Modal
  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
    <View
      style={{ height: "100%" }}
      //contentContainerStyle={{ height: "100%", backgroundColor: "red" }}
      //behavior={Platform.OS === "ios" ? "height" : "padding"}
    >
      {loading ? (
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
            source={require("../../../assets/lottieFiles/loading-spinner.json")}
          />
          <Text>Loading</Text>
        </View>
      ) : error ? (
        <></>
      ) : (
        <View style={{ height: "100%" }}>
          <Text
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: 24,
              color: theme.colors.primary,
              paddingTop: 10,
              marginBottom: config.hp("2%"),
            }}
          >
            Welcome Back
          </Text>

          <View style={styles.inputContainer}>
            <Text
              style={{
                fontSize: 18,
                marginBottom: config.hp(".5%"),
                color: theme.colors.primary,
              }}
            >
              Username
            </Text>
            <TextInput
              placeholderTextColor={"gray"}
              underlineColor="gray"
              style={styles.input}
              label="Email"
              placeholder="Enter your username"
              onChangeText={(value) => handleChange("email", value)}
              textContentType="username"
            />
            <Text
              style={{
                fontSize: 18,
                marginBottom: config.hp(".5%"),
                color: theme.colors.primary,
              }}
            >
              Password
            </Text>
            <TextInput
              placeholderTextColor={"gray"}
              underlineColor="gray"
              style={styles.input}
              label="Password"
              placeholder="Enter your Password"
              onChangeText={(value) => handleChange("password", value)}
              value={user.password}
              secureTextEntry
              textContentType="password"
            />
            <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
              <Text style={{ paddingVertical: 10 }}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* <View style={styles.switchContainer}>
            <Text style={styles.switchText}>Remember User ID</Text>
            <Switch
              trackColor={{ false: "#767577", true: "rgb(14, 164, 75)" }}
              thumbColor={isEnabled ? "white" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View> */}

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => handleSubmit()}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Sign In with password</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTab("Register")}>
              <Text style={{ paddingVertical: 10 }}>
                Need an account? Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <ErrorModal
        showErrorModal={showErrorModal}
        closeErrorModal={closeErrorModal}
        error={error}
      ></ErrorModal>
    </View>
  );
};

export default Login;
