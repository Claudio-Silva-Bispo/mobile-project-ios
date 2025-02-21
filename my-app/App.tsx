import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import CadastroScreen from './screens/CadastroScreen';
import SucessoScreen from './screens/SucessoScreen';
import LoginScreen from './screens/LoginScreen';
import SessaoRestritaScreen from './screens/SessaoRestritaScreen';
import DadoPessoalScreen from './screens/DadoPessoalScreen';
import ConsultarDadosScreen from './screens/ConsultarDadosScreen';
import { StyleSheet } from "react-native";


const Stack = createStackNavigator();

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Bem-vindo ao seu Agendamento Inteligente</Text>

      {/* Botões */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Cadastro")}>
        <Text style={styles.buttonText}>Ir para Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Ir para Login</Text>
      </TouchableOpacity>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Delfos Machine</Text>
        <View style={styles.footerLine} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#081828",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#f8f8f8",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#08c8f8",
    width: "80%",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#081828",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f8f8f8",
  },
  footerLine: {
    width: 100,
    height: 2,
    backgroundColor: "#ccc",
    marginTop: 5,
  },
});
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sucesso" component={SucessoScreen} />
        <Stack.Screen name="SessaoRestrita" component={SessaoRestritaScreen} />
        <Stack.Screen name="DadoPessoal" component={DadoPessoalScreen} />
        <Stack.Screen name="ConsultarDados" component={ConsultarDadosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
