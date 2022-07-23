import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Colors from "../theme/colors";

interface TodoProps {
  id: string;
  text: string;
  importance: "low" | "medium" | "high" | "very high";
  isCompleted: boolean;
}

const Todo = (props: TodoProps) => {
  let fillColor = Colors.light.todoFill;

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={20}
        fillColor={fillColor}
        iconStyle={styles.todoIcon}
        textStyle={{
          color: props.isCompleted
            ? Colors.light.checkedTodoText
            : Colors.light.unCheckedTodoText,
        }}
        text={props.text}
        isChecked={props.isCompleted}
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  todoIcon: {
    borderRadius: 4,
  },
  todoText: {
    color: "black",
  },
});

export default Todo;
