import React from "react";
import { StyleSheet } from "react-native";

const exercies = [
  {
    type: "powerlifting",
    name: "squat",
    sets: [{ reps: 5, weight: 100, measure: "lbs" }]
  },
  {
    type: "bodybuilding",
    name: "pullups",
    sets: [{ reps: 5, weight: 0, measure: "lbs" }]
  }
];

export default function DayView(props) {
  return (
    <View style={styles.day}>
      {exercies.map(exercise => (
        <View style={styles.exercise}>
          <Text style={styles.name}>{exercise.name}</Text>
          <Text style={styles.type}>{exercise.type}</Text>
          <View style={styles.sets}>
            {exercise.sets.map(set => (
              <>
                <Text style={styles.reps}>{set.reps}</Text>
                <Text style={styles.weight}>{set.weight}</Text>
              </>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  day: {
    backgroundColor: "#111",
    color: "#fff",
    padding: 10,
    flex: 1
  },
  exercise: {
    color: "#fff"
  },
  name: {
    color: "#fff"
  },
  type: {
    color: "#fff"
  },
  sets: {
    color: "#fff"
  },
  reps: {
    color: "#fff"
  },
  weight: {
    color: "#fff"
  }
});
