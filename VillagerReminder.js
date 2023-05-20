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

const image = {
  uri: "https://docs.expo.dev/static/images/tutorial/splash.png",
};
const VillagerReminder = () => {
  const [timer, setTimer] = useState(20);
  const [start, setStart] = useState(false);
  const [sound, setSound] = useState();

  var firstStart = useRef(true);
  var tick = useRef();
  var vilProductTime = useRef(20);
  //sound
  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/blyat.mp4")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  //timer
  useEffect(() => {
    if (firstStart.current) {
      firstStart.current = !firstStart.current;
      return;
    }
    if (start) {
      tick.current = setInterval(() => {
        setTimer((timer) => timer - 0.5);
      }, 500);
    } else {
      clearInterval(tick.current);
    }
    return () => clearInterval(tick.current);
  }, [start]);
  const toggleStart = () => {
    setStart(!start);
    clearInterval(tick.current);
  };
  const toggleRestart = (i) => {
    setTimer(vilProductTime);
    clearInterval(tick.current);
  };
  const dispSecondsAsMins = (seconds) => {
    console.log("seconds " + seconds);
    const mins = Math.floor(seconds / 60);
    const seconds_ = seconds % 60;
    console.log(vilProductTime.current);
    if (seconds < 0) {
      setTimer(vilProductTime.current);
      // playSound()
    }
    return (
      mins.toString() +
      ":" +
      Math.floor(seconds_ == 0 ? "00" : seconds_.toString())
    );
  };
  const civ = [
    "Others",
    "Chinese Song",
    "French Dark Age",
    "French Feudal",
    "French Castle",
    "French Imperial",
  ];

  const VilProductionTime = (i) => {
    console.log(i);
    if (i === 0) {
      setTimer(20);
      return (vilProductTime.current = 20);
    }
    if (i === 1) {
      setTimer(18);
      return (vilProductTime.current = 18);
    }
    if (i === 2) {
      setTimer(19);
      return (vilProductTime.current = 19);
    }
    if (i === 3){
      setTimer(18);
      return (vilProductTime.current = 18);
    }  
    if (i === 4){
      setTimer(17);
      return (vilProductTime.current = 17);
    } ;
    if (i === 5){
      setTimer(16);
      return (vilProductTime.current = 16);
    } ;
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <SelectDropdown
            data={civ}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              VilProductionTime(index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          <Text style={styles.text}>Villiger Reminder</Text>
          <AnimatedCircularProgress
            style={styles}
            size={200}
            width={5}
            prefill={100}
            fill={(timer / vilProductTime.current) * 100}
            padding={10}
            tintColor="tomato"
            // onAnimationComplete={() => console.log("onAnimationComplete")}
            backgroundColor="#3d5875"
            rotation="0"
          >
            {(fill) => <Text>{Math.floor(timer)}</Text>}
          </AnimatedCircularProgress>
          <Text style={styles.text}>{dispSecondsAsMins(timer)}</Text>
          <Button title="Play Sound" onPress={playSound} />

          <Button title={!start ? "START" : "STOP"} onPress={toggleStart} />
          <Button title="Restart" onPress={toggleRestart} />
        </ImageBackground>
      </View>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
  circle: {
    alignContent: "center",
  },
});
export default VillagerReminder;
