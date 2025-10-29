import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

export default function RoomCard({ room, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        elevation: 2,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{room.title}</Text>
      <Text style={{ color: "#444" }}>{room.price}</Text>
      <Text style={{ color: "#777" }}>{room.location}</Text>
    </TouchableOpacity>
  );
}
