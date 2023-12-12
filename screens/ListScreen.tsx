// screens/ListScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { openDatabase, getData } from '../db/Database';

export default function ListScreen() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // open the database and get the data
    async () => {
      try {
        const result = await getData();
        setData(result as any[]);
      } catch (error) {
        console.error('Error loading expenses:', error);
      }
    };
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.age}>{item.age}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of data</Text>
      {data.map((item) => (
        <Text key={item.id}>{item.name}: {item.amount}</Text>
      ))}
    </View>
  );
}

/* <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      /> */

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
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  name: {
    flex: 1,
    fontSize: 18,
  },
  age: {
    fontSize: 18,
  },
});