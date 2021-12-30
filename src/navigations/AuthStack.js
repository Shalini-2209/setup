import React, { useState } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  DarkTheme as NavigateDarkTheme,
} from "@react-navigation/native";

// import {
//   Provider as PaperProvider,
//   DarkTheme as PaperDarkTheme,
// } from "react-native-paper";
import Login from "../screens/Login";
import MainScreen from "../screens/MainScreen";
import HomeScreen from "../screens/HomeScreen";
import Register from "../screens/Register";

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function AuthStack() {
  const [logged, setLogged] = useState(false);

  const HomeStackScreen = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Login" component={LoginWithProps} />
        <HomeStack.Screen name="Register" component={Register} />
      </HomeStack.Navigator>
    );
  };

  const LoginWithProps = () => {
    return <Login logged={logged} setLogged={setLogged} />;
  };

  return (
    // <PaperProvider theme={PaperDarkTheme}>
    // <NavigationContainer theme={NavigateDarkTheme}>
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        {!logged ? (
          <Tab.Screen name="Home" component={HomeStackScreen} />
        ) : (
          <Tab.Screen name="Main" component={MainScreen} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
    // </PaperProvider>
  );
}
