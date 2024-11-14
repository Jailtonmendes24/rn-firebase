import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { Header } from '../components/Header';

type NextGamesRouteProp = RouteProp<RootStackParamList, 'NextGames'>;

export function NextGamesScreen() {
  const route = useRoute<NextGamesRouteProp>();
  const { team } = route.params;

  return (
    <View style={styles.container}>
      <Header title="Próximos Jogos" />
      <View style={styles.content}>
        <Text>Lista de próximos jogos aqui</Text>
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