/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateExerciseLog = `subscription OnCreateExerciseLog {
  onCreateExerciseLog {
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
export const onUpdateExerciseLog = `subscription OnUpdateExerciseLog {
  onUpdateExerciseLog {
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
export const onDeleteExerciseLog = `subscription OnDeleteExerciseLog {
  onDeleteExerciseLog {
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
export const onCreateExercise = `subscription OnCreateExercise {
  onCreateExercise {
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
export const onUpdateExercise = `subscription OnUpdateExercise {
  onUpdateExercise {
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
export const onDeleteExercise = `subscription OnDeleteExercise {
  onDeleteExercise {
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
export const onCreateSettings = `subscription OnCreateSettings {
  onCreateSettings {
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
export const onUpdateSettings = `subscription OnUpdateSettings {
  onUpdateSettings {
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
export const onDeleteSettings = `subscription OnDeleteSettings {
  onDeleteSettings {
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
export const onCreateSet = `subscription OnCreateSet {
  onCreateSet {
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
export const onUpdateSet = `subscription OnUpdateSet {
  onUpdateSet {
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
export const onDeleteSet = `subscription OnDeleteSet {
  onDeleteSet {
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
