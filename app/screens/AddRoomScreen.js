import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function AddRoomScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");

  const handleAdd = () => {
    if (!title || !price || !address) return Alert.alert("Thiếu thông tin!", "Vui lòng nhập đầy đủ.");
    Alert.alert("✅ Thành công", "Tin trọ đã được đăng (demo)");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Đăng tin trọ mới</Text>
      <TextInput style={styles.input} placeholder="Tên phòng trọ" value={title} onChangeText={setTitle} />
      <TextInput style={styles.input} placeholder="Giá (VD: 2.000.000đ)" value={price} onChangeText={setPrice} />
      <TextInput style={styles.input} placeholder="Địa chỉ" value={address} onChangeText={setAddress} />
      <TouchableOpacity style={styles.btn} onPress={handleAdd}>
        <Text style={styles.btnText}>Đăng tin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 15 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  input: {
    borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 8, marginBottom: 10,
  },
  btn: { backgroundColor: "#007BFF", padding: 15, borderRadius: 8, alignItems: "center" },
  btnText: { color: "#fff", fontWeight: "bold" },
});
