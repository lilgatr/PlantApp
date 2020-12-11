import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 32 }}>Settings</Text>
      </View>
      <View style={styles.secondHeader}>
        <Text style={{ fontSize: 21, color: "#474A57", fontWeight: "500" }}>
          General
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.settings}>
          <Text style={styles.text}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings}>
          <Text style={styles.text}>Preferences</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings}>
          <Text style={styles.text}>Display and Sound</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings}>
          <Text style={styles.text}>Accessability</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings}>
          <Text style={styles.text}>Privacy</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 32,
  },
  header: {
    marginTop: 50,
    alignSelf: "center",
  },
  secondHeader: {
    paddingBottom: 16,
  },
  settings: {
    paddingBottom: 10,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Settings;
