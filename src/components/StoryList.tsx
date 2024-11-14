import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { TeamType } from '../types/team';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

const { width } = Dimensions.get('window');
const SQUARE_SIZE = (width - 40) / 2;

interface StoryListProps {
  selectedTeam: TeamType | null;
}

// Definindo o tipo para as cores dos times
const teamColors: Record<TeamType, { primary: string; secondary: string }> = {
  sport: {
    primary: '#000000',    // Vermelho Sport
    secondary: '#D3222A'    // Preto Sport
  },
  santa: {
    primary: '#FF0000',    // Vermelho Santa Cruz
    secondary: '#FFFFFF'    // Branco Santa Cruz
  },
  nautico: {
    primary: '#FFFFFF',    // Vermelho Náutico
    secondary: '#FF0000'    // Branco Náutico
  }
};

// Definindo a interface para as histórias
interface Story {
  id: string;
  userName: string;
  userAvatar: string;
  team: TeamType;
}

const mockStories: Story[] = [
  {
    id: '1',
    userName: 'Sport',
    userAvatar: 'https://picsum.photos/400?random=1',
    team: 'sport'
  },
  {
    id: '2',
    userName: 'Santa Cruz',
    userAvatar: 'https://picsum.photos/400?random=2',
    team: 'santa'
  },
  {
    id: '3',
    userName: 'Noticia',
    userAvatar: 'https://picsum.photos/400?random=3',
    team: 'nautico'
  },
  {
    id: '4',
    userName: 'Noticia 4 Sport',
    userAvatar: 'https://picsum.photos/400?random=4',
    team: 'sport'
  },
  {
    id: '5',
    userName: 'Noticia 5 Sport',
    userAvatar: 'https://picsum.photos/400?random=5',
    team: 'sport'
  },
  {
    id: '6',
    userName: 'Noticia 6 Sport',
    userAvatar: 'https://picsum.photos/400?random=6',
    team: 'sport'
  },
  {
    id: '7',
    userName: 'Noticia 2 Santa',
    userAvatar: 'https://picsum.photos/400?random=7',
    team: 'santa'
  },
  {
    id: '8',
    userName: 'Noticia 8 Santa',
    userAvatar: 'https://picsum.photos/400?random=8',
    team: 'santa'
  },
  {
    id: '9',
    userName: 'Noticia 9 Nautico',
    userAvatar: 'https://picsum.photos/400?random=9',
    team: 'nautico'
  },
  {
    id: '10',
    userName: 'Noticia 10 Nautico',
    userAvatar: 'https://picsum.photos/400?random=10',
    team: 'nautico'
  }
];

type StoryListNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function StoryList({ selectedTeam }: StoryListProps) {
  const navigation = useNavigation<StoryListNavigationProp>();

  const handleStoryPress = (story: Story) => {
    navigation.navigate('StoryDetails', {
      story,
      teamColors: teamColors[story.team]
    });
  };

  const filteredStories = selectedTeam 
    ? mockStories.filter(story => story.team === selectedTeam)
    : mockStories;

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        decelerationRate="fast"
        snapToInterval={SQUARE_SIZE + 10}
      >
        {filteredStories.map((story) => (
          <TouchableOpacity 
            key={story.id} 
            style={[
              styles.storyContainer,
              { borderColor: teamColors[story.team].primary }
            ]}
            activeOpacity={0.7}
            onPress={() => handleStoryPress(story)}
          >
            <Image 
              source={{ uri: story.userAvatar }} 
              style={styles.storyImage} 
            />
            <View style={[
              styles.userInfo,
              { backgroundColor: teamColors[story.team].primary }
            ]}>
              <Text style={[
                styles.userName,
                { color: teamColors[story.team].secondary }
              ]}>
                {story.userName}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SQUARE_SIZE + 40,
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
  },
  scrollContent: {
    paddingHorizontal: 15,
  },
  storyContainer: {
    width: SQUARE_SIZE - 20,
    height: SQUARE_SIZE - 20,
    marginRight: 10,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderWidth: 3,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  storyImage: {
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
  },
  userInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}); 