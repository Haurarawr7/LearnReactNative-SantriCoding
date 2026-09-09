import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

// Import komponen screen kamu jika sudah ada (contoh: import HomeScreen from '../screens/HomeScreen')

const Stack = createNativeStackNavigator();

// Komponen sementara jika kamu belum buat file Screen terpisah
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halaman Utama (Home)</Text>
    </View>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Daftarkan screen "Home" di sini */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Beranda' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});