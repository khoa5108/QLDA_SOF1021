import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function ModalScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đây là trang Modal</Text>
      <Button
        title="Quay lại Trang chủ"
        onPress={() => navigation.navigate('Trang chủ')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

