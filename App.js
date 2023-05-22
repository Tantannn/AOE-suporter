import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VillagerReminder from "./VillagerReminder";
// import 'expo-dev-client';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={VillagerReminder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;