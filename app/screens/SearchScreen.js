import React, { useState } from "react";
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";

const mockRooms = [
  { id: "1", title: "Phòng trọ gần ĐH CNTT" },
  { id: "2", title: "Phòng trọ Gò Vấp" },
  { id: "3", title: "Phòng Bình Thạnh" },
];

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (text) => {
    setQuery(text);
    setResults(mockRooms.filter((r) => r.title.toLowerCase().includes(text.toLowerCase())));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập từ khóa tìm trọ..."
        value={query}
        onChangeText={handleSearch}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  item: {
    padding: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    marginVertical: 5,
  },
});
