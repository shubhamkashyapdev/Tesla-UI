import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

// Assets //
import TeslaBg from './assets/images/ModelX.jpeg';

// Components //
import CarItem from './components/CarItem/Index';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        tagline='Order Online For'
        taglineCta='Touchless Delivery'
        model='Model X'
        bgImg={TeslaBg}
      />
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
