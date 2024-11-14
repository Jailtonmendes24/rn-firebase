import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { TeamType } from '../types/team';
import { RootStackParamList } from '../types/navigation';

type StoryDetailsRouteProp = RouteProp<RootStackParamList, 'StoryDetails'>;

const { width } = Dimensions.get('window');

interface RouteParams {
  story: {
    id: string;
    userName: string;
    userAvatar: string;
    team: TeamType;
  };
  teamColors: {
    primary: string;
    secondary: string;
  };
}

export function StoryDetails() {
  const navigation = useNavigation();
  const route = useRoute<StoryDetailsRouteProp>();
  const { story, teamColors } = route.params as RouteParams;

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { backgroundColor: teamColors.primary }]}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons 
            name="arrow-back" 
            size={24} 
            color={teamColors.secondary} 
          />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: teamColors.secondary }]}>
          {story.userName}
        </Text>
      </View>

      <View style={styles.content}>
        <Image 
          source={{ uri: story.userAvatar }} 
          style={styles.image}
        />
        
        <View style={[styles.infoContainer, { backgroundColor: teamColors.primary }]}>
          <Text style={[styles.infoText, { color: teamColors.secondary }]}>
            {story.userName}
          </Text>
          {/* Aqui você pode adicionar mais informações sobre a story */}
          <Text style={[styles.description, { color: teamColors.secondary }]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
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
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: width - 32,
    height: width - 32,
    borderRadius: 12,
    marginBottom: 16,
  },
  infoContainer: {
    padding: 16,
    borderRadius: 12,
  },
  infoText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
}); 