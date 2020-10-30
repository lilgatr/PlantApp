import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  TouchableOpacity,
  Image,
} from 'react-native';

const Today = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Today</Text> <Text>Calendar</Text>
      <Text>Oct 1, 2020</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Today;