import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

import Home from './screens/Home';
import Subject from './screens/Subject';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F7F7F9',
  },
}

const App = () => {
  const [loaded] = useFonts({
    'SourceSansPro-Regular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
    'SourceSansPro-Light': require('./assets/fonts/SourceSansPro-Light.ttf'),
    'SourceSansPro-Bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
    'SourceSansPro-SemiBold': require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
    'SourceSansPro-Black': require('./assets/fonts/SourceSansPro-Black.ttf'),
  });

  if (!loaded) return null;

  return (
    <>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ 
              tabBarLabel: 'Domov',
              title: 'Domov',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Subject"
            component={Subject}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;