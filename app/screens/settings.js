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

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 32 }}>Settings</Text>
      </View>
      <View style={styles.secondHeader}>
        <Text style={{ fontSize: 21, color: "#474A57" }}>General</Text>
      </View>
      <View style={styles.settings}>
        <TouchableOpacity>
          <Text>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Preferences</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Display and Sound</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Accessability</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Privacy</Text>
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
    marginHorizontal: 16,
  },
});

export default Settings;
