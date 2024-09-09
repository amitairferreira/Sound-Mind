import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable, Image, ScrollView, Alert } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation, useRoute } from "@react-navigation/native";
import supabase from "../../database/database";
import { Border, Color, FontFamily, FontSize } from "../../GlobalStyles";

const TAgendarProfissional =() => {
  const navigation = useNavigation();
  const route = useRoute();
  const { profissional } = route.params; 
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [agendamentoConfirmado, setAgendamentoConfirmado] = useState(false);

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleTimeChange = (event, time) => {
    setShowTimePicker(false);
    if (time) {
      setSelectedTime(time);
    }
  };

  const handleAgendar = () => {
    if (selectedDate && selectedTime) {
      setAgendamentoConfirmado(true); 
      Alert.alert("Atendimento cadastrado com sucesso!");
    } else {
      Alert.alert("Por favor, selecione uma data e horário.");
    }
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image style={styles.profissionalImage} source={profissional.imagem} />
        <Text style={styles.nomeText}>{profissional.nome}</Text>
        <Text style={styles.crpText}>CRP: {profissional.crp}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Seletor de Data */}
        <Pressable style={styles.pickerButton} onPress={() => setShowDatePicker(true)}>
          <Text style={styles.pickerButtonText}>
            {selectedDate ? selectedDate.toLocaleDateString() : "Selecionar Data"}
          </Text>
        </Pressable>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        {/* Seletor de Horário */}
        <Pressable style={styles.pickerButton} onPress={() => setShowTimePicker(true)}>
          <Text style={styles.pickerButtonText}>
            {selectedTime ? selectedTime.toLocaleTimeString() : "Selecionar Horário"}
          </Text>
        </Pressable>
        {showTimePicker && (
          <DateTimePicker
            value={new Date()}
            mode="time"
            display="default"
            onChange={handleTimeChange}
          />
        )}

        <Pressable style={styles.agendarButton} onPress={handleAgendar}>
          <Text style={styles.agendarButtonText}>Agendar Consulta</Text>
        </Pressable>

        {agendamentoConfirmado && (
          <View style={styles.confirmationCard}>
            <Text style={styles.confirmationText}>
              Agendado atendimento com {profissional.nome} na data {selectedDate.toLocaleDateString()} às {selectedTime.toLocaleTimeString()}.
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Footer */}
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
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  profissionalImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  nomeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  crpText: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  content: {
    padding: 20,
  },
  pickerButton: {
    backgroundColor: "#E2E2E2",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  pickerButtonText: {
    color: "#666666",
    fontSize: 16,
  },
  agendarButton: {
    backgroundColor: "#C72172",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  agendarButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  confirmationCard: {
    backgroundColor: "#C72172",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  confirmationText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
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

export default TAgendarProfissional;


