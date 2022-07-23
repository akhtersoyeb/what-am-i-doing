import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { values as _values } from "lodash";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../theme/colors";
import Todo from "../../components/Todo";
import { FlatList, TextInput } from "react-native-gesture-handler";
import FloatingButton from "../../components/FloatingButton";

type TodoType = {
  id: string;
  text: string;
  importance: "low" | "medium" | "high" | "very high";
  isCompleted: boolean;
};

type TodoStorageType = Record<TodoType["id"], TodoType>;

// const TODODATA: TodoDataStructure[] = [
//   {
//     text: "Get the milk",
//     importance: "medium",
//     isChecked: false,
//   },
//   {
//     text: "Start coding the app project",
//     importance: "high",
//     isChecked: false,
//   },
//   {
//     text: "Visit the dentist for a checkup",
//     importance: "very high",
//     isChecked: true,
//   },
//   {
//     text: "Clean the room",
//     importance: "low",
//     isChecked: true,
//   },
// ];

const Tasks = () => {
  const [todos, setTodos] = useState({});
  const [isDataReady, setIsDataReady] = useState(false);
  // const [newTodoObject]
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const loadTodos = async () => {
    try {
      const getTodos = await AsyncStorage.getItem("@todos");
      const parsedTodos = JSON.parse(getTodos ? getTodos : "");
      setTodos(parsedTodos);
      setIsDataReady(true);
    } catch (err) {
      alert("Application error. Cannot load data");
    }
  };

  const addTodo = () => {
    if (inputText) {
      const ID = uuid.v1();
      const newTodoObject = {
        [ID.toString()]: {
          id: ID,
          text: inputText,
          importance: "low",
          isCompleted: false,
        },
      };

      setTodos({ ...todos, ...newTodoObject });
    }
  };

  const saveTodos = async (newTodos: TodoStorageType) => {
    try {
      await AsyncStorage.setItem("@todos", JSON.stringify(newTodos));
    } catch (err) {
      alert("Error while saving new todos");
    }
  };

  if (!isDataReady) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {todos
        ? (
          <FlatList
            data={_values(todos)}
            // contentContainerStyle={}
            renderItem={({ item }) => {
              return (
                <Todo
                  id={item.id}
                  text={item.text}
                  isCompleted={item.isCompleted}
                  importance={item.importance}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        )
        : <Text>No todo to show</Text>}
      {/* Form to add new task */}
      <View>
        <TextInput
          onChangeText={setInputText}
          value={inputText}
          placeholder="Add new task"
        />
        <TouchableOpacity onPress={addTodo}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      <FloatingButton
        handleClick={() => {}}
      />
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
