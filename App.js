import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VillagerReminder from "./VillagerReminder";
import PlayerStat from "./PlayerStat";
// import 'expo-dev-client';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer initialRouteName="VillagerReminder">
      <Stack.Navigator>
        <Stack.Screen name="VillagerReminder" component={VillagerReminder} />
        <Stack.Screen name="PlayerStat" component={PlayerStat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
