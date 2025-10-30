import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

// 📌 Screens
import HomeScreen from "./app/screens/HomeScreen";
import PostScreen from "./app/screens/PostScreen";
import MessageScreen from "./app/screens/MessageScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// =====================
// 👉 TAB CHÍNH (sau đăng nhập)
// =====================
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 5,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Trang Chủ") iconName = "home-outline";
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
  );
}


// =====================
// 👉 ỨNG DỤNG CHÍNH
// =====================
export default function App() {
  const [user, setUser] = useState(null); // Trạng thái đăng nhập

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          // Nếu đã đăng nhập -> hiển thị trang chính
          <Stack.Screen name="MainTabs" component={MainTabs} />
        ) : (
          // Nếu chưa -> hiển thị Login + Register
          <>
            <Stack.Screen name="Login">
              {(props) => <LoginScreen {...props} setUser={setUser} />}
            </Stack.Screen>
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
