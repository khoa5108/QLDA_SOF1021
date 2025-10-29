import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function DetailScreen({ route }) {
  const { room } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: room.image }} style={styles.image} />
      <Text style={styles.title}>{room.title}</Text>
      <Text style={styles.address}>{room.address}</Text>
      <Text style={styles.price}>{room.price}</Text>
      <Text style={styles.desc}>📋 Mô tả: Phòng sạch, có gác, WC riêng, gần trường và chợ.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 15 },
  image: { width: "100%", height: 220, borderRadius: 10 },
  title: { fontSize: 22, fontWeight: "bold", marginVertical: 10 },
  address: { color: "#666", fontSize: 16 },
  price: { color: "#007BFF", fontWeight: "bold", fontSize: 18, marginVertical: 5 },
  desc: { marginTop: 10, lineHeight: 22 },
});
