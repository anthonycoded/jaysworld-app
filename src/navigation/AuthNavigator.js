import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

import Header from "../components/Header";
import LandingScreen from "../screens/landingScreen/LandingScreen";
import Onboarding from "../screens/onboarding/Onboarding";

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LandingScreen}
          options={{
            headerTitle: (props) => <Header {...props} />,
            headerTitleAlign: "center",
            headerShown: true,
            headerBackVisible: false,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={({ navigation }) => ({
            headerShown: false,
            headerBackVisible: false,
          })}
        ></Stack.Screen>
      </Stack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#0EA44B",
    fontSize: 20,
  },
  nav: {
    backgroundColor: "white",
  },
  headerTitle: {
    color: "blue",
  },
  iconContainer: {
    height: "100%",
    width: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  backIcon: {
    color: "black",
    fontSize: 20,
  },
  barText: {
    fontSize: 20,
  },
  container: {
    height: "100%",
  },
});

export default AuthNavigator;
