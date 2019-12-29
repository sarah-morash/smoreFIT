import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const Settings = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>SettingsScreen</Text>
    </ScrollView>
  );
};

SettingsScreen.navigationOptions = {
  title: "Links"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default Settings;
