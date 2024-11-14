import { TeamType } from './team';

export type RootStackParamList = {
  Home: undefined;
  MainApp: undefined;
  StoryDetails: {
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
  };
  NextGames: { team: TeamType | null };
  Championships: { team: TeamType | null };
  News: { team: TeamType | null };
  Stats: { team: TeamType | null };
  Squad: { team: TeamType | null };
  History: { team: TeamType | null };
};