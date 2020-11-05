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
      
      <Calendar
      style={styles.cal}
      displayLoadingIndicator
          markingType={'period'}
          theme={{
            calendarBackground: 'white',
            textSectionTitleColor: 'black',
            textSectionTitleDisabledColor: 'black',
            dayTextColor: 'black',
            todayTextColor: 'blue',
            //selectedDayTextColor: 'red',
            monthTextColor: 'black',
            indicatorColor: 'white',
            //selectedDayBackgroundColor: '#333248',
            arrowColor: 'black',
            // textDisabledColor: 'red',
          

            'stylesheet.calendar.header': {
              week: {
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            },
          }}
      />  
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  leftbtn:{},
  rightbtn:{},
  cal: {},
})


export default Calendaar;
