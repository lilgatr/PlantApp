import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  SectionList,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { Divider, Text } from "react-native-paper";
import { Constants } from "expo";

const Calendaar = () => {
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
      <View style={styles.cal}>
        <Calendar
          displayLoadingIndicator
          markingType={"period"}
          theme={{
            "calendarBackground": "white",
            "textSectionTitleColor": "black",
            "textSectionTitleDisabledColor": "black",
            "dayTextColor": "black",
            "todayTextColor": "blue",
            "monthTextColor": "black",
            "indicatorColor": "white",
            "arrowColor": "black",

            "stylesheet.calendar.header": {
              week: {
                marginTop: 5,
                flexDirection: "row",
                justifyContent: "space-between",
              },
            },
          }}
        />
      </View>
      <Divider style={{ marginVertical: 16 }} />
      <View style={styles.bcontainer}>
        <Text style={{ color: "grey", fontSize: 13, fontWeight: "semi-bold" }}>
          10 AM
        </Text>
        <Text style={{ color: "black", fontSize: 13, fontWeight: "bold" }}>
          Water the Planes
        </Text>
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
  bcontainer: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 16,
    flexDirection: "column",
  },
  btncontainer: {
    paddingBottom: 24,
  },
  leftbtn: {
    backgroundColor: "#FFF",
    position: "absolute",
    top: 20,
    left: 100,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  rightbtn: {
    backgroundColor: "#352F39",
    position: "absolute",
    top: 20,
    left: 190,
    zIndex: 2,
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
  cal: {
    justifyContent: "center",
    marginTop: 100,
    marginBottom: 450,
    paddingHorizontal: 16,
  },
  lineStyle: { borderWidth: 1, borderColor: "black", margin: 10 },
});

export default Calendaar;

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
// });+
