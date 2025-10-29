import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import RoomCard from "../../components/RoomCard";

const rooms = [
  { id: "1", title: "Phòng trọ Quận 1", price: "3.000.000đ/tháng", location: "Q1, TP.HCM" },
  { id: "2", title: "Phòng trọ Quận 7", price: "2.500.000đ/tháng", location: "Q7, TP.HCM" },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="🔍 Tìm kiếm phòng" onPress={() => navigation.navigate("Tìm kiếm")} />
      <Button title="➕ Đăng tin cho thuê" onPress={() => navigation.navigate("Đăng tin")} />

      <Text style={{ fontSize: 20, marginVertical: 10 }}>Phòng trọ nổi bật</Text>

      <FlatList
        data={rooms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RoomCard room={item} onPress={() => navigation.navigate("Chi tiết phòng", { room: item })} />
        )}
      />
    </View>
  );
}
