import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../../GlobalStyles";

const TLPrincipalUsuario = () => {
  const navigation = useNavigation();



  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Bem-vindo usuário</Text>
        
        <Pressable style={styles.logoutButton} onPress={() => navigation.navigate("TelaInicial")}>
          <Image
            style={styles.logoutIcon}
            source={require("../../assets/iconsetchevronleft9.png")}
          />
        </Pressable>

        <View style={styles.headerButtons}>
          <Pressable style={styles.headerButton}>
            <Image
              style={styles.headerIcon}
              source={require("../../assets/frame31.png")}
            />
            <Text style={styles.headerButtonText}>Minha Jornada</Text>
          </Pressable>
          <Pressable style={styles.headerButton}>
            <Image
              style={styles.headerIcon}
              source={require("../../assets/frame29.png")}
            />
            <Text style={styles.headerButtonText}>Minhas Sessões</Text>
          </Pressable>
          <Pressable style={styles.headerButton}>
            <Image
              style={styles.headerIcon}
              source={require("../../assets/vector3.png")}
            />
            <Text style={styles.headerButtonText}>Meu Chat</Text>
          </Pressable>
        </View>
      </View>

      {/* Corpo */}
      <View style={styles.body}>
        <Pressable style={styles.card}>
          <Image
            style={styles.cardImage}
            source={require("../../assets/image2.png")}
          />
          <Text style={styles.cardText}>Agende sua próxima sessão</Text>
        </Pressable>


        <Pressable style={styles.card}>
          <Image
            style={styles.cardImage}
            source={require("../../assets/frame33.png")}
          />
          <Text style={styles.cardText}>Encontre especialistas para conversar agora</Text>
        </Pressable>






        <Pressable style={styles.card}>
          <Image
            style={styles.cardImage}
            source={require("../../assets/image2.png")}
          />
          <Text style={styles.cardText}>Agende suas sessões automaticamente</Text>
        </Pressable>


      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Pressable style={styles.footerButton}>
          <Image
            style={styles.footerIcon}
            source={require("../../assets/frame28.png")}
          />
          <Text style={styles.footerButtonText}>Inicio</Text>
        </Pressable>
        <Pressable style={styles.footerButton} onPress={() => navigation.navigate("TListaProfisionais")}>
          <Image
            style={styles.footerIcon}
            source={require("../../assets/frame21.png")}
          />
          <Text style={styles.footerButtonText}>Especialistas</Text>
        </Pressable>
        <Pressable style={styles.footerButton} onPress={() => navigation.navigate("TLPerfilUsuario")}>
          <Image
            style={styles.footerIcon}
            source={require("../../assets/frame.png")}
          />
          <Text style={styles.footerButtonText}>Perfil</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: "#C72172", 
    padding: 20,
    height: 200,
    alignItems: "center",
  },
  welcomeText: {
    color: "#FFFFFF", 
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.kumbhSansBold,
  },
  headerButtons: {
    flexDirection: "row",
    marginTop: 20,
  },
  headerButton: {
    alignItems: "center",
    justifyContent: "center",  // Centraliza verticalmente o conteúdo do botão
    marginHorizontal: 10,
    width: 100,
    height: 100,
    backgroundColor: '#AA165F',
    borderRadius: 10,
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginBottom: 5, // Espaçamento entre o ícone e o texto
  },
  headerButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  body: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
  },
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: Color.colorPalevioletred,
    fontFamily: FontFamily.kumbhSansMedium,
    fontWeight: "800"
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
  logoutButton: {
    position: "absolute",  // Posição absoluta para o ícone de logout
    top: 20,               // Ajusta o espaçamento superior
    right: 20,             // Ajusta o espaçamento direito
  },
  logoutIcon: {
    width: 24,   // Tamanho do ícone de logout
    height: 24,
    tintColor: "#FFFFFF",  // Cor branca para o ícone
  },
});

export default TLPrincipalUsuario;