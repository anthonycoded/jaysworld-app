import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import React, { useEffect, useCallback, useRef } from "react";
import { config } from "../../../config/Config";
import { theme } from "../../../config/Theme";

const Tag = ({ payload, selectTag, item }) => {
  const windowHeight = Dimensions.get("window").height;
  const y = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const TopOrBottom = y.interpolate({
    inputRange: [0, windowHeight / 2 - 1, windowHeight / 2],
    outputRange: [1, 1, -1],
    extrapolate: "clamp",
  });
  const rotate = Animated.multiply(translateX, TopOrBottom).interpolate({
    inputRange: [-1000, 1000],
    outputRange: [`-270deg`, `270deg`],
    extrapolate: "clamp",
  });
  const shake = useCallback(() => {
    // makes the sequence loop
    Animated.loop(
      //   // runs the animation array in sequence
      Animated.sequence([
        // shift element to the left by 2 units
        Animated.timing(translateX, {
          toValue: -20,
          duration: 200,
          useNativeDriver: true,
        }),

        // shift element to the right by 2 units
        Animated.timing(translateX, {
          toValue: 20,
          duration: 200,
          useNativeDriver: true,
        }),
        // bring the element back to its original position
        Animated.timing(translateX, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),

      // loops the above animation config 2 timees
      { iterations: 1 }
    ).start();
  }, []);
  return (
    <Animated.View
      style={{
        transform: [{ translateX }, { translateY }, { rotate }],
        height: 60,
        marginBottom: 30,
        display: "flex",
        flexDirection: "row",
        marginRight: config.wp("2%"),
      }}
    >
      <TouchableOpacity
        onPress={() => {
          selectTag(item);
          payload.tags?.includes(item) ? undefined : shake();
        }}
        style={{
          //width: config.wp("40%"),
          paddingHorizontal: payload.tags?.includes(item)
            ? config.wp("5%")
            : config.wp("5%"),
          backgroundColor: payload.tags?.includes(item)
            ? theme.colors.primary
            : "gray",

          height: "100%",

          borderRadius: 6,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>{item}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Tag;
