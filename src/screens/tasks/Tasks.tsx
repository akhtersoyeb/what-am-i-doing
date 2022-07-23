import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { values as _values } from "lodash";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../../theme/colors";
import Todo from "../../components/Todo";
import FloatingButton from "../../components/FloatingButton";
import { ADDNEWTASK } from "../../navigation/tasksStack";

type TodoType = {
  id: string;
  text: string;
  importance: "low" | "medium" | "high" | "very high";
  isCompleted: boolean;
};

type TodoStorageType = Record<TodoType["id"], TodoType>;

interface TasksProps {
  navigation: any;
}

const Tasks = (props: TasksProps) => {
  const [todos, setTodos] = useState({});
  const [isDataReady, setIsDataReady] = useState(false);
  // const [inputText, setInputText] = useState("");

  // Load todos from local storage when app starts
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

  const addNewTodo = (inputText: string) => {
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

  const handleFloatingButton = () => {
    props.navigation.navigate("Add New Task", {
      saveItem: addNewTodo,
    });
  };

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
        : <Text>No tasks to show</Text>}

      <FloatingButton
        handleClick={handleFloatingButton}
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
