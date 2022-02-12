import * as React from 'react';
import { Text, View, StyleSheet, useWindowDimensions, Pressable, ScrollView } from 'react-native';
import { TabView } from 'react-native-tab-view';
import { Colors, Sizes } from '../../constants/Colors';


const renderScene = ({ route, jumpTo }) => {

  switch (route.key) {
    case 'all':
      return <View><Text>render All</Text></View>;
    case 'pending':
      return <View><Text>render Pending</Text></View>;
    case 'delivered':
      return <View><Text>render Delivered</Text></View>;
  }
};

const renderTabBar = ({ routes, handleOnPressTab, tabActive }) => {
  return (
    <View style={styles.tabBar}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        {
          routes.map((route, index) => {
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
          })
        }
      </ScrollView>
    </View>
  )
}


export const ListTabsView = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const routes = [
    { key: 'all', title: 'All (0)' },
    { key: 'pending', title: 'Pending (0)' },
    { key: 'delivered', title: 'Delivered (0)' },

  ];


  const handleOnPressTab = (index) => {
    setIndex(index);
  }


  return (
    <TabView
      renderTabBar={props => {
        const tabActive = props.navigationState.index;
        return renderTabBar({ routes, tabActive, handleOnPressTab })
      }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};


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
