import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Pressable, View, Image, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../../GlobalStyles";

const TLMinhaJornada =() => {
  const navigation = useNavigation();

  return (
    <View style={styles.tlMinhaJornada}>
      <Text>TELA MINHA JORNADA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tlMinhaJornada: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  }
});

export default TLMinhaJornada;