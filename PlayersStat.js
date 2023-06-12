import React, { useEffect,  useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  TextInput,
} from "react-native";

import axiosInstance from "./axios/axios";
import { DataTable } from 'react-native-paper';

const PlayersStat = ({navigation}) => {
  const [change, onChange] = React.useState("");
  const [submit, onSubmit] = React.useState();
  const [data, setData] = useState()
  const [search, setSearch] = useState()
  useEffect(() => {
    const Getdata = async () => {
      try {
        const res = await axiosInstance.get("v0/leaderboards/rm_solo");
        setData(res.data)
      } catch (error) {}
    };
    Getdata();
  }, []);
  console.log(data)
  const handleSubmit =  () => { 
    onSubmit(change)
    navigation.navigate('PlayerDetails', submit);
  }
  console.log(data)
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={e=> onChange(e)}
        // value={text}
        placeholder="Type the user's name"
        keyboardType="numeric"
      />
      <Button
        color="orange" 
        style={styles.buttonn}
        title="Search"
        onPress={()=>handleSubmit()} 
      />
      {data && (
        <>
          <Text>{data.short_name}</Text>
          <DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title>No.</DataTable.Title>
              <DataTable.Title>Name</DataTable.Title>
              <DataTable.Title>Rating</DataTable.Title>
              <DataTable.Title>Games</DataTable.Title>
              <DataTable.Title>Win Rates</DataTable.Title>
            </DataTable.Header>

            {data.players.slice(0,10).map((player,i) => (
              <DataTable.Row key={i}>
                <DataTable.Cell>{i+1}</DataTable.Cell>
                <DataTable.Cell>{player.name}</DataTable.Cell>
                <DataTable.Cell>{player.rating}</DataTable.Cell>
                <DataTable.Cell>{player.games_count}</DataTable.Cell>
                <DataTable.Cell>{player.win_rate}%</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
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
export default PlayersStat;
