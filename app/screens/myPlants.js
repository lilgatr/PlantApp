import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  Text,
  ImageBackground,
} from "react-native";
import SearchBar from "../components/search";
import DATA from "../components/data";

const renderItem = ({ item }) => (
  <Item title={item.title} subtitle={item.subtitle} />
);
const Item = ({ title, subtitle }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);

const MyPlants = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 16 }}>
          My Plants
        </Text>
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
  card: {
    margin: 16,
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
    paddingTop: 230,
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
//numColumns={2}

export default MyPlants;
