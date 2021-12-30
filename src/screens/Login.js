import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import database from "../storage/firebase";
import { ref, onValue } from "firebase/database";

const Login = ({ logged, setLogged }) => {
  const initialState = {
    email: "",
    pwd: "",
  };

  const [form, setForm] = useState(initialState);
  const [alert, setAlert] = useState("");

  const handlePress = () => {
    if (form.email !== "" && form.pwd !== "") {
      setAlert("");
      const id = form.email.split("@");
      const userId = id[0];
      const logRef = ref(database, "users/" + userId);
      onValue(
        logRef,
        (snapshot) => {
          if (snapshot.exists()) {
            if (form.pwd === snapshot.val().pwd) {
              console.log("Logged in successfully..");
              setLogged(true);
            } else setAlert("Invalid credentials..");
          } else setAlert("User not found");
        },
        {
          onlyOnce: true,
        }
      );
    } else setAlert("Encountered null values");
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>

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

      {alert && (
        <Title style={{ color: "red", fontWeight: "bold", fontSize: 17 }}>
          {alert}
        </Title>
      )}

      <Button
        mode="contained"
        style={{ width: "50%", padding: 3, marginTop: 5 }}
        onPress={handlePress}
      >
        Login
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

export default Login;
