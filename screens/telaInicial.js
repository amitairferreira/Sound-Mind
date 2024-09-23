import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import JailMonkey from 'jail-monkey';


const TelaInicial = () => {
  const navigation = useNavigation();

  if (JailMonkey.isJailBroken()) {
    BackHandler.exitApp();
  }

  return (
    <View style={styles.telaInicial}>
      <Image
        style={[styles.cinzafundoIcon, styles.paraIconPosition]}
        contentFit="cover"
        source={require("../assets/cinzafundo.png")}
      />

      <Image
        style={styles.bolaamarelaIcon}
        contentFit="cover"
        source={require("../assets/bolaamarela.png")}
      />

      <Image
        style={styles.mulhermeditandoIcon}
        contentFit="cover"
        source={require("../assets/mulhermeditando.png")}
      />

      <Text
        style={[styles.encontreOSuporte, styles.paraIconPosition]}
      >{`Encontre o suporte  necessário para cuidar da sua saúde mental `}</Text>

      <Image
        style={[styles.frameIcon, styles.paraIconPosition]}
        contentFit="cover"
        source={require("../assets/frame26.png")}
      />

      <Text style={styles.soundMind}>{`Sound Mind`}</Text>

      <Pressable
        style={[styles.paraVoc, styles.paraIconPosition]}
        onPress={() => navigation.navigate("TLCadastroUsurio")}
      >
        <Text style={[styles.paraVoc1, styles.paraTypo]}>Para você</Text>
      </Pressable>
      <Pressable
        style={[styles.paraEspecialistas, styles.paraIconPosition]}
        onPress={() => navigation.navigate("TLCadastroEspecialista")}
      >
        <Text style={[styles.paraEspecialistas1, styles.paraTypo]}>
          Para especialistas
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  paraIconPosition: {
    left: "50%",
    position: "absolute",
  },
  timePosition: {
    height: 20,
    top: "50%",
    position: "absolute",
  },
  batteryPosition: {
    right: 0,
    top: "50%",
    position: "absolute",
  },
  borderPosition: {
    top: "50%",
    position: "absolute",
  },
  paraTypo: {
    fontFamily: FontFamily.kumbhSansBold,
    textDecoration: "underline",
    fontSize: FontSize.size_xl,
    color: Color.colorMediumvioletred_100,
    fontWeight: "700",
    textAlign: "center",
  },
  cinzafundoIcon: {
    marginLeft: -187.5,
    top: 1,
    width: 375,
    height: 812,
  },
  bolaamarelaIcon: {
    top: 541,
    left: -34,
    width: 447,
    height: 398,
    position: "absolute",
  },
  mulhermeditandoIcon: {
    bottom: -52,
    left: 78,
    width: 224,
    height: 301,
    position: "absolute",
  },
  encontreOSuporte: {
    marginLeft: -131.5,
    top: 268,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.kumbhSansRegular,
    color: Color.colorBlack,
    width: 263,
    height: 43,
    textAlign: "center",
  },
  frameIcon: {
    marginLeft: -11.5,
    top: 323,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  time: {
    marginTop: -10,
    left: 0,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.rubikMedium,
    color: Color.colorGray_100,
    width: 57,
    textAlign: "center",
  },
  border: {
    marginTop: -5.6,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    width: 21,
    height: 11,
  },
  capIcon: {
    marginTop: -2,
    width: 1,
    height: 4,
  },
  capacity: {
    marginTop: -3.6,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.colorGray_100,
    height: 7,
    width: 17,
  },
  battery: {
    marginTop: -6,
    width: 23,
    height: 11,
  },
  wifiIcon: {
    width: 17,
    height: 11,
  },
  timeParent: {
    marginTop: -393,
    left: 9,
    width: 348,
  },
  telaInicialChild: {
    top: -172,
    left: 543,
    width: 221,
    height: 248,
    position: "absolute",
  },
  soundMind: {
    marginLeft: -174.5,
    top: 108,
    fontSize: FontSize.size_29xl,
    fontFamily: FontFamily.josefinSansBold,
    width: 350,
    color: Color.colorMediumvioletred_100,
    fontWeight: "700",
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  paraVoc1: {
    marginLeft: -45.5,
  },
  paraVoc: {
    top: 378,
  },
  paraEspecialistas1: {
    marginLeft: -85.5,
    letterSpacing: 0.4,
  },
  paraEspecialistas: {
    top: 437,
  },
  telaInicial: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});
export default TelaInicial;
