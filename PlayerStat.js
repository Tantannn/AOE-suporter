import React, { useEffect, useRef, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  Circle,
} from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SelectDropdown from "react-native-select-dropdown";
import { Audio } from "expo-av";
import axiosInstance from "./axios/axios";

const PlayerStat = () => {
  useEffect(() => {
    const Getdata = async () => {
      try {
        const data = await axiosInstance.get('v0/leaderboards/rm_solo')
        console.log(data);
      } catch (error) {
    
      }
    }
    Getdata()
  },[])
  return (
    <><p>something in the water</p></>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
  circle: {
    // alignContent: "center",
  },
  buttonn: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignSelf: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "orange",
  },
  timeCircle: {
    alignSelf: "center",
  },
  pauseBtn: {
    width: 100,
    height: 20,
    alignSelf: "center",
    borderRadius: 100,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#000000a0",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
export default PlayerStat;
