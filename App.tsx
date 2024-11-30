import React from 'react';
import { PaperProvider } from 'react-native-paper';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <PaperProvider children={<AppNavigator />} />
  );
}
