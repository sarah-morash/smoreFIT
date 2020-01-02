import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import AddExercise from "../components/AddExercise";

const Track = () => {
  return (
    <ScrollView style={styles.container}>
      <AddExercise />
    </ScrollView>
  );
};

Track.navigationOptions = {
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

export default Track;
