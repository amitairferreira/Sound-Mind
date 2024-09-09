import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaInicial from "./screens/telaInicial";

import TLCadastroUsurio from "./screens/usuario/telaCadastroUsuario";
import TLLoginUsuario from "./screens/usuario/telaLoginUsuario"
import TLPrincipalUsuario from "./screens/usuario/telaPrincipalUsuario"
import TLPerfilUsuario from "./screens/usuario/perfilUsuario";
import TListaProfisionais from "./screens/usuario/listaProfissionais";
import TLMinhaJornada from "./screens/usuario/minhaJornada";
import TAgendarProfissional from "./screens/usuario/agendamentProfissionl";

import TLCadastroEspecialista from "./screens/profissional/telaCadastroProfissional";
import TLLoginProfissional from "./screens/profissional/telaLoginProfissional"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="TelaInicial"
          component={TelaInicial}
          options={{title: 'Inicio'}}
        />
        <Stack.Screen 
          name="TLCadastroUsurio"
          component={TLCadastroUsurio}
          options={{title: 'Cadastro de usuário'}}
        />
        <Stack.Screen
          name="TLCadastroEspecialista"
          component={TLCadastroEspecialista}
          options={{title: 'Cadastro de Psicólogo'}}
        />
        <Stack.Screen
          name="TLLoginUsuario"
          component={TLLoginUsuario}
          options={{title: 'Login Usuário'}}
        />
        <Stack.Screen
          name="TLLoginProfissional"
          component={TLLoginProfissional}
          options={{title: 'Login Psicólogo'}}        
        />
        <Stack.Screen 
          name="TLPrincipalUsuario"
          component={TLPrincipalUsuario}
          options={{title: 'Tela Principal Usuário'}}
        />
        <Stack.Screen 
          name="TLPerfilUsuario"
          component={TLPerfilUsuario}
          options={{title: 'Perfil usuário'}}
        />
        <Stack.Screen 
          name="TListaProfisionais"
          component={TListaProfisionais}
          options={{title: 'Profissionais'}}
        />
        <Stack.Screen 
          name="TLMinhaJornada"
          component={TLMinhaJornada}
          options={{title: 'Motivação diária'}}
        />
        <Stack.Screen
          name="TAgendarProfissional"
          component={TAgendarProfissional}
          options={{title: 'Prossional'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
