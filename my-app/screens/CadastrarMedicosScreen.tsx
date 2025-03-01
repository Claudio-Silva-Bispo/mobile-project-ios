import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../src/firebaseConfig";

const CadastrarMedicosScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const user = auth.currentUser;
  if (!user) {
    Alert.alert("Erro", "Nenhum usuário autenticado!");
    navigation.goBack();
    return null;
  }

  const [step, setStep] = useState(1);
  
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  
  const [mensagem, setMensagem] = useState("");

  const salvarDados = async (colecao: string, dados: object) => {
    try {
      await setDoc(doc(db, colecao, user.uid), dados, { merge: true });
      setMensagem("✅ Dados salvos com sucesso!");
    } catch (error: any) {
      setMensagem("❌ Erro ao salvar os dados.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delfos Machine</Text>
      <View style={styles.tittleLine} />

      {step === 1 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Especialistas</Text>
          <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
          <TextInput style={styles.input} placeholder="Sobrenome" value={sobrenome} onChangeText={setSobrenome} />
          <TextInput style={styles.input} placeholder="CPF" value={cpf} onChangeText={setCpf} />
          <TextInput style={styles.input} placeholder="Data de Nascimento" value={dataNascimento} onChangeText={setDataNascimento} />
          <TextInput style={styles.input} placeholder="Email" value={email} keyboardType="email-address" onChangeText={setEmail} />
          <TextInput style={styles.input} placeholder="Especialidade" value={especialidade} onChangeText={setEspecialidade} />
          
    
          <TouchableOpacity style={styles.buttonSave} onPress={() => salvarDados("t_dados_cadastrais_medicos", { nome, sobrenome, cpf, dataNascimento, especialidade })}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>

          {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
          
        </View>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: "#f9f9f9", 
    justifyContent: "center",
    width: '100%'
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    textAlign: "center", 
    marginBottom: 20 ,
  },
  tittleLine: {
    width: 100,
    height: 2,
    backgroundColor: "#ccc",
    marginTop: 5,
  },
  section: { 
    backgroundColor: "#fff", 
    padding: 15, 
    borderRadius: 10, 
    alignItems: "center",
    width: '100%',
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  input: { width: "100%", height: 40, borderBottomWidth: 1, borderColor: "#ccc", marginBottom: 10 },
  mensagem: { marginTop: 10, fontSize: 14, color: "green" },
  nextButton: { 
    marginTop: 10, 
    padding: 10, 
    backgroundColor: "#2196F3", 
    borderRadius: 10,
    width: '90%',
    alignItems: 'center'
  },
  prevButton: { 
    marginTop: 10, 
    padding: 10, 
    backgroundColor: "#D32F2F", 
    borderRadius: 10,
    width: '90%',
    alignItems: 'center'
  },
  buttonText: { 
    fontSize: 16, 
    color: "#fff", 
    fontWeight: "bold" },
  buttonSave: {
    width: "90%",
    backgroundColor: "#08c8f8",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    fontWeight: "bold",
    color: '#fff'
  },
});

export default CadastrarMedicosScreen;
