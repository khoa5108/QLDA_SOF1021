import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

const messages = [
  { id: "1", name: "Nguyễn Văn A", lastMsg: "Phòng còn trống không bạn?" },
  { id: "2", name: "Trần Thị B", lastMsg: "Giá bao nhiêu vậy?" },
];

export default function MessageScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>Tin Nhắn</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              paddingVertical: 12,
              borderBottomWidth: 1,
              borderColor: "#eee",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            <Text style={{ color: "#555" }}>{item.lastMsg}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
