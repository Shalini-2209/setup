import React, { useState, useContext } from "react";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";

import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";

import UserProvider, { UserContext } from "../contexts/UserProvider";

export default function RootStack() {
  const [toggleTheme, setToggleTheme] = useState(false);
  const user = useContext(UserContext);

  return (
    <PaperProvider theme={toggleTheme ? PaperDarkTheme : PaperDefaultTheme}>
      <NavigationContainer
        theme={toggleTheme ? NavigationDarkTheme : NavigationDefaultTheme}
      >
        <UserProvider>
          {!user ? (
            <AuthStack
              toggleTheme={toggleTheme}
              setToggleTheme={setToggleTheme}
            />
          ) : (
            <AppStack />
          )}
        </UserProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}
