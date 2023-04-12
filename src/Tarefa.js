import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Tarefa({ data, deleteItem }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={deleteItem}>
        <FontAwesome name="trash" size={30} color="#22272e" />
      </TouchableOpacity>
      <Text style={styles.text}>{data.item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(196,196,196,0.25)",
    marginTop: "5%",
    padding: "4%",
    borderRadius: 4,
  },
  button: {
    marginRight: 15,
  },
  text: {
    fontSize: 20,
  },
});
