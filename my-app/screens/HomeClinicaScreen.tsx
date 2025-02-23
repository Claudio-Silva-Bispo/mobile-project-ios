import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';
import Footer from '../components/Footer';
import { StyleSheet } from "react-native";

const HomeClinicaScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Transforme a experiência dos seus pacientes com agendamentos inteligentes e gestão simplificada. Seja uma clínica parceira da Delfo sMachine e leve inovação ao seu atendimento!</Text>

      <CustomButton title="Cadastro" onPress={() => navigation.navigate("CadastroClinica")} width={'100%'}/>

      <CustomButton title="Login" onPress={() => navigation.navigate("LoginClinica")} width={'100%'}/>

      {/* Rodapé */}
      <Footer textColor='#fff'/>
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
    textAlign: "left",
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
});
export default HomeClinicaScreen;
