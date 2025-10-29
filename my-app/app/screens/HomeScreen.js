import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <View style={{ height: 150, backgroundColor: "#cce5ff", justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#007bff" }}>Banner Quảng Cáo</Text>
        </View>

        {/* Hàng nút chức năng */}
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 15 }}>
          <View style={{ alignItems: "center" }}>
            <Ionicons name="location-outline" size={30} color="red" />
            <Text>Tìm Phòng</Text>
            <Text>Quanh Đây</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Ionicons name="home-outline" size={30} color="orange" />
            <Text>Tin Đăng</Text>
            <Text>Cho Thuê</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Ionicons name="search-outline" size={30} color="green" />
            <Text>Tin Đăng</Text>
            <Text>Tìm Phòng</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Ionicons name="list-outline" size={30} color="gray" />
            <Text>Quản Lý</Text>
            <Text>Tin Đăng</Text>
          </View>
        </View>

        {/* Ô tìm kiếm */}
        <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 15 }}>
          <Ionicons name="location" size={20} color="red" />
          <Text style={{ marginHorizontal: 8 }}>Hà Nội</Text>
          <TextInput
            placeholder="Tìm Kiếm Nhà/Phòng"
            style={{
              flex: 1,
              backgroundColor: "#f1f1f1",
              borderRadius: 8,
              paddingHorizontal: 10,
              height: 35,
            }}
          />
        </View>

        {/* Khám phá */}
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Khám Phá</Text>
        </View>

        {/* Hình ảnh khám phá */}
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginVertical: 15 }}>
          <View style={{ width: 150, height: 100, backgroundColor: "#d9f2ff", borderRadius: 10 }} />
          <View style={{ width: 150, height: 100, backgroundColor: "#d9f2ff", borderRadius: 10 }} />
        </View>
      </ScrollView>

    
    </View>
  );
}
