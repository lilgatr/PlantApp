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

const Calendaar = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btncontainer}>
        <TouchableOpacity
          style={[styles.round, styles.leftbtn]}
          onPress={() => navigation.navigate("today")}>
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
          style={{ marginTop: 16 }}
          displayLoadingIndicator
          markingType={"period"}
          theme={{
            "calendarBackground": "none",
            "textSectionTitleColor": "black",
            "textSectionTitleDisabledColor": "black",
            "dayTextColor": "black",
            "todayTextColor": "blue",
            "monthTextColor": "black",
            "indicatorColor": "black",
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
      <Divider style={styles.lineStyle} />
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
    marginTop: 24,
    paddingHorizontal: 16,
    //justifyContent: "center",
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
    marginTop: 50,
    paddingHorizontal: 16,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "black",
    marginVertical: 16,
    marginHorizontal: 16,
  },
});

export default Calendaar;
