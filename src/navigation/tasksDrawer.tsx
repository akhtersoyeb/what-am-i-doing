import { createDrawerNavigator } from "@react-navigation/drawer";
import Tasks from "../screens/tasks/Tasks";

// Screen names
const TASKS = "Tasks";

const Drawer = createDrawerNavigator();
const TasksDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={TASKS} component={Tasks} />
    </Drawer.Navigator>
  );
};

export default TasksDrawer;
