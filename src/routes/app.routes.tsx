import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { StoryDetails } from '../screens/StoryDetails';
import HomeScreen from '../screens/HomeScreen';
import { NextGamesScreen } from '../screens/NextGamesScreen';
import { ChampionshipsScreen } from '../screens/ChampionshipsScreen';
import { NewsScreen } from '../screens/NewsScreen';
import { StatsScreen } from '../screens/StatsScreen';
import { SquadScreen } from '../screens/SquadScreen';
import { HistoryScreen } from '../screens/HistoryScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="StoryDetails" component={StoryDetails} />
      <Stack.Screen name="NextGames" component={NextGamesScreen} />
      <Stack.Screen name="Championships" component={ChampionshipsScreen} />
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="Stats" component={StatsScreen} />
      <Stack.Screen name="Squad" component={SquadScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
    </Stack.Navigator>
  );
} 