import React, { useState, useContext } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { EventRegister } from "react-native-event-listeners";

import themeContext from "./ThemeContext";

const Home = () => {
  const theme = useContext(themeContext);
  const [darkMode, SetDarkMode] = useState(false);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={[styles.text, { color: theme.color }]}>Home Screen</Text>
      <Switch
        value={darkMode}
        onValueChange={(value) => {
          SetDarkMode(value);
          EventRegister.emit("Theme Changed Successfully", value);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Home;
