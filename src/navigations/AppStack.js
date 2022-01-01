import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../screens/MainScreen";

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Main" component={MainScreen} />
    </Tab.Navigator>
  );
};

export default AppStack;
