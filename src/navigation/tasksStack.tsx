// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddNewTask from "../screens/tasks/AddNewTask";
import Tasks from "../screens/tasks/Tasks";

// Screen names
export const TASKS = "Tasks";
export const ADDNEWTASK = "Add New Task";

// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const TasksStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={TASKS} component={Tasks} />
      <Stack.Screen name={ADDNEWTASK} component={AddNewTask} />
    </Stack.Navigator>
  );
};

export default TasksStack;
