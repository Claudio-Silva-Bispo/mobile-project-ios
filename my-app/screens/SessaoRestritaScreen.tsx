import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";

const SessaoRestritaScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Área Restrita</Text>

      <CustomButton title="📋 Cadastrar Dados" onPress={() => navigation.navigate("DadoPessoal")} backgroundColor="#2196F3" textColor="#ffff" width={'100%'}/>

      <CustomButton title="🔍 Consultar Dados" onPress={() => navigation.navigate("ConsultarDados")} backgroundColor="#2196F3" textColor="#ffff" width={'100%'}/>

      <CustomButton title="📅 Agendamentos" onPress={() => navigation.navigate("Agendamentos")} backgroundColor="#2196F3" textColor="#ffff" width={'100%'}/>

      <CustomButton title="🚪 Sair" onPress={() => navigation.navigate("Home")} backgroundColor="#D32F2F" textColor="#fff" width={'100%'}/>
      
      <Footer textColor="#000"/>
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
