import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../Screens/WelcomeScreen';
import CatalogScreen from '../Screens/CatalogScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false, // Oculta el encabezado de la pestaña
                tabBarStyle: {
                    backgroundColor: '#6200EE',
                    paddingBottom: 5,
                },
                tabBarLabelStyle: {
                    color: 'white',
                },
            }}
        >
            <Tab.Screen name="Welcome" component={WelcomeScreen} />
            <Tab.Screen name="Catalog" component={CatalogScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
