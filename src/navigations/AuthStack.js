import React from "react";
import Login from "../screens/Login";
import Register from "../screens/Register";
import HomeScreen from "../screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const AuthStack = ({ toggleTheme, setToggleTheme }) => {
  const HomeScreenWithProps = ({ navigation }) => {
    return (
      <HomeScreen
        toggleTheme={toggleTheme}
        setToggleTheme={setToggleTheme}
        navigation={navigation}
      />
    );
  };

  const HomeStackScreen = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreenWithProps} />
        <HomeStack.Screen name="Login" component={Login} />
        <HomeStack.Screen name="Register" component={Register} />
      </HomeStack.Navigator>
    );
  };

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
    </Tab.Navigator>
  );
};

export default AuthStack;
