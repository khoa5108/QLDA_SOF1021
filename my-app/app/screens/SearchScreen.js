import React, { useState } from "react";
import { View, TextInput, Button, FlatList } from "react-native";
import RoomCard from "../../components/RoomCard";

export default function SearchScreen({ navigation }) {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Giả lập tìm kiếm (thực tế có thể fetch từ API)
    const data = [
      { id: "3", title: "Phòng trọ Thủ Đức", price: "2.000.000đ", location: "Thủ Đức, TP.HCM" },
      { id: "4", title: "Phòng trọ Quận 10", price: "3.200.000đ", location: "Q10, TP.HCM" },
    ];
    setResults(data.filter(r => r.title.toLowerCase().includes(keyword.toLowerCase())));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Nhập khu vực, quận..."
        style={{ borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 8, marginBottom: 10 }}
      />
      <Button title="Tìm kiếm" onPress={handleSearch} />

      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RoomCard room={item} onPress={() => navigation.navigate("Chi tiết phòng", { room: item })} />
        )}
      />
    </View>
  );
}
