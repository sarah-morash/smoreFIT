import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const Calendar = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>LinksScreen</Text>
    </ScrollView>
  );
};

LinksScreen.navigationOptions = {
  title: "Links"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default Calendar;
