import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", alignItems: "center", paddingTop: 40 }}>
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/847/847969.png" }}
        style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Người Dùng</Text>
      <Text style={{ color: "#666", marginBottom: 20 }}>user@email.com</Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#007bff",
          paddingVertical: 10,
          paddingHorizontal: 25,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff" }}>Chỉnh sửa hồ sơ</Text>
      </TouchableOpacity>
    </View>
  );
}
