import {ImageSourcePropType} from 'react-native';

export interface Onboarding {
  id: number;
  image: ImageSourcePropType;
  title: string;
  description: string;
  backgroundColor: string;
}
