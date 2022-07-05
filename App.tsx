import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import Colors from "./constants/Colors";
import HeaderText from "./components/HeaderText";
import TaskInputBox from "./components/TaskInputBox";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <HeaderText />
        <TaskInputBox />
        <StatusBar backgroundColor={Colors.primaryColor} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
  },
  defaultText: {
    fontFamily: "patrick-hand",
  },
});
