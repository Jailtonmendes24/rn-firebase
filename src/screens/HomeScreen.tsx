import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { TeamShields } from '../components/TeamShields';
import { StoryList } from '../components/StoryList';
import { MenuBadges } from '../components/MenuBadges';
import { PostCard } from '../components/PostCard';
import { TeamType } from '../types/team';
import { SafeAreaView } from 'react-native-safe-area-context';


const mockPosts = [
  {
    id: '1',
    userName: '860 News',
    userAvatar: 'https://picsum.photos/400?random=1',
    content: 'Leão se prepara para próximo desafio!',
    imageUrl: 'https://picsum.photos/400/400?random=1',
    likes: 123,
    comments: 12,
  },
  // ... mais posts
];

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

export default function HomeScreen() {
  const [selectedTeam, setSelectedTeam] = useState<TeamType | null>(null);

  return (
    <View style={styles.container}>
      <SafeAreaView>
      <FlatList
        data={mockPosts}
        renderItem={({ item }) => <PostCard post={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <>
            <TeamShields 
              selectedTeam={selectedTeam} 
              onSelectTeam={setSelectedTeam} 
            />
            <StoryList selectedTeam={selectedTeam} />
            <MenuBadges 
              selectedTeam={selectedTeam}
              teamColors={teamColors}
            />
          </>
        }
        showsVerticalScrollIndicator={false}
      />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
}); 