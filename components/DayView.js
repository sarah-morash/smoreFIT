import React, { useReducer, useEffect } from "react";
import { StyleSheet } from "react-native";
import { listTodos } from "./src/graphql/queries";
import { onCreateTodo } from "./src/graphql/subscriptions";

const initialState = { todos: [] };
const reducer = (state, action) => {
  switch (action.type) {
    case "QUERY":
      return { ...state, todos: action.todos };
    case "SUBSCRIPTION":
      return { ...state, todos: [...state.todos, action.todo] };
    default:
      return state;
  }
};

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

const DayView = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getData();

    const subscription = API.graphql(graphqlOperation(onCreateTodo)).subscribe({
      next: eventData => {
        const todo = eventData.value.data.onCreateTodo;
        dispatch({ type: "SUBSCRIPTION", todo });
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  async function getData() {
    const todoData = await API.graphql(graphqlOperation(listTodos));
    dispatch({ type: "QUERY", todos: todoData.data.listTodos.items });
  }

  return (
    <View style={styles.day}>
      <Button onPress={createNewTodo} title="Create Todo" />
      {state.todos.map((todo, i) => (
        <Text key={todo.id}>
          {todo.name} : {todo.description}
        </Text>
      ))}

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
};

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

export default DayView;
