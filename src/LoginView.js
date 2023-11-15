import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  validateInput = () => {
    const { email, password } = this.state;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;

    if (!email || !password) {
      Alert.alert(
        "Error",
        "Los campos de correo electrónico y contraseña no pueden estar vacíos."
      );
      return false;
    }

    if (!emailRegex.test(email)) {
      Alert.alert(
        "Error",
        "Por favor, introduce un correo electrónico válido."
      );
      return false;
    }

    if (!passwordRegex.test(password)) {
      Alert.alert(
        "Error",
        "La contraseña debe tener al menos 8 carácteres, mayúsculas y minúsculas y al menos 1 carácter especial."
      );
      return false;
    }

    return true;
  };

  handleSubmit = () => {
    if (this.validateInput()) {
      Alert.alert("Éxito", "Las validaciones fueron exitosas.");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/257-300x200.jpg")}
        />
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
          placeholder="lorem@ipsum.com"
          keyboardType="email-address"
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          placeholder="Contraseña"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <Text style={styles.link} onPress={() => Actions.register()}>
          Registrarse
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 10,
    marginTop: 50,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#007BFF",
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  label: {
    textAlign: "left",
    width: "80%",
    marginTop: 10,
  },
  link: {
    color: "#007BFF",
    fontSize: 12,
    marginTop: 20,
  },
});
