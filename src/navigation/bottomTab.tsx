import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import Calendar from "../screens/calendar/Calendar";
import Focus from "../screens/focus/Focus";
import Matrix from "../screens/matrix/Matrix";
import Settings from "../screens/settings/Settings";
import Tasks from "../screens/tasks/Tasks";
import TasksStack from "./tasksStack";

// Screen names
const TASKS = "Tasks inbox";
const CALENDAR = "Calendar";
const FOCUS = "Focus";
const MATRIX = "Matrix";
const SETTINGS = "Settings";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={TASKS}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";

          if (route.name === TASKS) {
            iconName = focused ? "ios-checkbox" : "ios-checkbox-outline";
          } else if (route.name === CALENDAR) {
            iconName = focused ? "ios-calendar" : "ios-calendar-outline";
          } else if (route.name === FOCUS) {
            iconName = focused ? "hourglass" : "hourglass-outline";
          } else if (route.name === MATRIX) {
            iconName = focused ? "grid" : "grid-outline";
          } else if (route.name === SETTINGS) {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen
        name={TASKS}
        component={TasksStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen name={CALENDAR} component={Calendar} />
      <Tab.Screen name={FOCUS} component={Focus} />
      <Tab.Screen name={MATRIX} component={Matrix} />
      <Tab.Screen name={SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTab;
