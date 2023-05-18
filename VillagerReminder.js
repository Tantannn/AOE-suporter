import React, { useEffect, useRef, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Button,Circle } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { SafeAreaProvider } from "react-native-safe-area-context";

const image = {
  uri: "https://docs.expo.dev/static/images/tutorial/splash.png",
};
const VillagerReminder = () => {
  const [timer, setTimer] = useState(20); // 25 minutes
  const [start, setStart] = useState(false);
  var firstStart = useRef(true);
  var tick = useRef();
  useEffect(() => {
    if (firstStart.current) {
      firstStart.current = !firstStart.current;
      return;
    }
    if (start) {
      tick.current = setInterval(() => {
        // <-- set tick ref current value
        setTimer((timer) => timer - 0.5);
      }, 500);
    } else {
      clearInterval(tick.current); // <-- access tick ref current value
    }
    return () => clearInterval(tick.current); // <-- clear on unmount!
  }, [start]);
  const toggleStart = () => {
    setStart(!start);
    clearInterval(tick.current);
  };
  const toggleRestart = (params) => {
    setTimer(20);
  };
  const dispSecondsAsMins = (seconds) => {
    console.log("seconds " + seconds);
    const mins = Math.floor(seconds / 60);
    const seconds_ = seconds % 60;
    if (seconds < 0) {
      setTimer(20);
    }
    return (
      mins.toString() +
      ":" +
      Math.floor(seconds_ == 0 ? "00" : seconds_.toString())
    );
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.text}>Villiger Reminder</Text>
          <AnimatedCircularProgress
            style={styles.text}
            size={200}
            width={5}
            prefill={100}
            fill={(timer / 20) * 100}
            padding={10}
            tintColor="tomato"
            // onAnimationComplete={() => console.log("onAnimationComplete")}
            backgroundColor="#3d5875"
            rotation="0"
          >
            {(fill) => <Text>{fill}</Text>}
          </AnimatedCircularProgress>
          <Text style={styles.text}>{dispSecondsAsMins(timer)}</Text>
          {/* <Text style={styles.text}>{time}</Text> */}
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
