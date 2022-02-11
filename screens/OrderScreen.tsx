import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { purpleDark,purpleLight } from '../constants/Colors';

interface OrderScreenProps {}

const OrderScreen = (props: OrderScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: purpleDark }}>
      <View style={{ flex:1,backgroundColor: purpleLight }}>
        <Text>OrderScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {}
});
