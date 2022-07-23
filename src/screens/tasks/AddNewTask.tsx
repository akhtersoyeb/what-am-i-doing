import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface AddNewTaskProps {
  navigation: any;
}

const AddNewTask = (props: AddNewTaskProps) => {
  const [inputText, setInputText] = useState("");

  const onSubmit = () => {
    props.navigation.state.params.saveItem(inputText);
    props.navigation.goBack();
  };

  return (
    <View>
      <TextInput
        onChangeText={setInputText}
        value={inputText}
        placeholder="Add new task"
        autoFocus={true}
      />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNewTask;

const styles = StyleSheet.create({});
