import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TeamType } from '../types/team';
import { RootStackParamList } from '../types/navigation';

type MenuNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const { width } = Dimensions.get('window');
const BADGE_WIDTH = (width - 40) / 2; // 2 badges por linha com margem

interface MenuBadgesProps {
  selectedTeam: TeamType | null;
  teamColors: {
    [key in TeamType]: {
      primary: string;
      secondary: string;
    };
  };
}

type MenuScreens = Extract<keyof RootStackParamList, 
  'NextGames' | 'Championships' | 'News' | 'Stats' | 'Squad' | 'History'
>;

const menuItems: Array<{
  id: string;
  title: string;
  icon: string;
  screen: MenuScreens;
}> = [
  {
    id: 'next-games',
    title: 'Próximos Jogos',
    icon: 'football-outline',
    screen: 'NextGames',
  },
  {
    id: 'championships',
    title: 'Campeonatos',
    icon: 'trophy-outline',
    screen: 'Championships',
  },
  {
    id: 'squad',
    title: 'Elenco',
    icon: 'people-outline',
    screen: 'Squad',
  },
  {
    id: 'history',
    title: 'História',
    icon: 'book-outline',
    screen: 'History',
  },
];

export function MenuBadges({ selectedTeam, teamColors }: MenuBadgesProps) {
  const navigation = useNavigation<MenuNavigationProp>();

  const handlePress = (screen: MenuScreens) => {
    navigation.navigate(screen, { team: selectedTeam });
  };

  const getColors = () => {
    if (selectedTeam) {
      return teamColors[selectedTeam];
    }
    return {
      primary: '#E5E5E5',
      secondary: '#666666',
    };
  };

  const colors = getColors();

  return (
    <View style={styles.container}>
      {menuItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.badge,
            { backgroundColor: colors.primary }
          ]}
          activeOpacity={0.7}
          onPress={() => handlePress(item.screen)}
        >
          <Ionicons 
            name={item.icon as any}
            size={24}
            color={colors.secondary}
            style={styles.icon}
          />
          <Text style={[
            styles.badgeText,
            { color: colors.secondary }
          ]}>
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    gap: 10,
  },
  badge: {
    width: BADGE_WIDTH,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  icon: {
    marginBottom: 8,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
}); 