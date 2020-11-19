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
import SearchBar from "../components/search";
import DATA from "../components/data";

const renderItem = ({ item }) => <Item title={item.title} />;
const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const MyPlants = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>My Plants</Text>
        <SearchBar />
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <TouchableOpacity style={styles.circlebutton}>
        <Image />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  top: {
    marginLeft: 16,
    marginTop: 16,
  },
  list: {
    flexDirection: "column",
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
    //alignContent: "right",
  },
});

export default MyPlants;
