import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

const SessaoRestritaScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Área Restrita</Text>

      {/*<TouchableOpacity style={styles.card} onPress={() => navigation.navigate("DadoPessoal")}>
        <Text style={styles.cardText}>📋 Cadastrar Dados</Text>
      </TouchableOpacity>*/}

      <CustomButton title="📋 Cadastrar Dados" onPress={() => navigation.navigate("DadoPessoal")} backgroundColor="#2196F3" textColor="#ffff"/>

      {/*<TouchableOpacity style={styles.card} onPress={() => navigation.navigate("ConsultarDados")}>
        <Text style={styles.cardText}>🔍 Consultar Dados</Text>
      </TouchableOpacity>*/}

      <CustomButton title="🔍 Consultar Dados" onPress={() => navigation.navigate("ConsultarDados")} backgroundColor="#2196F3" textColor="#ffff"/>

      {/*<TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Agendamentos")}>
        <Text style={styles.cardText}>📅 Agendamentos</Text>
      </TouchableOpacity>*/}

      <CustomButton title="📅 Agendamentos" onPress={() => navigation.navigate("Agendamentos")} backgroundColor="#2196F3" textColor="#ffff"/>

      {/*<TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.logoutText}>🚪 Sair</Text>
      </TouchableOpacity>*/}

      <CustomButton title="🚪 Sair" onPress={() => navigation.navigate("Home")} backgroundColor="#D32F2F" textColor="#fff"/>
      
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
});

export default SessaoRestritaScreen;
