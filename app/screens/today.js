import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  SectionList,
  TouchableOpacity,
  Image,
  Button,
  Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Calendaar from "./calendar";

const Today = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btncontainer}>
        <TouchableOpacity style={[styles.round, styles.leftbtn]}>
          <Text style={{ color: "#FFF", fontSize: 13, fontWeight: "bold" }}>
            Today
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.round, styles.rightbtn]}>
          <Text
            style={{ color: "black", fontSize: 13, fontWeight: "bold" }}
            onPress={() => navigation.navigate("calendaar")}>
            Calendar
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text>Nov 1, 2020</Text>
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
});

export default Today;
