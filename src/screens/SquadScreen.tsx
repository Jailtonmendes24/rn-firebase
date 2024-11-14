import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { Header } from '../components/Header';

type SquadRouteProp = RouteProp<RootStackParamList, 'Squad'>;

export function SquadScreen() {
  const route = useRoute<SquadRouteProp>();
  const { team } = route.params;

  return (
    <View style={styles.container}>
      <Header title="Elenco" />
      <View style={styles.content}>
        <Text>Elenco Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  content: {
    flex: 1,
    padding: 16,
  },
}); 