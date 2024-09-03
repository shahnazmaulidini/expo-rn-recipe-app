import React from 'react';

import RecipeListScreen from './RecipeListScreen';
import ScanRecipeScreen from './ScanRecipeScreen';
import SavedRecipesScreen from './SavedRecipesScreen';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='RecipeListScreen' component={RecipeListScreen} options={{
                title: 'Recipes',
                tabBarLabel: 'Recipes',
                tabBarIcon: ({color, size, focused}) => (
                    <Ionicons
                    name={focused? "home-sharp" : "home-outline"}
                    size={size}
                    color={focused? "#8D4585" : "#808080"}
                    />
                ),
                tabBarActiveTintColor: '#8D4585', // Warna saat tab aktif
                tabBarInactiveTintColor: 'gray'  // Warna saat tab tidak aktif
            }}/>
            <Tab.Screen name='ScanRecipeScreen' component={ScanRecipeScreen} options={{
                title: 'Scan',
                tabBarLabel: 'Scan',
                tabBarIcon: ({color, size, focused}) => (
                    <Ionicons
                    name={focused? "barcode" : "barcode-outline"}
                    size={size}
                    color={focused? "#8D4585" : "#808080"}
                    />
                ),
                tabBarActiveTintColor: '#8D4585', // Warna saat tab aktif
                tabBarInactiveTintColor: 'gray'  // Warna saat tab tidak aktif
            }}/>
            <Tab.Screen name='SavedRecipesScreen' component={SavedRecipesScreen} options={{
                title: 'Saved',
                tabBarLabel: 'Saved',
                tabBarIcon: ({color, size, focused}) => (
                    <Ionicons
                    name={focused? "bookmark" : "bookmark-outline"}
                    size={size}
                    color={focused? "#8D4585" : "#808080"}
                    />
                ),
                tabBarActiveTintColor: '#8D4585', // Warna saat tab aktif
                tabBarInactiveTintColor: 'gray'  // Warna saat tab tidak aktif
            }}/>
        </Tab.Navigator>
    )
}
export default MainScreen;