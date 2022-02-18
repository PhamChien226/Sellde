/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { FC } from 'react';
import { ColorSchemeName,  View } from 'react-native';

import { Colors } from '../constants/Colors';
import {AccountScreen} from '../screens/account/AccountScreen';
import {HomeScreen} from '../screens/home/HomeScreen';
import {OrderScreen} from '../screens/order/OrderScreen';
import {ProductsScreen} from '../screens/products/ProductScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../../types';
import LinkingConfiguration from './routes';
import { CreateStore } from '../screens/CreateStore';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (

    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      {/* <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();



function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.purpleDark,
        tabBarStyle: { minHeight: 80, paddingTop: 10, paddingBottom: 5 },

        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 14,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <BottomTab.Screen
        name="Home"
        // component={HomeScreen}
        component={CreateStore}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          headerShown: false,
          tabBarIconStyle: {
            backgroundColor: 'lightgrey',
          },

          tabBarIcon: ({ color, focused }) => <TabBarIcon name="home" color={color} active={focused} />,
          // headerRight: () => (
          //   <Pressable
          //     onPress={() => navigation.navigate('Modal')}
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1,
          //     })}>
          //     <FontAwesome
          //       name="info-circle"
          //       size={25}
          //       // color={Colors[colorScheme].text}
          //       style={{ marginRight: 15 }}
          //     />
          //   </Pressable>
          // ),
        })}
      />
      <BottomTab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          headerShown: false,
          title: 'Order',
          tabBarBadge: 0,
          tabBarBadgeStyle: {
            backgroundColor: 'red',
            marginTop: -5,
            marginLeft: 5,
          },

          tabBarIcon: ({ color, focused }) => <TabBarIcon name="code" color={color} active={focused} />,
        }}
      />

      <BottomTab.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          headerShown: false,
          title: 'Products',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="code" color={color} active={focused} />,
        }}
      />

      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="user-circle-o" color={color} active={focused} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

type TabBarIconProps = {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  active?: boolean;
}
// function TabBarIcon(props: TabBarIconProps) {
const TabBarIcon: FC<TabBarIconProps> = (props) => {
  return <View
    style={{
      backgroundColor: props.active ? Colors.purpleLightest : '',
      height: '100%',
      width: 45,

      borderRadius: 50,
      // flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <FontAwesome size={20} {...props} />
  </View>

}
