import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Screens
import HomeScreen from "../my-app/app/screens/HomeScreen";
import PostScreen from "../my-app/app/screens/PostScreen";
import MessageScreen from "../my-app/app/screens/MessageScreen";
import ProfileScreen from "../my-app/app/screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#007bff",
          tabBarInactiveTintColor: "#888",
          tabBarStyle: { height: 60, paddingBottom: 8 },
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Trang Chủ") iconName = "home";
            else if (route.name === "Đăng Tin") iconName = "add-circle-outline";
            else if (route.name === "Tin Nhắn") iconName = "chatbubble-outline";
            else if (route.name === "Cá Nhân") iconName = "person-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Trang Chủ" component={HomeScreen} />
        <Tab.Screen name="Đăng Tin" component={PostScreen} />
        <Tab.Screen name="Tin Nhắn" component={MessageScreen} />
        <Tab.Screen name="Cá Nhân" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
