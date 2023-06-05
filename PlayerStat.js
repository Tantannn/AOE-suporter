import React, { useEffect, useRef, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  Circle,
  SafeAreaView,
  TextInput,
} from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SelectDropdown from "react-native-select-dropdown";
import { Audio } from "expo-av";
import axiosInstance from "./axios/axios";

const PlayerStat = () => {
  const [change, onChange] = React.useState("");
  const [submit, onSubmit] = React.useState();
  const [Data, setData] = useState()
  useEffect(() => {
    const Getdata = async () => {
      try {
        const res = await axiosInstance.get("v0/leaderboards/rm_solo");
        // console.log(res.data);
        setData(res.data)
      } catch (error) {}
    };
    Getdata();
  }, []);
  console.log(Data)
  const handleSubmit = async () => { 
    onSubmit(change)
    try {
      const res = await axiosInstance.get(`v0/players/search?query=${submit}`)
    } catch (error) {
      
    }
  }
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={text}
        placeholder="Type the user's name"
        keyboardType="numeric"
      />
      <Button
        color="orange"
        style={styles.buttonn}
        title="Search"
        onPress={handleSubmit()}
      />
    {Data && (
        <>
        <Text>{Data.short_name}</Text>
        {Data.players.slice(0,10).map((player,i) => (
          <React.Fragment key={i}>
            <Text>{i+1}</Text>
            <Text>{player.name}</Text>
            <Text>{player.rating}</Text>
            <Text>{player.games_count}</Text>
            <Text>{player.win_rate}%</Text>
          </React.Fragment>))}  
      </>)}
    </SafeAreaView>
  );
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
