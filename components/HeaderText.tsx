import { Image, StyleSheet, Text, View } from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

export default function HeaderText() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>What Am I Doing ?</Text>
      <Image
        style={styles.avatarImage}
        source={require("../assets/images/avatar-thinking.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 60,
    marginBottom: 30,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // width: Layout.window.width - 50,
    maxWidth: "100%",
    // backgroundColor: "red",
  },
  avatarImage: {
    resizeMode: "contain",
    // backgroundColor: "blue",
    // height: 225,
    // width: 225,
  },
  header: {
    // backgroundColor: "red",
    width: 184,
    // marginVertical: 32,
    color: Colors.light.primaryColor,
    fontSize: 36,
    fontWeight: "bold",
    // fontFamily: "patrick-hand",
    // textAlign: "center",
  },
});
