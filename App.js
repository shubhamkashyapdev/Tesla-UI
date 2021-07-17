import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

// assets //
import cars from './components/CarListData';
// Components //
import Header from './components/Header/index';
import CarList from './components/CarList/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
