import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";

const mockRooms = [
  { id: "1", title: "Phòng trọ gần ĐH CNTT", price: "2.000.000đ/tháng", address: "Quận 9, TP.HCM", image: "https://picsum.photos/300/200" },
  { id: "2", title: "Phòng trọ giá rẻ Gò Vấp", price: "1.500.000đ/tháng", address: "Gò Vấp, TP.HCM", image: "https://picsum.photos/301/200" },
  { id: "3", title: "Phòng full nội thất Bình Thạnh", price: "3.000.000đ/tháng", address: "Bình Thạnh, TP.HCM", image: "https://picsum.photos/302/200" },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Danh sách phòng trọ</Text>

      <FlatList
        data={mockRooms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Chi tiết phòng", { room: item })}>
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.address}>{item.address}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigation.navigate("Đăng tin")}
      >
        <Text style={styles.addText}>+ Đăng tin mới</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  card: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    marginVertical: 8,
    padding: 10,
  },
  image: { width: "100%", height: 150, borderRadius: 10 },
  name: { fontSize: 18, fontWeight: "bold", marginTop: 5 },
  address: { color: "#666", marginTop: 2 },
  price: { color: "#007BFF", marginTop: 4, fontWeight: "bold" },
  addBtn: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
  },
  addText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
