import * as React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { TabView } from 'react-native-tab-view';
import { TabBarTabView } from '../../components/TabBarTabView'


const renderScene = ({ route }: any) => {

  switch (route.key) {
    case 'all':
      return <View><Text>render All</Text></View>;
    case 'pending':
      return <View><Text>render Pending</Text></View>;
    case 'delivered':
      return <View><Text>render Delivered</Text></View>;
  }
};


export const ListTabsView = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const routes = [
    { key: 'all', title: 'All (0)' },
    { key: 'pending', title: 'Pending (0)' },
    { key: 'delivered', title: 'Delivered (0)' },
  ];

  const handleOnPressTab = (index: number) => {
    console.warn("onPress")
    setIndex(index);
  }


  return (
    <TabView
      renderTabBar={props => {
        const tabActive = props.navigationState.index;
        return <TabBarTabView routes={routes} tabActive={tabActive} handleOnPressTab={handleOnPressTab} />
      }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};
