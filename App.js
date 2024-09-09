import { StyleSheet, View,} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';

import  IndexScreen  from './screens/IndexScreen';
import MealsOverViewScreen from './screens/MealsOverviewScreen';
import Meal from './screens/Meal';

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
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: 'crimson' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: 'pink' }
        }}>
          <Stack.Screen
          name='All recipes'
          component={IndexScreen}
          options={{
            title: 'All categories',

          }}
          />
          <Stack.Screen
          name='Recipes'
          component={MealsOverViewScreen} 
          />
          <Stack.Screen name='Meal' component={Meal}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
