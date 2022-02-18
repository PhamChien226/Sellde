import * as React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { TabView } from 'react-native-tab-view';
import { TabBarTabView } from '../../components/TabBarTabView'


const renderScene = ({ route }: any) => {

  switch (route.key) {
    case 'all':
      return <View><Text>Product</Text></View>;
    case 'pending':
      return <View><Text>Category</Text></View>;
    case 'delivered':
      return <View><Text>Extra Product</Text></View>;
  }
};


export const ListTabsProducts = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const routes = [
    { key: 'product', title: 'Products' },
    { key: 'category', title: 'Category' },
    { key: 'extra_product', title: 'Extra Product' },
  ];

  const handleOnPressTab = (index: number) => {
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
