import React from "react";
import { ref, set } from "firebase/database";
import database from "../storage/firebase";
import { View, Image } from "react-native";
import { Title } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    // const uref = ref(database, "users/");
    // set(uref, { name: "shalini" });
  };

  return (
    <View>
      {/* <Image
        style={{ width: "20%", height: "30%" }}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      /> */}
      <Title onPress={() => navigation.push("Login")}>Sign In</Title>
      <Title onPress={() => navigation.push("Register")}>Sign Up</Title>
    </View>
  );
};

export default HomeScreen;


