import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Pressable, View, Image, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../../GlobalStyles";
import supabase from "../../database/database";  // Certifique-se de que o caminho para o supabase esteja correto

const TLPerfilUsuario = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState({
    nome: "",
    email: "",
    senha: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Função para buscar dados do usuário do Supabase
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data: { user }, erro } = await supabase.auth.getUser();
        const { data, error } = await supabase
          .from("usuariospi")  // Nome da tabela no Supabase
          .select("nome, email, senha")
          .eq("id", user.id)
          .single();
        if (error) {
          console.error("Erro ao buscar dados do usuário:", error);
        } else {
          setUserData(data);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };

    fetchUserData();
  }, []);

  // Função para salvar os dados editados no Supabase
  const saveUserData = async () => {
    try {
      const { data: { user }, erro } = await supabase.auth.getUser();

      const { data, error } = await supabase
        .from("usuariospi") // Nome da tabela no Supabase
        .update({ nome: userData.nome, email: userData.email, senha: userData.senha })
        .eq("id", user.id);

      if (error) {
        Alert.alert("Erro", "Não foi possível salvar os dados.");
        console.error("Erro ao salvar dados do usuário:", error);
      } else {
        console.log(JSON.stringify(data));
        Alert.alert("Sucesso", "Dados salvos com sucesso.");
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Erro ao salvar dados do usuário:", error);
    }
  };

  return (
    <View style={styles.tlPerfilUsuario}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Perfil</Text>
        <Image style={styles.headerIcon} source={require("../../assets/frame22.png")} />
      </View>

      {/* Conteúdo principal */}
      <View style={styles.content}>
        {/* Card de Dados do Usuário */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Dados do Usuário</Text>
          <Text>Nome Completo: {userData.nome}</Text>
          <Text>Email: {userData.email}</Text>
          <Text>Senha: {userData.senha}</Text>
        </View>

        {/* Card de Edição dos Dados do Usuário */}
        {isEditing && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Editar Dados do Usuário</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome Completo"
              value={userData.nome}
              onChangeText={(text) => setUserData({ ...userData, nome: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={userData.email}
              onChangeText={(text) => setUserData({ ...userData, email: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={userData.senha}
              secureTextEntry
              onChangeText={(text) => setUserData({ ...userData, senha: text })}
            />
            <Pressable style={styles.saveButton} onPress={saveUserData}>
              <Text style={styles.saveButtonText}>Salvar</Text>
            </Pressable>
          </View>
        )}

        {/* Botão para Editar Dados */}
        {!isEditing && (
          <Pressable style={styles.editButton} onPress={() => setIsEditing(true)}>
            <Text style={styles.editButtonText}>Editar Dados</Text>
          </Pressable>
        )}
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Pressable style={styles.footerButton} onPress={() => navigation.navigate("TLPrincipalUsuario")}>
          <Image style={styles.footerIcon} source={require("../../assets/frame28.png")} />
          <Text style={styles.footerButtonText}>Inicio</Text>
        </Pressable>
        <Pressable style={styles.footerButton} onPress={() => navigation.navigate("TListaProfisionais")}>
          <Image style={styles.footerIcon} source={require("../../assets/frame21.png")} />
          <Text style={styles.footerButtonText}>Especialistas</Text>
        </Pressable>
        <Pressable style={styles.footerButton} onPress={() => navigation.navigate("TLPerfilUsuario")}>
          <Image style={styles.footerIcon} source={require("../../assets/frame.png")} />
          <Text style={styles.footerButtonText}>Perfil</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tlPerfilUsuario: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  header: {
    backgroundColor: "#C72172",
    height: 200,
    alignItems: "center",
    justifyContent: "center", // Centraliza o conteúdo verticalmente
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10, // Espaço entre o texto e a imagem
  },
  headerIcon: {
    width: 50,  // Ajuste o tamanho conforme necessário
    height: 50, // Ajuste o tamanho conforme necessário
  },
  content: {
    flex: 1, // Expande para ocupar o espaço disponível, empurrando o footer para o final
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  card: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: FontSize.size_base,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#C72172",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: "#C72172",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: FontSize.size_base,
  },
  editButton: {
    backgroundColor: "#C72172",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  editButtonText: {
    color: "#FFFFFF",
    fontSize: FontSize.size_base,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#E2E2E2",
  },
  footerButton: {
    alignItems: "center",
  },
  footerIcon: {
    width: 24,
    height: 24,
  },
  footerButtonText: {
    color: "#C72172",
    fontSize: 12,
    marginTop: 5,
  },
});

export default TLPerfilUsuario;
