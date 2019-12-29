/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    userName
    name
    age
    weight
    bodyFat
    settings {
      id
      user {
        id
        userName
        name
        age
        weight
        bodyFat
      }
      lbs
      metric
      darkMode
    }
    log {
      id
      name
      exercise {
        nextToken
      }
      user {
        id
        userName
        name
        age
        weight
        bodyFat
      }
    }
  }
}
`;
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    userName
    name
    age
    weight
    bodyFat
    settings {
      id
      user {
        id
        userName
        name
        age
        weight
        bodyFat
      }
      lbs
      metric
      darkMode
    }
    log {
      id
      name
      exercise {
        nextToken
      }
      user {
        id
        userName
        name
        age
        weight
        bodyFat
      }
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    userName
    name
    age
    weight
    bodyFat
    settings {
      id
      user {
        id
        userName
        name
        age
        weight
        bodyFat
      }
      lbs
      metric
      darkMode
    }
    log {
      id
      name
      exercise {
        nextToken
      }
      user {
        id
        userName
        name
        age
        weight
        bodyFat
      }
    }
  }
}
`;
export const createExerciseLog = `mutation CreateExerciseLog(
  $input: CreateExerciseLogInput!
  $condition: ModelExerciseLogConditionInput
) {
  createExerciseLog(input: $input, condition: $condition) {
    id
    name
    exercise {
      items {
        id
        date
        type
        name
      }
      nextToken
    }
    user {
      id
      userName
      name
      age
      weight
      bodyFat
      settings {
        id
        lbs
        metric
        darkMode
      }
      log {
        id
        name
      }
    }
  }
}
`;
export const updateExerciseLog = `mutation UpdateExerciseLog(
  $input: UpdateExerciseLogInput!
  $condition: ModelExerciseLogConditionInput
) {
  updateExerciseLog(input: $input, condition: $condition) {
    id
    name
    exercise {
      items {
        id
        date
        type
        name
      }
      nextToken
    }
    user {
      id
      userName
      name
      age
      weight
      bodyFat
      settings {
        id
        lbs
        metric
        darkMode
      }
      log {
        id
        name
      }
    }
  }
}
`;
export const deleteExerciseLog = `mutation DeleteExerciseLog(
  $input: DeleteExerciseLogInput!
  $condition: ModelExerciseLogConditionInput
) {
  deleteExerciseLog(input: $input, condition: $condition) {
    id
    name
    exercise {
      items {
        id
        date
        type
        name
      }
      nextToken
    }
    user {
      id
      userName
      name
      age
      weight
      bodyFat
      settings {
        id
        lbs
        metric
        darkMode
      }
      log {
        id
        name
      }
    }
  }
}
`;
export const createExercise = `mutation CreateExercise(
  $input: CreateExerciseInput!
  $condition: ModelExerciseConditionInput
) {
  createExercise(input: $input, condition: $condition) {
    id
    date
    type
    name
    sets {
      items {
        id
        number
        reps
        weight
      }
      nextToken
    }
    log {
      id
      name
      exercise {
        nextToken
      }
      user {
        id
        userName
        name
        age
        weight
        bodyFat
      }
    }
  }
}
`;
export const updateExercise = `mutation UpdateExercise(
  $input: UpdateExerciseInput!
  $condition: ModelExerciseConditionInput
) {
  updateExercise(input: $input, condition: $condition) {
    id
    date
    type
    name
    sets {
      items {
        id
        number
        reps
        weight
      }
      nextToken
    }
    log {
      id
      name
      exercise {
        nextToken
      }
      user {
        id
        userName
        name
        age
        weight
        bodyFat
      }
    }
  }
}
`;
export const deleteExercise = `mutation DeleteExercise(
  $input: DeleteExerciseInput!
  $condition: ModelExerciseConditionInput
) {
  deleteExercise(input: $input, condition: $condition) {
    id
    date
    type
    name
    sets {
      items {
        id
        number
        reps
        weight
      }
      nextToken
    }
    log {
      id
      name
      exercise {
        nextToken
      }
      user {
        id
        userName
        name
        age
        weight
        bodyFat
      }
    }
  }
}
`;
export const createSettings = `mutation CreateSettings(
  $input: CreateSettingsInput!
  $condition: ModelSettingsConditionInput
) {
  createSettings(input: $input, condition: $condition) {
    id
    user {
      id
      userName
      name
      age
      weight
      bodyFat
      settings {
        id
        lbs
        metric
        darkMode
      }
      log {
        id
        name
      }
    }
    lbs
    metric
    darkMode
  }
}
`;
export const updateSettings = `mutation UpdateSettings(
  $input: UpdateSettingsInput!
  $condition: ModelSettingsConditionInput
) {
  updateSettings(input: $input, condition: $condition) {
    id
    user {
      id
      userName
      name
      age
      weight
      bodyFat
      settings {
        id
        lbs
        metric
        darkMode
      }
      log {
        id
        name
      }
    }
    lbs
    metric
    darkMode
  }
}
`;
export const deleteSettings = `mutation DeleteSettings(
  $input: DeleteSettingsInput!
  $condition: ModelSettingsConditionInput
) {
  deleteSettings(input: $input, condition: $condition) {
    id
    user {
      id
      userName
      name
      age
      weight
      bodyFat
      settings {
        id
        lbs
        metric
        darkMode
      }
      log {
        id
        name
      }
    }
    lbs
    metric
    darkMode
  }
}
`;
export const createSet = `mutation CreateSet(
  $input: CreateSetInput!
  $condition: ModelSetConditionInput
) {
  createSet(input: $input, condition: $condition) {
    id
    number
    reps
    weight
    exercises {
      id
      date
      type
      name
      sets {
        nextToken
      }
      log {
        id
        name
      }
    }
  }
}
`;
export const updateSet = `mutation UpdateSet(
  $input: UpdateSetInput!
  $condition: ModelSetConditionInput
) {
  updateSet(input: $input, condition: $condition) {
    id
    number
    reps
    weight
    exercises {
      id
      date
      type
      name
      sets {
        nextToken
      }
      log {
        id
        name
      }
    }
  }
}
`;
export const deleteSet = `mutation DeleteSet(
  $input: DeleteSetInput!
  $condition: ModelSetConditionInput
) {
  deleteSet(input: $input, condition: $condition) {
    id
    number
    reps
    weight
    exercises {
      id
      date
      type
      name
      sets {
        nextToken
      }
      log {
        id
        name
      }
    }
  }
}
`;
