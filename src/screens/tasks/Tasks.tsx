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

const Tasks = () => {
  const [todos, setTodos] = useState({});
  const [isDataReady, setIsDataReady] = useState(false);
  const [inputText, setInputText] = useState("");

  // Load todos for the first render
  useEffect(() => {
    loadTodos();
  }, []);

  // Save todos locally when todos state changes
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

  const saveTodos = async (newTodos: TodoStorageType) => {
    try {
      await AsyncStorage.setItem("@todos", JSON.stringify(newTodos));
    } catch (err) {
      alert("Error while saving new todos");
    }
  };

  const addNewTodo = () => {
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
            keyExtractor={(item) => item.id}
            renderItem={({ item }: { item: TodoType }) => {
              return (
                <Todo
                  id={item.id}
                  text={item.text}
                  isCompleted={item.isCompleted}
                  importance={item.importance}
                />
              );
            }}
            data={_values(todos) as TodoType[]}
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
        <TouchableOpacity onPress={addNewTodo}>
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
