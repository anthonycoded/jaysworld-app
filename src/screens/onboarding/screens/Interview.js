import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { config } from "../../../config/Config";
import { theme } from "../../../config/Theme";
import Gender from "../components/Gender";
import Profession from "../components/Profession";
import Taste from "../components/Taste";

const Interview = ({ handleChange, payload, handleBack, handleNext }) => {
  const [showGender, setShowGender] = useState(false);
  const [showProfession, setShowProfession] = useState(false);
  //   const [showIncome, setShowIncome] = useState(false);
  //   const [showEducation, setShowEducation] = useState(false);
  //   const [showMarried, setShowMarried] = useState(false);

  function closeGender() {
    setShowGender(false);
  }
  function closeProfession() {
    setShowProfession(false);
  }
  //   function closeIncome() {
  //     setShowIncome(false);
  //   }
  //   function closeEducation() {
  //     setShowEducation(false);
  //   }
  //   function closeMarried() {
  //     setShowMarried(false);
  //   }
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
        Personalization
      </Text>
      <View
        style={{
          flexDirection: "column",
          width: "100%",
          paddingTop: config.hp("1%"),
          paddingHorizontal: config.wp("4%"),
        }}
      >
        <View style={styles.row}>
          <Text style={styles.label}>Gender</Text>
          <TouchableOpacity
            style={styles.dropDownLabel}
            onPress={() => {
              setShowGender(true);
            }}
          >
            {!payload.gender ? (
              <Text style={{ ...styles.label, paddingRight: config.wp("2%") }}>
                Select Gender
              </Text>
            ) : (
              <Text style={styles.label}>{payload.gender}</Text>
            )}

            <AntDesign
              name="caretdown"
              size={20}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Profession</Text>
          <TouchableOpacity
            style={styles.dropDownLabel}
            onPress={() => {
              setShowProfession(true);
            }}
          >
            {!payload.ethnicity ? (
              <Text style={{ ...styles.label, paddingRight: config.wp("2%") }}>
                Select Profession
              </Text>
            ) : (
              <Text style={styles.label}>{payload.ethnicity}</Text>
            )}

            <AntDesign
              name="caretdown"
              size={20}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity
          style={styles.dropDownLabel}
          onPress={() => {
            setShowIncome(true);
          }}
        >
          {!payload.income ? (
            <Text style={styles.label}>Income</Text>
          ) : (
            <Text style={styles.label}>{payload.income}</Text>
          )}

          <AntDesign name="caretdown" size={20} color={theme.colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dropDownLabel}
          onPress={() => {
            setShowEducation(true);
          }}
        >
          {!payload.education ? (
            <Text style={styles.label}>Education</Text>
          ) : (
            <Text style={styles.label}>{payload.education}</Text>
          )}

          <AntDesign name="caretdown" size={20} color={theme.colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dropDownLabel}
          onPress={() => {
            setShowMarried(true);
          }}
        >
          {!payload.married ? (
            <Text style={styles.label}>Marital Status</Text>
          ) : (
            <Text style={styles.label}>{payload.married}</Text>
          )}

          <AntDesign name="caretdown" size={20} color={theme.colors.primary} />
        </TouchableOpacity> */}
      </View>
      {/* <View style={{ marginTop: config.hp("4%") }}>
        <Text style={{ fontSize: 12 }}>By continuing, you agree with our</Text>
        <Text style={{ fontSize: 12 }}>
          Terms & Conditions and Privacy Policy
        </Text>
      </View> */}
      <Taste handleChange={handleChange} payload={payload}></Taste>
      <Modal visible={showGender} transparent={true} animationType={"fade"}>
        <Gender
          handleChange={handleChange}
          closeModal={closeGender}
          payload={payload}
        ></Gender>
      </Modal>
      <Modal visible={showProfession} transparent={true} animationType={"fade"}>
        <Profession
          closeModal={closeProfession}
          handleChange={handleChange}
          payload={payload}
        ></Profession>
      </Modal>
      {/* <Modal visible={showIncome} transparent={true} animationType={"fade"}>
        <Income
          handleChange={handleChange}
          closeModal={closeIncome}
          payload={payload}
        ></Income>
      </Modal>
      <Modal visible={showEducation} transparent={true} animationType={"fade"}>
        <Education
          handleChange={handleChange}
          closeModal={closeEducation}
          payload={payload}
        ></Education>
      </Modal>
      <Modal visible={showMarried} transparent={true} animationType={"fade"}>
        <MaritalStatus
          handleChange={handleChange}
          closeModal={closeMarried}
          payload={payload}
        ></MaritalStatus
        >
      </Modal> */}
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
  container: {
    paddingHorizontal: config.wp("2%"),
    //paddingVertical: config.hp("2%"),
    //alignItems: "center",
    flex: 1,
  },
  dropDownLabel: {
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  input: {
    height: config.hp("5%"),
    backgroundColor: "white",
    width: "100%",
    borderRadius: 8,
    paddingHorizontal: config.wp("2%"),
  },
  inputContainer: {
    marginBottom: config.hp("2%"),
  },
  label: {
    //marginBottom: config.hp("1%"),
    fontSize: 18,
    color: "black",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: config.hp("2%"),
  },
});

export default Interview;
