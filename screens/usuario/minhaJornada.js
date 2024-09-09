import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Pressable, View, Alert, Image, ScrollView } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../../GlobalStyles";

const TLMinhaJornada = () => {
  const navigation = useNavigation();
  const [motivationalQuote, setMotivationalQuote] = useState("");

  useEffect(() => {
    // Função para buscar frase motivacional
    const fetchQuote = async () => {
      try {
        const response = await axios.get("https://zenquotes.io/api/random");
        setMotivationalQuote(response.data[0].q);
      } catch (error) {
        Alert.alert("Erro", "Não foi possível carregar a frase motivacional.");
      }
    };

    fetchQuote(); 
  }, []);

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Minha Jornada</Text>
      </View>

      {/* Conteúdo Principal */}
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>
            {motivationalQuote || "Carregando frase motivacional..."}
          </Text>
        </View>

      </ScrollView>

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
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  header: {
    backgroundColor: "#C72172",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  content: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  quoteContainer: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: Border.br_lg,
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#333",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#E2E2E2",
    position: "absolute",
    bottom: 0,
    width: "100%",
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

export default TLMinhaJornada;


