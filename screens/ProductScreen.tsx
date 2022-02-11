import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { purpleDark, purpleLight } from '../constants/Colors';

interface ProductsScreenProps { }

const ProductsScreen = (props: ProductsScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: purpleDark }}>
      <View style={{ flex: 1, backgroundColor: purpleLight }}>
        <Text>ProductsScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {}
});
