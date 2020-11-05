import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { Constants } from "expo";

const Today = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btncontainer}>
        <TouchableOpacity style={[styles.round, styles.leftbtn]}>
          <Text style={{ color: "black", fontSize: 13, fontWeight: "bold" }}>
            Today
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.round, styles.rightbtn]}>
          <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold" }}>
            Calendar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 50,
//   },
//   btncontainer: {
//     alignSelf: "center",
//     flexDirection: "row",
//     paddingVertical: 16,
//   },
//   leftbtn: {
//     fontSize: 13,
//     fontWeight: "bold",
//     //fontColor: "#352F39",
//     backgroundColor: "#fff",
//     marginTop: 10,
//     padding: 12,
//     //flexDirection: "row",
//     //alignItems: "center",
//     borderColor: "#352F39",
//     borderRadius: 16,
//     borderWidth: 2,

//     //borderBottomWidth: 4,
//   },
//   rightbtn: {
//     fontSize: 13,
//     fontWeight: "bold",

//     //paddingLeft: 16,
//     backgroundColor: "#352F39",
//     marginTop: 10,
//     padding: 12,
//     //flexDirection: "row",
//     //alignItems: "center",
//     borderColor: "#352F39",
//     borderRadius: 16,
//     borderWidth: 2,

//     paddingLeft: 50,
//   },
//   cal: {},
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  btncontainer: {
    flex: 1,
    paddingBottom: 24,
  },
  leftbtn: {
    backgroundColor: "red",
    position: "absolute",
    top: 20,
    left: 100,
    zIndex: 2,
  },

  rightbtn: {
    backgroundColor: "green",
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
    borderRadius: 50,
  },
});

export default Today;
