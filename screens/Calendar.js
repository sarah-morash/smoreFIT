import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const Calendar = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>CALENDAR</Text>
    </ScrollView>
  );
};

Calendar.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  }
});

export default Calendar;
