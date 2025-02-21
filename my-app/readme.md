Primeiro, precisa ter o Node.js instalado
```bash
    node -v
```

Agora, vamos verificar se o gerenciador de pacotes npm
```bash
    npm -v
```

Vamos instalar o Expo CLI, que facilita a criação e execução de projetos React Native.

```bash
    npm install -g expo
```

Agora, vamos confirmar se a instalação do Expo CLI foi bem-sucedida.

No terminal, rode este comando
```bash
    expo --version
```

Quando terminar, rode:
```bash
    npx expo --version
```

Criar um novo projeto React Native com Expo. No terminal, rode este comando:
```bash
    npx create-expo-app meuApp
```

Instalar as dependências do TypeScript
```bash
    npm install --save-dev typescript @types/react @types/react-native
```

vamos entrar na pasta do projeto e rodá-lo para garantir que tudo está funcionando.

No terminal, execute estes comandos:
```bash
    cd meuApp
    npx expo start
```

Reiniciar um projeto
```bash
    npx expo start -c
```

Instalar as dependências de navegação
```bash
    npm install @react-navigation/native
    npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons @react-native-masked-view/masked-view
```

Agora, instale o stack navigator:
```bash
    npm install @react-navigation/stack
```

Agora criar na pasta screens a nossa primeira tela para cadastro:

```bash

    import React, { useState } from 'react';
    import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

    const CadastroScreen: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    const handleCadastro = () => {
        Alert.alert('Cadastro', `Email: ${email}\nSenha: ${senha}`);
    };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Cadastro</Text>
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
        <Button title="Cadastrar" onPress={handleCadastro} />
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10,
    },
    });

    export default CadastroScreen;
``` 

## Backend

Criar o projeto da API
```bash
    mkdir backend
    cd backend
    npm init -y
```

Instalar as dependências

Agora, dentro da pasta backend, instale as bibliotecas necessárias:
```bash
    npm install express mongoose cors dotenv
```

E instale o nodemon (para reiniciar o servidor automaticamente durante o desenvolvimento):
```bash
    npm install --save-dev nodemon
```

Criar a estrutura do projeto
Dentro da pasta backend, crie os seguintes arquivos:
📂 backend/
┣ 📜 server.ts (será nosso servidor principal)
┣ 📜 .env (para armazenar a conexão com o MongoDB)
┣ 📜 tsconfig.json (para usar TypeScript)

Agora, rode este comando para inicializar o TypeScript:
```bash
    npm install typescript
```

```bash
    npx tsc --init
```

Edite o arquivo tsconfig.json e altere as seguintes opções:
```bash
    {
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
    }
``` 

Agora, dentro da pasta backend, crie uma pasta src e mova o server.ts para dentro dela:

📂 backend/
┣ 📂 src/
┃ ┣ 📜 server.ts
┣ 📜 .env
┣ 📜 tsconfig.json

4️⃣ Configurar o servidor Express

Abra src/server.ts e cole este código:

```bash
    import express from "express";
    import mongoose from "mongoose";
    import cors from "cors";
    import dotenv from "dotenv";

    dotenv.config();

    const app = express();
    app.use(cors());
    app.use(express.json());

    const PORT = process.env.PORT || 5000;
    const MONGO_URI = process.env.MONGO_URI || "";

    mongoose
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB conectado! 🚀"))
    .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

    app.get("/", (req, res) => {
    res.send("API está rodando!");
    });

    app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    });
``` 

Instalar
```bash
    npm i --save-dev @types/express
```

```bash
    npm i --save-dev @types/cors
```

```bash
    npm install --save-dev ts-node typescript
```

5️⃣ Configurar a conexão com o MongoDB

No arquivo .env, adicione sua Connection String do MongoDB Atlas:

```bash
    MONGO_URI=mongodb+srv://seu_usuario:sua_senha@seu-cluster.mongodb.net/?retryWrites=true&w=majority
    PORT=5000
``` 

Caso queira utilizar o Firebase como segunda opcão

2️⃣ Configurar o Firebase no React Native

2.1 Instalar dependências do Firebase
```bash
    npm install firebase
``` 

3️⃣ Configurar o Firebase no projeto

No Firebase Console, vá para "Project settings".
Role para baixo até a seção "Suas Apps" e clique em "Adicionar aplicativo".
Escolha "iOS" ou "Android", dependendo do seu dispositivo.
Preencha as informações (pode usar meuApp como nome).
No final, baixe o arquivo de configuração:
Para iOS, o arquivo será GoogleService-Info.plist.
Para Android, o arquivo será google-services.json.
Coloque esse arquivo no seu projeto:
Para iOS: dentro de ios/ no projeto.
Para Android: dentro de android/app/.

📌 Passo: Ativar a autenticação no Firebase

Acesse o Firebase Console.

No menu esquerdo, clique em "Authentication".
Vá para a aba "Método de login".
Ative a opção "Email/Senha" e clique em Salvar.
Agora o Firebase está pronto para autenticar usuários! ✅

📌 Passo: Criar a Tela de Login
Agora, dentro da pasta screens/, crie um novo arquivo chamado LoginScreen.tsx e adicione o script correspondente.

📌 Passo: Adicionar a Tela de Login na Navegação

📌 Passo: Criar a Tela da Sessão Restrita
Dentro da pasta screens/, crie um novo arquivo chamado SessaoRestritaScreen.tsx.

📌 Passo: Ajustar o Login para Redirecionar

📌 Passo: Adicionar a Tela à Navegação

📌 Passo: Testar a Sessão Restrita

📌 Passo: Criar a Tela de Cadastro de Dados Pessoais

📌 Passo: Adicionar a Tela à Navegação

📌 Passo: Criar a Tela de Consulta e Edição dos dados cadastrais

## Usar Login com Google

📌 Passo: Instalar Dependências
```bash
    npx expo install expo-auth-session expo-web-browser
```

📌 Se estiver usando bare workflow (não Expo Go), também será necessário instalar:
```bash
    npm install @react-native-google-signin/google-signin
```

📌 Passo 2: Configurar Firebase
1️⃣ No Firebase Console, vá até Autenticação → Método de Login.
2️⃣ Ative o login com Google.
3️⃣ Copie o Client ID Web gerado.

📌 Passo 3: Configurar o Login com Google
Agora, crie o arquivo GoogleAuth.tsx dentro da pasta src e adicione o script necessário.

```bash
    project-555072563253
```

Inserir um e-mail para suporte.

📌 Como encontrar o Client ID Web no Firebase?
1️⃣ Acesse o Firebase Console:
🔗 Firebase Console

2️⃣ Selecione o seu projeto e vá até Configurações do Projeto:

No menu lateral esquerdo, clique no ícone ⚙️ "Configurações do Projeto".
Vá até a aba "Configuração".

3️⃣ Encontre o Client ID Web:

Role para baixo até a seção "SDK de Configuração".
Encontre a chave client_id/Chave de API da Web dentro do objeto "OAuth 2.0".
Copie o "Client ID Web", que será algo como:

```bash
    1234567890-xxxxxxxxxxxxxxxxxx.apps.googleusercontent.com
```

2️⃣ Ativar APIs do Google Cloud

Precisa ativar a API do Google Identity:

Acesse o Google Cloud Console:
🔗 Google Cloud Console

Selecione seu projeto do Firebase (canto superior esquerdo).

No menu lateral, vá até "APIs e Serviços" > "Biblioteca".

Pesquise e ative a API:

Google Identity Platform
OAuth 2.0 Client ID (se disponível)


3️⃣ Verificar as Credenciais no Google Cloud
No Google Cloud Console, vá até "APIs e Serviços" > "Credenciais"
🔗 Google Cloud Credenciais

Certifique-se de que existe um "OAuth Client ID" para Web.

Se não existir, crie um novo Client ID:

Tipo de Aplicativo: Web
Nome: Firebase Auth
Origens Autorizadas:
https://your-app.firebaseapp.com
https://your-app.web.app
URIs de Redirecionamento:
https://your-app.firebaseapp.com/__/auth/handler
https://your-app.web.app/__/auth/handler
Copie o novo Client ID Web e substitua no seu código.


























