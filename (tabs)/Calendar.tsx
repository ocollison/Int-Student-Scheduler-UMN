import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import ModalDropdown from 'react-native-modal-dropdown';

const CalendarScreen = () => {
  const [selectedMonth, setSelectedMonth] = useState('');

  const renderMonthButton = () => (
    <ModalDropdown
      options={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']}
      onSelect={(index, value) => setSelectedMonth(value)}
    >
      <View style={styles.dropdownButton}>
        <Text>{selectedMonth || 'Select Month'}</Text>
      </View>
    </ModalDropdown>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</Text>
      {renderMonthButton()}
      <Calendar
        markedDates={{
          [new Date().toISOString().split('T')[0]]: { selected: true, selectedColor: 'blue' },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dropdownButton: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default CalendarScreen;
