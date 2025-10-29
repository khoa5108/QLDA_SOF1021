import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

export default function AddRoomScreen() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    Alert.alert("Thành công", `Đã đăng tin: ${title}`);
    setTitle(""); setPrice(""); setLocation("");
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput placeholder="Tiêu đề phòng" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput placeholder="Giá phòng" value={price} onChangeText={setPrice} style={styles.input} />
      <TextInput placeholder="Địa chỉ" value={location} onChangeText={setLocation} style={styles.input} />
      <Button title="Đăng tin" onPress={handleSubmit} />
    </View>
  );
}

const styles = {
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
};
