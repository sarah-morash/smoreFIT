import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Avatar } from "react-native-elements";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.userName}>Smore</Text>
      <Text style={styles.appName}>smoreFIT</Text>
      <Avatar
        medium
        rounded
        source={{
          uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
        }}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userName: {
    fontSize: 20,
    margin: 20
  },
  appName: {
    fontSize: 20,
    margin: 20
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#cff",
    padding: 20,
    height: 10
  }
});

export default Header;
