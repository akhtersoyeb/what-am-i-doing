import { useEffect, useState } from "react";

import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import HeaderWithText from "./components/Header";
import StopButton from "./components/StopButton";
import TaskInputBox from "./components/TaskInputBox";
import Colors from "./constants/Colors";
import Layout from "./constants/Layout";
import useCachedResources from "./hooks/useCachedResources";

export default function App() {
  const [currentJob, setCurrentJob] = useState("");
  const [jobDuration, setJobDuration] = useState(0);

  const isLoadingComplete = useCachedResources();

  const handleStartButton = async (input: string) => {
    storeData(input.trim());
    setCurrentJob(input.trim());
  };

  const handleStopButton = () => {
    setCurrentJob("");
    clearStorage();
  };

  // const startCountingTime = () => {
  // let jobTime = setInterval(() => setJobDuration(jobDuration + 1), 1000);
  // };

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem("@running_job_key", value);
      // console.log("data saved");
    } catch (e) {
      alert("Failed to save the data to the storage");
    }
  };

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem("@running_job_key");
      // console.log("found data: " + value);
      if (value !== null) {
        setCurrentJob(value);
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      // alert("Storage successfully cleared!");
    } catch (e) {
      console.log("Failed to clear the async storage.");
    }
  };

  useEffect(() => {
    // console.log("running readData");
    readData();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    if (currentJob) {
      return (
        <SafeAreaView style={activeJobStyles.container}>
          <View style={activeJobStyles.headerContainer}>
            <Image
              style={{ width: 225, height: 225 }}
              resizeMode="contain"
              source={require("./assets/images/adaptive-icon.png")}
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
    flex: 1,
    backgroundColor: Colors.light.background,
    alignItems: "center",
    paddingBottom: 100,
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
    textAlign: "center",
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
