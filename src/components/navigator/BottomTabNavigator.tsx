import React, { FC } from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ACCOUNT_SCREEN, HOME_SCREEN, ORDER_SCREEN, PRODUCTS_SCREEN, ScreenTittle } from '../../routes';
import { Colors } from '../../constants/constant';

import { AccountScreen } from '../../screens/account/AccountScreen';
import { HomeScreen } from '../../screens/home/HomeScreen';
import { OrderScreen } from '../../screens/order/OrderScreen';
import { ProductsScreen } from '../../screens/products/ProductScreen';
import { CreateStoreScreen } from '../../CreateStoreScreen';
const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {

  return (
    <BottomTab.Navigator
      initialRouteName={HOME_SCREEN}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.purpleDark,
        tabBarStyle: { minHeight: 80, paddingTop: 10, paddingBottom: 5 },
        tabBarLabelStyle: { fontWeight: 'bold', fontSize: 14, },
        tabBarHideOnKeyboard: true,

        tabBarIcon: ({ focused, color }) => {
          return <TabBarIcon routeName={route.name} focused={focused} color={color} />;
        },
      })}
    >


      <BottomTab.Screen name={HOME_SCREEN} component={CreateStoreScreen} options={{ title: ScreenTittle[HOME_SCREEN] }} />
      <BottomTab.Screen name={ORDER_SCREEN} component={OrderScreen}
        options={{
          title: ScreenTittle[ORDER_SCREEN],
          tabBarBadge: 0,
          tabBarBadgeStyle: { backgroundColor: 'red', marginTop: -5, marginLeft: 5 },
        }}
      />
      <BottomTab.Screen name={PRODUCTS_SCREEN} component={ProductsScreen} options={{ title: ScreenTittle[PRODUCTS_SCREEN] }} />
      <BottomTab.Screen name={ACCOUNT_SCREEN} component={AccountScreen} options={{ title: ScreenTittle[ACCOUNT_SCREEN] }} />
    </BottomTab.Navigator>
  );
}

type TabBarIconProps = {
  routeName: string
  color: string;
  focused: boolean;
}

const TabBarIcon: FC<TabBarIconProps> = ({ color, focused, routeName }) => {
  const icons: any = {
    [HOME_SCREEN]: 'home',
    [PRODUCTS_SCREEN]: 'code',
    [ORDER_SCREEN]: 'code',
    [ACCOUNT_SCREEN]: 'user-circle-o',
  };


  return <View
    style={{
      backgroundColor: focused ? Colors.purpleLightest : '',
      height: '100%',
      width: 45,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <FontAwesome size={20} color={color} name={icons[routeName]} />
  </View>
};