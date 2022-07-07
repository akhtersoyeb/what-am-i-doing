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

interface TaskInputBoxProps {
  handleButton: (text: string) => void;
}

export default function TaskInputBox(props: TaskInputBoxProps) {
  const [text, setText] = useState("");

  const handleInputChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const value = e.nativeEvent.text;
    // console.log(value);
    setText(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          multiline
          numberOfLines={1}
          style={styles.input}
          onChange={handleInputChange}
          value={text}
          placeholder="Reading a book..."
          placeholderTextColor={"#8E9AAB"}
        />
      </View>
      <View style={styles.arrowWrapperContainer}>
        <TouchableHighlight
          onPress={() => props.handleButton(text)}
          underlayColor="transparent"
        >
          <View style={styles.arrowWrapper}>
            <ArrowRight stroke={"#1D3557"} fill="none" width={14} height={12} />
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
    backgroundColor: "white",
    width: (Layout.window.width - 50),
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    // display: "flex",
    // alignItems: "center",
    elevation: 2,
    shadowColor: "#1D3557",
  },
  input: {
    // width: "",
    textAlignVertical: "top",
    // fontFamily: "patrick-hand",
    fontSize: 24,
    color: Colors.light.primaryColor,
    minHeight: 150,
    // margin: 12,
    // borderWidth: 1,
    // padding: 10,
  },
  arrowWrapperContainer: {
    // elevation: 4,
    zIndex: 10,
    marginTop: -32,
    borderRadius: 61,
    backgroundColor: Colors.light.background,
    padding: 10,
    // alignSelf: "flex-start",
    // justifyContent: "space-between",
  },
  arrowWrapper: {
    elevation: 2,
    shadowColor: "#1D3557",
    overflow: "hidden",
    borderRadius: 33,
    padding: 16,
    backgroundColor: "white",
  },
});
