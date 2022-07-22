import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

// Screens
import TaskList from "../screens/taskList/TaskList";
import Habit from "../screens/habit/Habit";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";

          if (route.name === "Task list") {
            iconName = focused ? "ios-checkbox" : "ios-checkbox-outline";
          } else if (route.name === "Habit") {
            iconName = focused ? "ios-sync-circle" : "ios-sync-circle-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Task list" component={TaskList} />
      <Tab.Screen name="Habit" component={Habit} />
    </Tab.Navigator>
  );
};

export default BottomTab;
