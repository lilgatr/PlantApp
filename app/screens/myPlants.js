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
  <View style={styles.list}>
    <Text style={styles.card}>{title}</Text>
  </View>
);

const MyPlants = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>My Plants</Text>
        <SearchBar />
      </View>
      <View style={styles.list}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.circlebutton}>
          <Image />
        </TouchableOpacity>
      </View>
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
    margin: 16,
    flexDirection: "column",
    //backgroundColor: "grey",
  },
  card: {
    backgroundColor: "grey",
    //justifyContent: "space-around",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  circlebutton: {
    width: 60,
    height: 60,
    backgroundColor: "#FDEE68",
    borderRadius: 50,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "#352F39",
  },
  bottom: {
    alignItems: "flex-end",
    margin: 16,
  },
});

export default MyPlants;
