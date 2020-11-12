import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Title from "../screens/title";
import SignIn from "../screens/signIn";
import SignUp from "../screens/signUp";

import Today from "../screens/today";
import Calendaar from "../screens/calendar";
import MyPlants from "../screens/myPlants";
import Settings from "../screens/settings";

import PlantCard from "../screens/plantCard";

const Stack = createStackNavigator();
//28 20
function Routes() {
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

export default Routes;

//35 51
