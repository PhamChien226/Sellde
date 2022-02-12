import * as React from 'react';
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';
import PagerView from 'react-native-pager-view';
// import { TabView, SceneMap } from 'react-native-pager-view';

interface TabViewProps { }



const TabView = (props: TabViewProps) => {
    return (
        <PagerView style={{ flex: 1 }} initialPage={0}>
            <View key="1">
                <Text>First page</Text>
            </View>
            <View key="2">
                <Text>Second page</Text>
            </View>
        </PagerView>
    );
};

export default TabView;

const styles = StyleSheet.create({
    container: {}
});
