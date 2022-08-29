import { View, Text, Dimensions, Animated } from "react-native";
import React, { useEffect, useCallback, useRef } from "react";
import Button from "../../../components/Button";
import { config } from "../../../config/Config";
import { theme } from "../../../config/Theme";
import { beatTypes } from "./options";
import Tag from "./Tag";

const Taste = ({ handleChange, payload }) => {
  function selectTag(tag) {
    if (payload.tags?.includes(tag)) {
      let array = payload.tags?.filter((item) => item != tag);
      handleChange("tags", array);
      return;
    }
    let tags = [...payload.tags, tag];
    handleChange("tags", tags);
  }

  useEffect(() => {
    console.log(payload);
  }, [payload]);

  return (
    <View style={{ paddingTop: config.hp("6%"), width: "100%" }}>
      <Text
        style={{
          fontSize: 18,
          //paddingHorizontal: config.hp("2%"),
          width: "100%",
          textAlign: "left",
          fontWeight: "400",
          color: theme.colors.primary,
          marginBottom: config.hp("2%"),
        }}
      >
        What type of music do you like?
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          //flex: 1,
          //paddingHorizontal: config.wp("6%"),
        }}
      >
        {beatTypes?.map((item, i) => (
          <Tag
            key={i}
            item={item}
            payload={payload}
            selectTag={selectTag}
          ></Tag>
        ))}
      </View>
    </View>
  );
};

export default Taste;
