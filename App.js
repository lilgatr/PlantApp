import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Title from "./app/screens/title";
import SignIn from "./app/screens/signIn";
import SignUp from "./app/screens/signUp";

import Today from "./app/screens/today";
import Calendaar from "./app/screens/calendar";
import MyPlants from "./app/screens/myPlants";
import Settings from "./app/screens/settings";

import PlantCard from "./app/screens/plantCard";

const Stack = createStackNavigator();
//28 20
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='today' component={Today} />
        <Stack.Screen name='calendaar' component={Calendaar} />
        <Stack.Screen name='myplants' component={MyPlants} />
        <Stack.Screen name='settings' component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
