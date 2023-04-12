import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Tarefa from "./src/Tarefa";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  const [state, setState] = useState("");
  const [list, setList] = useState([]);

  const handleClick = () => {
    if (state === "") {
      return;
    }

    const data = {
      key: Date.now(),
      item: state,
    };

    setList((oldArray) => [data, ...oldArray]);
    setState("");
  };

  const handleDelete = () => {
    alert();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Text style={styles.textHeader}>TAREFAS</Text>

        <View style={styles.InputContainer}>
          <TextInput
            style={styles.input}
            value={state}
            onChangeText={(state) => setState(state)}
          />
          <TouchableOpacity style={styles.button} onPress={handleClick}>
            <FontAwesome name="plus" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.list}>
        <FlatList
          data={list}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <Tarefa data={item} deleteItem={() => handleDelete(item.item)} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerStyle: {
    height: 200,
    width: "100%",
    backgroundColor: "#414042",
  },

  textHeader: {
    fontSize: 25,
    marginTop: "20%",
    marginLeft: "4%",
    marginBottom: "3%",
    color: "#EEF4F0",
    fontFamily: "Sans",
    fontStyle: "normal",
    fontWeight: 800,
  },

  InputContainer: {
    flexDirection: "row",
    width: "100%",
  },

  input: {
    backgroundColor: "#fff",
    width: "75%",
    borderRadius: 3,
    padding: 10,
    paddingHorizontal: 8,
    marginLeft: "4%",
    fontSize: 22,
  },
  button: {
    marginLeft: "2%",
    borderRadius: 3,
    width: "15%",
    backgroundColor: "#71f0fF",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    paddingStart: "4%",
    paddingEnd: "4%",
  },
});
