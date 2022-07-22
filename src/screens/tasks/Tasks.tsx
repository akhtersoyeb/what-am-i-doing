import { StyleSheet, Text, View } from "react-native";
import Colors from "../../theme/colors";
import Todo from "../../components/Todo";

interface TodoDataStructure {
  id: number;
  text: string;
  importance: "low" | "medium" | "high" | "very high";
  isChecked: boolean;
}

const TODODATA: TodoDataStructure[] = [
  {
    id: 1,
    text: "Get the milk",
    importance: "medium",
    isChecked: false,
  },
  {
    id: 2,
    text: "Start coding the app project",
    importance: "high",
    isChecked: false,
  },
  {
    id: 3,
    text: "Visit the dentist for a checkup",
    importance: "very high",
    isChecked: true,
  },
  {
    id: 4,
    text: "Clean the room",
    importance: "low",
    isChecked: true,
  },
];

const Tasks = () => {
  const TodoList = TODODATA.map((todo, index) => (
    <Todo
      key={todo.id}
      id={todo.id}
      text={todo.text}
      isChecked={todo.isChecked}
      importance={todo.importance}
    />
  ));

  return (
    <View style={styles.container}>
      {TodoList}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: Colors.light.background,
  },
  tasksList: {},
});

export default Tasks;
