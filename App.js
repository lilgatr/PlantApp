import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Calendaar from "./app/screens/calendar";
import Title from "./app/screens/title";
import MyPlants from "./app/screens/myPlants";
import PlantCard from "./app/screens/plantCard";
import Settings from "./app/screens/settings";
import SignIn from "./app/screens/signIn";
import SignUp from "./app/screens/signUp";
import Today from "./app/screens/today";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='today' component={Today} />
        <Stack.Screen name='calendaar' component={Calendaar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
