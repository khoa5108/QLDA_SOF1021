import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default function PostScreen() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>Đăng Tin Cho Thuê</Text>

      <Text>Tiêu đề:</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Nhập tiêu đề"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 10,
          marginBottom: 10,
        }}
      />

      <Text>Giá thuê (VNĐ):</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="Nhập giá"
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 10,
          marginBottom: 10,
        }}
      />

      <Text>Mô tả:</Text>
      <TextInput
        value={desc}
        onChangeText={setDesc}
        placeholder="Mô tả chi tiết"
        multiline
        numberOfLines={4}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 10,
          marginBottom: 10,
          height: 120,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#007bff",
          padding: 15,
          borderRadius: 10,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Đăng Tin</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
