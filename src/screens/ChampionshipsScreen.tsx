import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { Header } from '../components/Header';

type ChampionshipsRouteProp = RouteProp<RootStackParamList, 'Championships'>;

export function ChampionshipsScreen() {
  const route = useRoute<ChampionshipsRouteProp>();
  const { team } = route.params;

  return (
    <View style={styles.container}>
      <Header title="Campeonatos" />
      <View style={styles.content}>
        <Text>Campeonatos Screen</Text>
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