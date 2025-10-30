import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default function RegisterScreen({ navigation }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleRegister = () => {
    if (!phone || !password || !confirm) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    if (password !== confirm) {
      alert("Mật khẩu không trùng khớp!");
      return;
    }
    alert("Đăng ký thành công!");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://img.freepik.com/free-vector/flat-design-landscape-with-hills_23-2149154278.jpg",
        }}
        style={styles.banner}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Đăng ký</Text>
        <Text style={styles.subtitle}>
          Vui lòng điền thông tin bên dưới để tạo tài khoản mới
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Số điện thoại"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Nhập lại mật khẩu"
          placeholderTextColor="#999"
          secureTextEntry
          value={confirm}
          onChangeText={setConfirm}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Đã có tài khoản?{" "}
          <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
            Đăng nhập
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  banner: { width: "100%", height: 180, resizeMode: "cover" },
  content: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10, color: "#000" },
  subtitle: { fontSize: 14, color: "#666", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#f76c6c",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  footerText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
    color: "#000",
  },
  link: { color: "#e74c3c", fontWeight: "bold" },
});
