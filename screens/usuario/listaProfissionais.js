import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import supabase from "../../database/database"; 
import { Border, Color, FontFamily, FontSize } from "../../GlobalStyles";

const TListaProfissionais = () => {
  const navigation = useNavigation();
  const [profissionais, setProfissionais] = useState([]);

  // Mock das especialidades e imagens para os profissionais
  const mockData = [
    {
      nome: "Ana Beatriz Fernandes",
      especialidade: "Ansiedade",
      imagem: require("../../assets/image.png"),
    },
    {
      nome: "João Ribeiro Farias",
      especialidade: "Depressão",
      imagem: require("../../assets/image1.png"),
    },
    {
      nome: "Ana Karolina Rodrigues",
      especialidade: "Estresse",
      imagem: require("../../assets/image2.png"),
    },
  ];

  useEffect(() => {
    async function fetchProfissionais() {
      const { data, error } = await supabase
        .from("profissionaispi")
        .select("nome, email, crp")
        .in("nome", ["Ana Beatriz Fernandes", "João Ribeiro Farias", "Ana Karolina Rodrigues"]);

      if (error) {
        console.error("Erro ao buscar profissionais:", error.message);
        return;
      }

      // Mesclar dados reais com as especialidades e imagens mockadas
      const mergedData = data.map((profissional) => ({
        ...profissional,
        ...mockData.find((mock) => mock.nome === profissional.nome),
      }));

      setProfissionais(mergedData);
    }

    fetchProfissionais();
  }, []);

  return (
    <View style={styles.tlListaEspecialistas}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todos os profissionais</Text>
      </View>

      <ScrollView contentContainerStyle={styles.profissionaisContainer}>
        {profissionais.map((profissional, index) => (
          <Pressable 
            key={index} 
            style={styles.card} 
            onPress={() => navigation.navigate("TAgendarProfissional", { profissional })}
          >
            <Image style={styles.profissionalImage} source={profissional.imagem} />
            <Text style={styles.nomeText}>{profissional.nome}</Text>
            <Image style={styles.estrelasImage} source={require("../../assets/estrelas-cheias.png")} />
            <Text style={styles.crpText}>CRP: {profissional.crp}</Text>
            <Text style={styles.especialidadeText}>{profissional.especialidade}</Text>
            <Image style={styles.verificadoIcon} source={require("../../assets/verificado.png")} />
            <Image style={styles.frameIcon} source={require("../../assets/frame3.png")} />
          </Pressable>
        ))}
        <View style={{ height: 100 }} />
      </ScrollView>

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
  tlListaEspecialistas: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  header: {
    backgroundColor: "#C72172",
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  profissionaisContainer: {
    padding: 10,
    paddingBottom: 50, // Espaço adicional para o último card
  },
  card: {
    backgroundColor: "#F0F0F0",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    position: "relative", // Permite o uso de position:absolute para elementos internos
  },
  profissionalImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 40,
    marginBottom: 10,
  },
  nomeText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  estrelasImage: {
    width: 100,
    height: 20,
    resizeMode: "contain",
    marginBottom: 5,
  },
  crpText: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: "center",
  },
  especialidadeText: {
    fontSize: 12,
    color: "#666666",
    textAlign: "center",
  },
  verificadoIcon: {
    width: 24,
    height: 24,
    position: "absolute",
    top: 10,
    right: 40, // Ajusta a posição em relação ao canto superior direito
  },
  frameIcon: {
    width: 24,
    height: 24,
    position: "absolute",
    top: 10,
    right: 10, // Ajusta a posição ao lado do ícone verificado
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

export default TListaProfissionais;
