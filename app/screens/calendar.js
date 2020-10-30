import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const Calendaar = () => {
    return (
      <SafeAreaView>
      <View><Text>howdy</Text></View>
      
      <Calendar
      style={styles.cal}
      
      />  
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  cal: {
    borderWidth: 1,
        borderColor: 'gray',
        height: 350,
  },
})


export default Calendaar;
