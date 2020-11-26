import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Provider as PaperProvider } from "react-native-paper";

import Title from "./app/screens/title";
import SignIn from "./app/screens/signIn";
import SignUp from "./app/screens/signUp";

import Today from "./app/screens/today";
import Calendaar from "./app/screens/calendar";
import MyPlants from "./app/screens/myPlants";
import Settings from "./app/screens/settings";

import PlantCard from "./app/screens/plantCard";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();
// 22:03

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='today' component={Today} />
        <Tab.Screen name='calendaar' component={Calendaar} />
        <Tab.Screen name='myplants' component={MyPlants} />
        <Tab.Screen name='settings' component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

export default Main;
