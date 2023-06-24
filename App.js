import React, { useState, useEffect } from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EventRegister } from "react-native-event-listeners";
import Home from "./Home";
import Profile from "./Profile";
import theme from "./Theme";
import themeContext from "./ThemeContext";

const Tab = createBottomTabNavigator();

export default function App() {
  const [darkMode, SetDarkMode] = useState(false);
  useEffect(() => {
    const Listener = EventRegister.addEventListener(
      "Theme Changed Successfully",
      (data) => {
        SetDarkMode(data);
        console.log(data);
      }
    );
    return () => {
      EventRegister.removeAllListeners(Listener);
    };
  }, [darkMode]);
  return (
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Agent Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
}
