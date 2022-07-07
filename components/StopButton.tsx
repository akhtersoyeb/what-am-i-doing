import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Colors from "../constants/Colors";

interface StopButtonProps {
  handleButton: () => void;
  time: number;
}

export default function StopButton(props: StopButtonProps) {
  return (
    <TouchableWithoutFeedback onPress={props.handleButton}>
      <View style={styles.container}>
        <Text style={styles.text}>Stop</Text>
        {/* <Text style={styles.text}>{props.time}</Text> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    width: 320,
    backgroundColor: Colors.light.primaryColor,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    // justifyItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 8,
    // color: "#E5E5E5",
  },
  text: {
    color: "white",
    fontSize: 24,
  },
});
