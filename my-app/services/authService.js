// services/authService.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Crypto from "expo-crypto";

const USERS_KEY = "@ttn_users_v1"; // key lưu users trong AsyncStorage

async function hashPassword(password) {
  // trả về hex string SHA-256
  return await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, password);
}

export async function getAllUsers() {
  try {
    const json = await AsyncStorage.getItem(USERS_KEY);
    return json ? JSON.parse(json) : [];
  } catch (err) {
    console.error("getAllUsers error:", err);
    return [];
  }
}

export async function saveAllUsers(users) {
  try {
    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (err) {
    console.error("saveAllUsers error:", err);
    throw err;
  }
}

/**
 * Đăng ký: lưu user nếu email chưa tồn tại
 * @param {{username, email, password}} user
 * @returns { success: boolean, message: string, user?: object }
 */
export async function registerUser({ username, email, password }) {
  // chuẩn hoá
  const cleanEmail = (email || "").trim().toLowerCase();
  const cleanName = (username || "").trim();

  if (!cleanName || !cleanEmail || !password) {
    return { success: false, message: "Vui lòng điền đủ thông tin." };
  }

  // validate email cơ bản
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    return { success: false, message: "Email không hợp lệ." };
  }
  if (password.length < 6) {
    return { success: false, message: "Mật khẩu phải >= 6 ký tự." };
  }

  const users = await getAllUsers();
  const exists = users.find(u => u.email === cleanEmail);
  if (exists) return { success: false, message: "Email đã được đăng ký." };

  const hashed = await hashPassword(password);
  const newUser = {
    id: Date.now().toString(),
    username: cleanName,
    email: cleanEmail,
    passwordHash: hashed,
    role: "user", // hoặc 'owner' nếu muốn
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  await saveAllUsers(users);

  return { success: true, message: "Đăng ký thành công.", user: newUser };
}

/**
 * Giả lập đăng nhập cục bộ
 * @param {email, password}
 */
export async function loginUser({ email, password }) {
  const cleanEmail = (email || "").trim().toLowerCase();
  const users = await getAllUsers();
  const user = users.find(u => u.email === cleanEmail);
  if (!user) return { success: false, message: "Email hoặc mật khẩu sai." };

  const hashed = await hashPassword(password);
  if (hashed !== user.passwordHash) return { success: false, message: "Email hoặc mật khẩu sai." };

  return { success: true, message: "Đăng nhập thành công.", user };
}
