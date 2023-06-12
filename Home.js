import React from "react";
import {
  StyleSheet,
  View,
  Button,
} from "react-native";
const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        color="orange"
        style={styles.buttonn}
        title="Player Stat"
        onPress={() => navigation.navigate("PlayersStat")}
      />
      <Button
        color="orange"
        style={styles.buttonn}
        title="Villager Reminder"
        onPress={() => navigation.navigate("VillagerReminder")}
      />
    </View>
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
})
export default Home;
