import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import themeContext from "./ThemeContext";

function Profile() {
  const theme = useContext(themeContext);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={[styles.text, { color: theme.color }]}>Settings Screen</Text>
    </View>
  );
}

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

export default Profile;
