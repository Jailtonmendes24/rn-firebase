import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { TeamType } from '../types/team';
import SportShield from '../assets/sport.svg';
import SantaShield from '../assets/santa.svg';
import NauticoShield from '../assets/nautico.svg';


interface TeamShieldsProps {
  selectedTeam: TeamType | null;
  onSelectTeam: (team: TeamType | null) => void;
}

const teams = [
  {
    id: 'sport' as TeamType,
    name: 'Sport',
    shield: SportShield,
    color: '#D3222A'
  },
  {
    id: 'santa' as TeamType,
    name: 'Santa Cruz',
    shield: SantaShield,
    color: '#FF0000'
  },
  {
    id: 'nautico' as TeamType,
    name: 'Náutico',
    shield: NauticoShield,
    color: '#FF0000'
  }
];

export function TeamShields({ selectedTeam, onSelectTeam }: TeamShieldsProps) {
  const handleTeamPress = (teamId: TeamType) => {
    if (selectedTeam === teamId) {
      onSelectTeam(null); // Desseleciona se clicar no mesmo time
    } else {
      onSelectTeam(teamId);
    }
  };

  return (
    <View style={styles.container}>
      {teams.map((team) => (
        <TouchableOpacity 
          key={team.id} 
          style={[
            styles.shieldContainer,
            selectedTeam === team.id && styles.selectedShield
          ]}
          onPress={() => handleTeamPress(team.id)}
          activeOpacity={0.7}
        >
          <team.shield 
            width={50}
            height={50}
            style={styles.shield}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  shieldContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#f8f8f8',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  selectedShield: {
    borderWidth: 2,
    borderColor: '#2ecc71',
    transform: [{ scale: 1.1 }],
  },
  shield: {
    width: 50,
    height: 50,
  },
}); 