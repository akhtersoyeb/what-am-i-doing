import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface TodoProps {
  text: string;
}

const Todo = (props: TodoProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        fillColor={checked ? "gray" : "blue"}
        iconStyle={styles.todoIcon}
        textStyle={{ color: checked ? "gray" : "black" }}
        text={props.text}
        onPress={(isChecked: boolean) => setChecked(isChecked)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  todoIcon: {
    borderRadius: 4,
  },
  todoText: {
    color: "black",
  },
});

export default Todo;
