import React from "react";
import { View, Text, Image } from "react-native";

export default function DetailScreen({ route }) {
  const { room } = route.params;
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image
        source={{ uri: "https://picsum.photos/400/200" }}
        style={{ width: "100%", height: 200, borderRadius: 8 }}
      />
      <Text style={{ fontSize: 24, marginVertical: 10 }}>{room.title}</Text>
      <Text style={{ fontSize: 18, color: "#444" }}>{room.price}</Text>
      <Text style={{ fontSize: 16, color: "#666", marginTop: 8 }}>{room.location}</Text>
      <Text style={{ marginTop: 15 }}>Mô tả: Phòng rộng rãi, sạch sẽ, có ban công và wifi miễn phí.</Text>
    </View>
  );
}
