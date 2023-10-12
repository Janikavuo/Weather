import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Position from './components/Position';

export default function App() {
  return (
      <View style={styles.container}>
        <StatusBar
          style="auto"
          backgroundColor="#A9D7F6" 
        />
        <Text style={styles.heading}>Tämänhetkinen sää</Text>
        <Position />
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
  heading: {
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 60,
  }
});