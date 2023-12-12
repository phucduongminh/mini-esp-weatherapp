// screens/InputScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { insertData, openDatabase } from '../db/Database';

export default function InputScreen({navigation}) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  // Trong InputScreen.tsx
const handleSave = () => {
  if (name && age) {
    const ageNumber = parseInt(age, 10); // Chuyển đổi age từ chuỗi sang số nguyên
    if (!isNaN(ageNumber)) {
      // Mở cơ sở dữ liệu và chèn dữ liệu
      openDatabase().then(db => {
        insertData(9,name, ageNumber).then(() => {
          // Chuyển hướng đến màn hình danh sách
          navigation.navigate('List');
        });
      });
    }
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your name and age</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    padding: 10,
  },
});