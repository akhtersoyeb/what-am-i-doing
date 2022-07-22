import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Colors from "../theme/colors";

interface TodoProps {
  id: number;
  text: string;
  importance: "low" | "medium" | "high" | "very high";
  isChecked: boolean;
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
          color: props.isChecked
            ? Colors.light.checkedTodoText
            : Colors.light.unCheckedTodoText,
        }}
        text={props.text}
        isChecked={props.isChecked}
        onPress={(isChecked: boolean) => {
        }}
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
