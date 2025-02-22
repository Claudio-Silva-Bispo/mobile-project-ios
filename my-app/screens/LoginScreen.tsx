import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/firebaseConfig"; 
import GoogleAuth from "../src/GoogleAuth";
import CustomButton from "../components/CustomButton";

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      console.log("🔹 Tentando fazer login...");

      await signInWithEmailAndPassword(auth, email, senha);
      console.log("✅ Login bem-sucedido!");
      Alert.alert("Sucesso", "Login realizado com sucesso!");

      navigation.navigate("SessaoRestrita");

    } catch (error: any) {
      console.error("❌ Erro ao fazer login:", error.message);
      Alert.alert("Erro", "Email ou senha incorretos.");
    }
  };

  return (
    <ImageBackground source={require("../assets/Background/opcao-um.png")} style={styles.background}>

      <View style={styles.container}>
        {/*<Text style={styles.title}>Login</Text>*/}
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <CustomButton title="Login" onPress={handleLogin}/>

        {/* Botão de Login com Google, para facilitar o acesso. */}
        {/*<GoogleAuth navigation={navigation}/>*/}
        
      </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: '100%'
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    opacity: 20,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
});

export default LoginScreen;
