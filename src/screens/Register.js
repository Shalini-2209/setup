import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import database from "../storage/firebase";
import { ref, set } from "firebase/database";

const Register = () => {
  const initialState = {
    email: "",
    pwd: "",
  };

  const [form, setForm] = useState(initialState);

  const handlePress = () => {
    const id = form.email.split("@");
    const userId = id[0];
    const logRef = ref(database, "users/" + userId);

    set(logRef, form).then(() => {
      console.log("Registered");
    });
  };

  return (
    <View style={styles.container}>
      <Text>Register</Text>

      <TextInput
        label="Email"
        style={styles.item}
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
      />

      <TextInput
        label="Password"
        value={form.pwd}
        style={styles.item}
        onChangeText={(text) => setForm({ ...form, pwd: text })}
      />

      <Button
        mode="contained"
        style={{ width: "50%", padding: 3, marginTop: 5 }}
        onPress={handlePress}
      >
        Register
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  item: {
    margin: 5,
  },
});

export default Register;
