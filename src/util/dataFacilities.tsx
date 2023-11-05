import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from './constants';

export const icons = [
  {
    name: 'Wifi',
    icon: <Icon name="wifi" size={22} color={COLORS.textPrimary} />,
  },
  {
    name: 'Mini Bar',
    icon: <Icon name="cafe-outline" size={22} color={COLORS.textPrimary} />,
  },
  {
    name: 'Parking',
    icon: (
      <IconMaterial name="local-parking" size={22} color={COLORS.textPrimary} />
    ),
  },
  {
    name: 'Gym',
    icon: <Icon name="barbell-outline" size={22} color={COLORS.textPrimary} />,
  },
  {
    name: 'Laundry',
    icon: (
      <IconMaterial
        name="local-laundry-service"
        size={22}
        color={COLORS.textPrimary}
      />
    ),
  },
];
