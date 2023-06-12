import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VillagerReminder from "./VillagerReminder";
import PlayersStat  from "./PlayersStat";
import Home  from "./Home";
import PlayerDetails from "./PlayerDetails";
// import 'expo-dev-client';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer initialRouteName="VillagerReminder">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VillagerReminder" component={VillagerReminder} />
        <Stack.Screen name="PlayersStat" component={PlayersStat} />
        <Stack.Screen name="PlayerDetails" component={PlayerDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
