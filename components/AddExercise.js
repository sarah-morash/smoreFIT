import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import API, { graphqlOperation } from "@aws-amplify/api";
import PubSub from "@aws-amplify/pubsub";
import { createExercise } from "./src/graphql/mutations";

import config from "./aws-exports";
API.configure(config); // Configure Amplify
PubSub.configure(config);

async function addExercise() {
  const exercise = { name: "Use AppSync", description: "Realtime and Offline" };
  await API.graphql(graphqlOperation(createExercise, { input: exercise }));
}

const AddExercise = () => {
  return (
    <View style={styles.container}>
      <Button onPress={addExercise} title="Add Exercise" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddeeff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});

export default AddExercise;
