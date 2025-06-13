import {
  createStaticNavigation,
} from '@react-navigation/native';
import BottomTabNavigator from '@/routers';

const StaticNavigation = createStaticNavigation(BottomTabNavigator);

export default function Root() {

  return (
    <StaticNavigation />
  );
}

