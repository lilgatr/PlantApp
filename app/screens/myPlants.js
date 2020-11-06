import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  Text,
} from "react-native";

const MyPlants = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>My Plants</Text>

      <FlatList></FlatList>
      <TouchableOpacity style={styles.circlebutton}>
        <Image />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circlebutton: {
    //marginBottom: 46,
    width: 60,
    height: 60,
    backgroundColor: "#FDEE68",
    borderRadius: 50,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "#352F39",
  },
});

export default MyPlants;
