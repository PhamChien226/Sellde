import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigator } from './BottomTabNavigator';
const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          // headerTintColor: Colors.primary,
          headerBackTitleVisible: false
        }}>

        <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
