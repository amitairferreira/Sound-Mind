import React, { useState }  from "react";
import { StyleSheet, Text, Pressable, View, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontSize, Color, FontFamily, Border } from "../../GlobalStyles";
import supabase from "../../database/database";

const TLLoginProfissional = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [resultado,setResultado] = useState('');
  const [carregando,setCarregando] = useState(false);

  const handleLogin = async () => {
    setResultado('');
    setCarregando(true);
    console.log("Login", email)

    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: senha,
    });

    setCarregando(false);

    if (error) {
      console.log(JSON.stringify(error));
      
      setResultado("USUÁRIO/SENHA incorretos!");
    } else {
      await AsyncStorage.setItem('usuario', email);
      navigation.navigate('TLPrincipalUsuario'); //alterar a tela de inicio do psicologo
    }
  };

  return(
    <View style={styles.tlLoginProfissional}>
      <Image
        style={styles.backgroundImage}
        contentFit="cover"
        source={require("../../assets/cinzafundo.png")}
      />

      <Text style={styles.soundMindText}>{`Sound Mind`}</Text>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.inputField}
          placeholder="Email"
          onChangeText={setEmail}
          placeholderTextColor={Color.colorSlategray_100}
        />
        <TextInput 
          style={styles.inputField}
          placeholder="Senha"
          onChangeText={setSenha}
          placeholderTextColor={Color.colorSlategray_100}
          secureTextEntry={true}
        />
      </View>

      <Pressable
        style={styles.createAccountButton}
        onPress={handleLogin}
      >
        <Text style={styles.createAccountText}>Entrar</Text>
      </Pressable>

      <View style={styles.socialButtonsContainer}>
        <Pressable style={styles.socialButton}>
          <Image
            style={styles.socialIcon}
            source={require("../../assets/group3.png")}
          />
          <Text style={styles.socialButtonText}>Google</Text>
        </Pressable>
        <Pressable style={styles.socialButton}>
          <Image
            style={styles.socialIcon}
            source={require("../../assets/group4.png")}
          />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </Pressable>
      </View>
      
    </View>
  );

};

const styles = StyleSheet.create({
  tlLoginProfissional: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  soundMindText: {
    marginTop: 100,
    textAlign: "center",
    fontSize: FontSize.size_29xl,
    fontFamily: FontFamily.josefinSansBold,
    color: Color.colorMediumvioletred_100,
    fontWeight: "700",
  },
  inputContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  inputField: {
    height: 54,
    borderColor: Color.colorSlategray_300,
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: FontSize.size_base,
    color: Color.colorSlategray_100,
  },
  createAccountButton: {
    backgroundColor: Color.colorMediumvioletred_100,
    borderRadius: Border.br_mini,
    alignItems: "center",
    paddingVertical: 15,
    marginHorizontal: 20,
    marginTop: 10,
  },
  createAccountText: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.kumbhSansBold,
    color: Color.colorWhite,
  },
  alreadyHaveAccountText: {
    textAlign: "center",
    color: Color.colorMediumvioletred_100,
    fontFamily: FontFamily.kumbhSansRegular,
    textDecorationLine: "underline",
    marginTop: 10,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorSlategray_300,
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    padding: 10,
    marginHorizontal: 5,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.kumbhSansLight,
    color: Color.colorSlategray_100,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  checkbox: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  termsText: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.kumbhSansRegular,
    color: Color.colorSlategray_100,
  },
});

export default TLLoginProfissional;