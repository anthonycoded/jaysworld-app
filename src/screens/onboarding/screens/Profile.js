import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import { config } from "../../../config/Config";
import { theme } from "../../../config/Theme";
import { Ionicons } from "@expo/vector-icons";

const Profile = ({ handleNext, handleBack }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          color: theme.colors.primary,
          marginBottom: config.hp("2%"),
        }}
      >
        Profile
      </Text>
      <View
        style={{
          alignItems: "center",
          marginBottom: config.hp("2%"),
        }}
      >
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: "gray",
            marginBottom: config.hp("1%"),
          }}
        >
          Add a profile picture to personalize your experience
        </Text>
        <TouchableOpacity style={{ position: "relative" }}>
          <Ionicons
            name="person-circle"
            size={config.wp("20%")}
            color={theme.colors.primary}
          />
          <Ionicons
            name="camera"
            size={30}
            color="black"
            style={styles.camera}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <View style={{ width: "48%" }}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter First Name"
            placeholderTextColor="gray"
          ></TextInput>
        </View>
        <View style={{ width: "48%" }}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Last Name"
            placeholderTextColor="gray"
          ></TextInput>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={{ width: "48%" }}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email Adress"
            placeholderTextColor="gray"
            keyboardType="email-address"
          ></TextInput>
        </View>

        <View style={{ width: "48%" }}>
          <Text style={styles.label}>Username</Text>
          <Text style={styles.input}></Text>
        </View>
      </View>
      <View style={{ width: "48%" }}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          placeholderTextColor="gray"
          keyboardType="number-pad"
        ></TextInput>
      </View>
      <View style={{ width: "48%" }}>
        <Text style={styles.label}>Birthday</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Birthday"
          placeholderTextColor="gray"
          keyboardType="number-pad"
        ></TextInput>
      </View>
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}
      >
        <TouchableOpacity
          onPress={handleNext}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.colors.primary,
            width: "80%",
            borderRadius: 7,
            paddingVertical: config.hp("1%"),
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleBack}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            //backgroundColor: theme.colors.primary,
            width: "80%",
            //borderRadius: 7,
            paddingVertical: config.hp("1%"),
          }}
        >
          <Text style={{ fontSize: 20 }}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    padding: 40,
    borderRadius: 100,
    margin: 25,
  },
  camera: {
    position: "absolute",
    left: 55,
    top: 5,
  },
  container: {
    paddingHorizontal: config.wp("2%"),
    //paddingVertical: config.hp("2%"),
    //backgroundColor: "#0d47a1",
    flex: 1,
  },
  input: {
    height: config.hp("5%"),
    backgroundColor: "white",
    width: "100%",
    borderRadius: 7,
    fontSize: 18,
    paddingHorizontal: config.wp("1%"),
    marginBottom: config.hp("2%"),
    borderBottomWidth: 1,
  },
  inputContainer: {
    //
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: config.hp("1%"),
  },
  label: {
    color: theme.colors.primary,
    fontSize: 16,
    marginBottom: config.hp(".5%"),
  },
});

export default Profile;
