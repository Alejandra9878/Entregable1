import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import CatalogScreen from '../Screens/CatalogScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome"> {/* Cambia 'Home' a 'Welcome' */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Catalog" component={CatalogScreen} /> {/* Agrega la pantalla Catalog */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
