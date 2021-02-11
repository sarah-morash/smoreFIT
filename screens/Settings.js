import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  CheckBox,
  Text,
  Button,
  Badge,
  Icon,
  Divider,
  Image
} from "react-native-elements";

const Settings = () => {
  // const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Text h1>SETTINGS</Text>
          <CheckBox
            title="Dark Mode"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            // checked={darkMode}
            // onPress={setDarkMode(!darkMode)}
          />
          <Button title="Solid Button" />
          <Button title="Outline button" type="outline" />
          <Button title="Clear button" type="clear" />
          <Button
            icon={<Icon name="arrow-right" size={15} color="white" />}
            title="Button with icon component"
          />
          <Button
            icon={{
              name: "arrow-right",
              size: 15,
              color: "white"
            }}
            title="Button with icon object"
          />
          <Button
            icon={<Icon name="arrow-right" size={15} color="white" />}
            iconRight
            title="Button with right icon"
          />
          <Button title="Loading button" loading />
          <Badge status="success" />
          {/* <Badge status="error" />
      <Badge status="primary" />
      <Badge status="warning" />
      <CheckBox title="Click Here" checked={checked} />
      <CheckBox center title="Click Here" checked={checked} />
      <CheckBox
        center
        title="Click Here"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={checked}
      />
      <CheckBox
        center
        title="Click Here to Remove This Item"
        iconRight
        iconType="material"
        checkedIcon="clear"
        uncheckedIcon="add"
        checkedColor="red"
        checked={checked}
      />
      <CheckBox
        checkedIcon={<Image />}
        uncheckedIcon={<Image />}
        checked={checked}
        onPress={() => setChecked(!checked)}
      />
      <Divider style={{ backgroundColor: "blue" }} />;
      <Icon name="rowing" />
      <Icon name="g-translate" color="#00aced" />
      <Icon name="sc-telegram" type="evilicon" color="#517fa4" />
      <Icon
        reverse
        name="ios-american-football"
        type="ionicon"
        color="#517fa4"
      />
      <Icon
        raised
        name="heartbeat"
        type="font-awesome"
        color="#f50"
        onPress={() => console.log("hello")}
      /> */}
        </View>
      </ScrollView>
    </View>
  );
};

Settings.navigationOptions = {
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

export default Settings;
