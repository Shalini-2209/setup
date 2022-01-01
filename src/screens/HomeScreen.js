import React from "react";
import { View, Image } from "react-native";
import { Title, Switch } from "react-native-paper";

const HomeScreen = ({ toggleTheme, setToggleTheme, navigation }) => {
  const onToggleSwitch = () => setToggleTheme(!toggleTheme);

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
      <View style={{ flexDirection: "row" }}>
        <Title>Toggle theme</Title>
        <Switch
          value={toggleTheme}
          onValueChange={onToggleSwitch}
          style={{ marginTop: 5, marginLeft: 6 }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
