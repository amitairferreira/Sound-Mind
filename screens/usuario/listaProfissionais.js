import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../../GlobalStyles";

const TListaProfisionais = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.tlListaEspecialistas}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todos os profissionais</Text>
      </View>








      <Text>Renderizar aqui, em cards... Os profissionais cadastrados!!!!</Text>















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

export default TListaProfisionais;