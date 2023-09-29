import { StatusBar  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './src/pages/tab/Tab';

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar backgroundColor="#161730"/>
        <TabNavigator />
      </NavigationContainer>
  );
}
