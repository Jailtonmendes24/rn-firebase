import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
}

export function Header({ title, backgroundColor = '#1a1a1a', textColor = '#fff' }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={[styles.header, { backgroundColor }]}>
      <TouchableOpacity 
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color={textColor} />
      </TouchableOpacity>
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  backButton: {
    padding: 8,
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 