import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import TodayStack from "./app/screens/today";
import MyPlants from "./app/screens/myPlants";
import Settings from "./app/screens/settings";

const Tab = createBottomTabNavigator();
// 22:03

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='today' component={TodayStack} />
        <Tab.Screen name='myplants' component={MyPlants} />
        <Tab.Screen name='settings' component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
