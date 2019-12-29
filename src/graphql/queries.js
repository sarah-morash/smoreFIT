/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getExerciseLog = `query GetExerciseLog($id: ID!) {
  getExerciseLog(id: $id) {
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
export const listExerciseLogs = `query ListExerciseLogs(
  $filter: ModelExerciseLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listExerciseLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getExercise = `query GetExercise($id: ID!) {
  getExercise(id: $id) {
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
export const listExercises = `query ListExercises(
  $filter: ModelExerciseFilterInput
  $limit: Int
  $nextToken: String
) {
  listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getSettings = `query GetSettings($id: ID!) {
  getSettings(id: $id) {
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
export const listSettingss = `query ListSettingss(
  $filter: ModelSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listSettingss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getSet = `query GetSet($id: ID!) {
  getSet(id: $id) {
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
export const listSets = `query ListSets($filter: ModelSetFilterInput, $limit: Int, $nextToken: String) {
  listSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      number
      reps
      weight
      exercises {
        id
        date
        type
        name
      }
    }
    nextToken
  }
}
`;
