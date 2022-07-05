import { StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

export default function HeaderText() {
  return <Text style={styles.header}>What Am I Doing?</Text>;
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 32,
    color: Colors.primaryTextColor,
    fontSize: 36,
    fontFamily: "patrick-hand",
    textAlign: "center",
  },
});
