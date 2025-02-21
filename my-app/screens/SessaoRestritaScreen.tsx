import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SessaoRestritaScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Área Restrita</Text>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("DadoPessoal")}>
        <Text style={styles.cardText}>📋 Cadastrar Dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("ConsultarDados")}>
        <Text style={styles.cardText}>🔍 Consultar Dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Agendamentos")}>
        <Text style={styles.cardText}>📅 Agendamentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.logoutText}>🚪 Sair</Text>
      </TouchableOpacity>
    </View>
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
  card: {
    width: "90%",
    padding: 15,
    backgroundColor: "#2196F3",
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  cardText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  logoutButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#D32F2F",
    borderRadius: 10,
    width: "90%",
    alignItems: 'center'
  },
  logoutText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SessaoRestritaScreen;
