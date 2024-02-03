import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../common/interfaces/navigations.ts';
import {SCREENS} from '../common/interfaces/enums.ts';
import {HomeScreen} from '../screens/HomeScreen';
import {InfoScreen} from '../screens/InfoScreen';

export const Navigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREENS.INFO} component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
