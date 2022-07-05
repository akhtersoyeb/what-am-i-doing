import { ChangeEvent, useState } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
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

  return (
    <View style={styles.inputContainer}>
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
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.primaryColor,
    width: (Layout.window.width - 50),
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
  },
  input: {
    textAlignVertical: "top",
    fontFamily: "patrick-hand",
    fontSize: 24,
    color: Colors.primaryTextColor,
    minHeight: 150,
    // margin: 12,
    // borderWidth: 1,
    // padding: 10,
  },
});
