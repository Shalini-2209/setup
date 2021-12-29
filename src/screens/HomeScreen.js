import React from "react";
import { ref, set } from "firebase/database";
import database from "../storage/firebase";
import { View, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    // const uref = ref(database, "users/");
    // set(uref, { name: "shalini" });
  };

  return (
    <View>
      <Text onPress={() => navigation.push("Login")}>Sign In</Text>
      <Text onPress={handlePress}>Sign Up</Text>
    </View>
  );
};

export default HomeScreen;
