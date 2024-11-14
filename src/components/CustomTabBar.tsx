import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Mudamos para MaterialCommunityIcons

const { width } = Dimensions.get('window');

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const getIconName = (routeName: string, isFocused: boolean) => {
    switch (routeName) {
      case 'Home':
        return isFocused ? 'home' : 'home-outline';
      case 'Football':
        return isFocused ? 'soccer' : 'soccer';  // Ícone de futebol
      case 'Profile':
        return isFocused ? 'account' : 'account-outline';
      default:
        return 'help';
    }
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const isFootball = route.name === 'Football';

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={[
              styles.tabButton,
              isFootball && styles.footballButton,
              isFocused && styles.focusedButton
            ]}
          >
            <MaterialCommunityIcons
              name={getIconName(route.name, isFocused)}
              size={isFootball ? 32 : 24}
              color={isFocused ? '#fff' : '#666'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    height: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 10,
  },
  footballButton: {
    backgroundColor: '#2ecc71',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: -30,
    shadowColor: '#2ecc71',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  focusedButton: {
    backgroundColor: '#444',
  },
});