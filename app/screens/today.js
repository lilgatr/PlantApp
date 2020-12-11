import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DATA from "../components/data";
import Calendaar from "./calendar";

const renderItem = ({ item }) => (
  <Item title={item.title} subtitle={item.subtitle} />
);

const Item = ({ title, subtitle }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);

const Stack = createStackNavigator();

function TodayStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Today' component={Today} />
      <Stack.Screen name='calendaar' component={Calendaar} />
    </Stack.Navigator>
  );
}

const Today = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btncontainer}>
        <TouchableOpacity style={[styles.round, styles.leftbtn]}>
          <Text style={{ color: "#FFF", fontSize: 13 }}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.round, styles.rightbtn]}>
          <Text
            style={{
              color: "black",
              fontSize: 13,
            }}
            onPress={() => navigation.navigate("calendaar")}>
            Calendar
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={{ marginBottom: 10, fontSize: 16 }}>Nov 1, 2020</Text>
        <View style={styles.list}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 16,
  },
  btncontainer: {
    paddingBottom: 24,
  },
  leftbtn: {
    backgroundColor: "#352F39",
    position: "absolute",
    top: 20,
    left: 100,
    zIndex: 2,
  },
  rightbtn: {
    backgroundColor: "#FFF",
    position: "absolute",
    top: 20,
    left: 190,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  round: {
    justifyContent: "center",
    alignItems: "center",
    width: 110,
    height: 50,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#352F39",
    borderBottomWidth: 4,
  },
  card: {
    margin: 5,
    marginBottom: 16,
    flexDirection: "column",
    backgroundColor: "#352F39",
    borderBottomWidth: 4,
    //borderColor: "#BECCB9",
    paddingLeft: 12,
    borderRadius: 16,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    paddingTop: 24,
    marginHorizontal: 16,
    fontSize: 24,
  },
  subtitle: {
    color: "#E4E3E3",
    fontWeight: "600",
    marginHorizontal: 16,
    paddingBottom: 22,
    fontSize: 16,
  },
});

export default TodayStack;
