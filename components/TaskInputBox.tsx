import { ArrowRight } from "react-native-feather";

import { useState } from "react";
import {
  Button,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  TouchableHighlight,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

export default function TaskInputBox() {
  const [text, setText] = useState("");

  const handleInput = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.nativeEvent.text;
    // console.log(value);
    setText(value);
  };

  const handleButton = () => {
    console.log("button clicked");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          multiline
          numberOfLines={1}
          style={styles.input}
          onChange={handleInput}
          value={text}
          placeholder="Reading a book..."
          placeholderTextColor={"#9E9E9E"}
        />
      </View>
      <View style={styles.arrowWrapperContainer}>
        <TouchableHighlight onPress={handleButton} underlayColor="transparent">
          <View style={styles.arrowWrapper}>
            <ArrowRight stroke={"#F8F8F8"} fill="none" width={14} height={12} />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    backgroundColor: Colors.light.primaryColor,
    width: (Layout.window.width - 50),
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    // display: "flex",
    // alignItems: "center",
  },
  input: {
    // width: "",
    textAlignVertical: "top",
    fontFamily: "patrick-hand",
    fontSize: 24,
    color: Colors.light.primaryColor,
    minHeight: 150,
    // margin: 12,
    // borderWidth: 1,
    // padding: 10,
  },
  arrowWrapperContainer: {
    marginTop: -32,
    borderRadius: 61,
    backgroundColor: Colors.light.background,
    padding: 10,
    // alignSelf: "flex-start",
    // justifyContent: "space-between",
  },
  arrowWrapper: {
    overflow: "hidden",
    borderRadius: 33,
    padding: 16,
    backgroundColor: Colors.light.primaryColor,
  },
});
