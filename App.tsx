import { useState } from "react";

import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import Colors from "./constants/Colors";
import HeaderWithText from "./components/Header";
import TaskInputBox from "./components/TaskInputBox";
import Layout from "./constants/Layout";
import StopButton from "./components/StopButton";

export default function App() {
  const [currentJob, setCurrentJob] = useState("");
  const [jobDuration, setJobDuration] = useState(0);

  const isLoadingComplete = useCachedResources();

  const handleStartButton = (input: string) => {
    setCurrentJob(input.trim());
    // console.log(input);
  };

  const handleStopButton = () => {
    setCurrentJob("");
  };

  const startCountingTime = () => {
    // let jobTime = setInterval(() => setJobDuration(jobDuration + 1), 1000);
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    if (currentJob) {
      return (
        <SafeAreaView style={activeJobStyles.container}>
          <View style={activeJobStyles.headerContainer}>
            <Image
              // style={styles.avatarImage}
              resizeMode="contain"
              source={require("./assets/images/avatar-thinking.png")}
            />
          </View>

          <Text style={activeJobStyles.jobText}>{currentJob}</Text>

          <StopButton handleButton={handleStopButton} time={jobDuration} />
          <StatusBar
            backgroundColor={Colors.light.background}
            barStyle="dark-content"
          />
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView style={noJobStyles.container}>
          <HeaderWithText />
          <TaskInputBox handleButton={handleStartButton} />

          <StatusBar
            backgroundColor={Colors.light.background}
            barStyle="dark-content"
          />
        </SafeAreaView>
      );
    }
  }
}

const activeJobStyles = StyleSheet.create({
  container: {
    // display: "flex",
    flex: 1,
    alignItems: "center",
    marginBottom: 100,
  },
  headerContainer: {
    // backgroundColor: "red",
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 30,
  },
  jobText: {
    // backgroundColor: "red",
    flex: 1,
    color: Colors.light.primaryColor,
    fontSize: 36,
    fontWeight: "bold",
    width: (Layout.window.width - 50),
  },
});

const noJobStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    alignItems: "center",
  },
  defaultText: {
    fontFamily: "patrick-hand",
  },
});
