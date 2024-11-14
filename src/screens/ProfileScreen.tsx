import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { auth } from '../firebase.config';
import { signOut } from 'firebase/auth';

export default function ProfileScreen() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Perfil</Text>
      <Text style={styles.email}>{auth.currentUser?.email}</Text>
      <Button title="Sair" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
});