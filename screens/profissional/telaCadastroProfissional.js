import React from "react";
import { useState } from "react";
import supabase from "../../database/database";
import { StyleSheet, Text, Pressable, View, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from 'react-native-paper';
import { FontSize, Color, FontFamily, Border } from "../../GlobalStyles";

const TLCadastroEspecialista = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [crp, setCrp] = useState('');
  const [senha, setSenha] = useState('');
  const [resultado,setResultado] = useState('');
  const [aceitoTermos, setAceitoTermos] = useState(false);



  const handleCadastro = async () => {
    setResultado('');
    // setCarregando(true);

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: email,
      password: senha,
    });

    if (authError) {
      console.error('Erro ao registrar usuário no Supabase Auth:', authError.message);
      return;
    }

     // Extrai o ID do usuário criado
     const userId = authData.user.id;

    setResultado("Confirme seu email!");

    let { data, error } = await supabase.from('profissionaispi').insert([
      {
        id: userId,
        nome: nome,
        email: email,
        crp: crp,
        senha: senha,
      },
    ]);

    // setCarregando(false);
    if (error) {
      setResultado(`Erro ao inserir usuário! ${JSON.stringify(error)}`);
    } else {
      console.log('Usuário inserido com sucesso:', data);
      // await AsyncStorage.setItem('usuario', email);
      navigation.navigate('TLLoginProfissional');
    }
  };



























  
  return (
    <View style={styles.tlCadastroEspecialista}>
           <Image
        style={styles.backgroundImage}
        contentFit="cover"
        source={require("../../assets/cinzafundo.png")}
      />
      <Text style={styles.soundMindText}>Sound Mind</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.inputField}
          placeholder="Nome completo"
          placeholderTextColor={Color.colorSlategray_100}
          onChangeText={setNome}
        />
        <TextInput 
          style={styles.inputField}
          placeholder="Email"
          placeholderTextColor={Color.colorSlategray_100}
          onChangeText={setEmail}
        />
        <TextInput 
          style={styles.inputField}
          placeholder="CRP"
          placeholderTextColor={Color.colorSlategray_100}
          onChangeText={setCrp}
        />
        <TextInput 
          style={styles.inputField}
          placeholder="Senha"
          placeholderTextColor={Color.colorSlategray_100}
          secureTextEntry={true}
          onChangeText={setSenha}
        />
      </View>

      {/* Criar Conta Button */}
      <Pressable
        style={styles.createAccountButton}
        onPress={handleCadastro}
      >
        <Text style={styles.createAccountText}>Criar conta</Text>
      </Pressable>

      {/* Já tenho uma conta */}
      <Pressable onPress={() => navigation.navigate("TLLoginProfissional")}>
        <Text style={styles.alreadyHaveAccountText}>Já tenho uma conta</Text>
      </Pressable>

      {/* Social Buttons */}
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

      
      <View style={styles.termsContainer}>
        <Checkbox
          status={aceitoTermos ? 'checked' : 'unchecked'}
          onPress={() => setAceitoTermos(!aceitoTermos)}
          color={Color.colorMediumvioletred_100} // Color for checked state
          uncheckedColor={Color.colorSlategray_300} // Color for unchecked state
          style={styles.checkbox}
        />
        <Text style={styles.termsText}>Eu concordo com os termos de uso</Text>
      </View>






      <Text>{resultado}</Text>


    </View>
  );
};

const styles = StyleSheet.create({
  tlCadastroEspecialista: {
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
    backgroundColor: Color.colorGray_100,
  },
  termsText: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.kumbhSansRegular,
    color: Color.colorSlategray_100,
  },
  checkboxContainer: {
    width: 20,
    height: 20,
    marginRight: 10,
  }


  
});


export default TLCadastroEspecialista;

