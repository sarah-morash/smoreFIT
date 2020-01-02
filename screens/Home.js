import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Home = () => (
  <View style={styles.container}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.welcomeContainer}>
        <Text>HELLO</Text>
      </View>
    </ScrollView>
  </View>
);

Home.navigationOptions = {
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

export default Home;
