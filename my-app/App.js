import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./app/screens/HomeScreen";
import SearchScreen from "./app/screens/SearchScreen";
import DetailScreen from "./app/screens/DetailScreen";
import AddRoomScreen from "./app/screens/AddRoomScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Trang chủ">
        <Stack.Screen
          name="Trang chủ"
          component={HomeScreen}
          options={{ title: "Tìm trọ nhanh" }}
        />
        <Stack.Screen
          name="Tìm kiếm"
          component={SearchScreen}
          options={{ title: "Tìm kiếm phòng" }}
        />
        <Stack.Screen
          name="Chi tiết phòng"
          component={DetailScreen}
          options={{ title: "Chi tiết phòng" }}
        />
        <Stack.Screen
          name="Đăng tin"
          component={AddRoomScreen}
          options={{ title: "Đăng tin cho thuê" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
