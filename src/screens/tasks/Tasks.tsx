import { StyleSheet, Text, View } from "react-native";
import Todo from "../../components/Todo";

const Tasks = () => {
  return (
    <View style={styles.container}>
      <Todo text="Get the milk" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});

export default Tasks;
