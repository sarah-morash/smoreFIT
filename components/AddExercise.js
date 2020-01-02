import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import API, { graphqlOperation } from "@aws-amplify/api";
import PubSub from "@aws-amplify/pubsub";
import { createExercise } from "../src/graphql/mutations";
import config from "../aws-exports";

API.configure(config); // Configure Amplify
PubSub.configure(config);

const addExercise = async () => {
  const exercise = {};
  await API.graphql(graphqlOperation(createExercise, { input: exercise }));
};

const AddExercise = () => {
  const [exercise, setExercise] = useState(null);

  return (
    <View style={styles.container}>
      <FormLabel>Type of exercise</FormLabel>
      <FormInput onPress={addExercise} />
      <FormValidationMessage>Error message</FormValidationMessage>
      {/* <TextInput title="Type" value={type} /> */}
      {/* <Button onPress={addExercise} title="Add Exercise" /> */}
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

// id
// date
// type
// name
// sets {
//   items {
//     id
//     number
//     reps
//     weight
//   }
//   nextToken
// }
// log {
//   id
//   name
//   exercise {
//     nextToken
//   }
//   user {
//     id
//     userName
//     name
//     age
//     weight
//     bodyFat
//   }
// }
