import { StyleSheet, View,} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';

import  IndexScreen  from './screens/IndexScreen';
import MealsOverViewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'pacifico': require('./assets/fonts/Pacifico-Regular.ttf'),
    'comicneue': require('./assets/fonts/ComicNeue-Regular.ttf'),
  });
  if (!fontsLoaded) {
    console.log('some fonts are not loaded!')
  }

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='All recipes' component={IndexScreen} />
          <Stack.Screen name='Recipes' component={MealsOverViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
