import { createDrawerNavigator } from "@react-navigation/drawer";
import AddNewTask from "../screens/tasks/AddNewTask";
import Tasks from "../screens/tasks/Tasks";

// Screen names
export const TASKS = "Tasks";
export const ADDNEWTASK = "Add New Task";

const Drawer = createDrawerNavigator();
const TasksStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={TASKS} component={Tasks} />
    </Drawer.Navigator>
  );
};

export default TasksStack;
