import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CollectorPointsScreen from '../screens/collect-points/CollectPoints';
import CollectorScreen from '../screens/collector/CollectorScreen';
import HomeScreen from '../screens/home/HomeScreen';
import RecyclingInfoScreen from '../screens/recycling-info/RecyclingInfo';
import ResidentScreen from '../screens/resident/ResidentScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'Bem-vindo(a) ao App Recicl@!',
            headerStyle: {
              backgroundColor: '#009d02',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Resident"
          component={ResidentScreen}
          options={{
            headerTitle: 'Área para Moradores',
            headerStyle: {
              backgroundColor: '#98d071',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#333',
          }}
        />
        <Stack.Screen
          name="Collector"
          component={CollectorScreen}
          options={{
            headerTitle: 'Área para Coletadores',
            headerStyle: {
              backgroundColor: '#102b77',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="CollectorPoints"
          component={CollectorPointsScreen}
          options={{
            headerTitle: 'Pontos de Coleta',
            headerStyle: {
              backgroundColor: '#98d071',
            },
            headerTintColor: '#333',
          }}
        />
        <Stack.Screen
          name="RecyclingInfo"
          component={RecyclingInfoScreen}
          options={{
            headerTitle: 'Tudo sobre Reciclagem',
            headerStyle: {
              backgroundColor: '#98d071',
            },
            headerTintColor: '#333',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
