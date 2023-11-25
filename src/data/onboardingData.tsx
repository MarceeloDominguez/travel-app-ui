import {Onboarding} from '../interface/onboardingInterface';

export const onboardingData: Onboarding[] = [
  {
    id: 1,
    image: require('../assets/onboarding/onboarding-1.png'),
    title: 'Exlore Destinations',
    description:
      'Discover the places for your trip in the world and feel great.',
    backgroundColor: '#82A0D8',
  },
  {
    id: 2,
    image: require('../assets/onboarding/onboarding-2.png'),
    title: 'Choose a Destination',
    description:
      'Select a place for your trip easily and know the exact cost of the tour.',
    backgroundColor: '#FFCF96',
  },
  {
    id: 3,
    image: require('../assets/onboarding/onboarding-3.png'),
    title: 'Fly to Desitination',
    description:
      'Finally, get ready for the tour and go to your desire destination.',
    backgroundColor: '#1BBA85',
  },
];
