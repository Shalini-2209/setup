import React, { useState } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
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
        {/* options={({ route }) => ({
          title: route.params.name
        })} */}
        <HomeStack.Screen name="Register" component={Register} />
      </HomeStack.Navigator>
    );
  };

  const LoginWithProps = () => {
    return <Login logged={logged} setLogged={setLogged} />;
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        {!logged ? (
          <Tab.Screen name="Home" component={HomeStackScreen} />
        ) : (
          <Tab.Screen name="Main" component={MainScreen} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
