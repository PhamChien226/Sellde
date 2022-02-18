import { Feather, MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';
import { ReactElement } from 'react';
import { Text, View, StyleSheet, Switch, Pressable, Dimensions, ScrollView } from 'react-native';
import { Colors, Sizes } from '../constants/Colors';

type TabBarTabViewProps = {
  routes?: any,
  handleOnPressTab: (index:number) => void,
  tabActive: number,

}


export const TabBarTabView: React.FC<TabBarTabViewProps> = ({ routes, handleOnPressTab, tabActive }) => {
  return (
    <View style={styles.tabBar}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}>

        {routes.map((route: any, index: number) => {
          let activeColor = tabActive === index ? Colors.purpleLight : 'white'

          return (
            <View style={styles.tabItemWrap} >

              <Pressable
                style={styles.tabItem}
                onPress={() => handleOnPressTab(index)}>
                <Text style={styles.title}>{route.title}</Text>
              </Pressable>
              <View style={[styles.footer, { backgroundColor: activeColor }]} />
            </View>
          )
        })}

      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 0.5,
  },



  tabItemWrap: {
    width: 150,
  },
  tabItem: {
    paddingVertical: 13,
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    fontWeight: '700',
    color: Colors.purpleDark
  },
  footer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: 2.5,
    width: '100%',
    backgroundColor: Colors.purpleLight

  },
});