import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../theme/colors";

interface FloatingButtonProps {
  handleClick: () => void;
}

const FloatingButton = (props: FloatingButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.handleClick}>
      <Icon size={50} name="add-circle" color={Colors.light.primaryColors} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});

export default FloatingButton;
