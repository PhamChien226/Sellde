import { Feather } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Sizes } from '../../constants/Colors';
import { ListTabsProducts } from './ListTabsProduct'

interface ProductsScreenProps { }

export const ProductsScreen = (props: ProductsScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.purpleDark }}>
      <View style={styles.container}>


        <View style={styles.homeHeader}>
          <View style={styles.boxIcon}>
            <Feather name="box" size={22} color={Colors.purpleDark} />
          </View>

          <View style={styles.bottomHeader}>
            <Text style={styles.textHeader}>Catalogue</Text>
            <View style={styles.shareButton}>
              <Text style={styles.textButton}>Add Product</Text>
            </View>
          </View>
        </View>

        <View style={styles.homeContent}>
          <ListTabsProducts />
        </View>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.purpleLight
  },
  homeHeader: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  homeContent: {
    flex: 2,
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  boxIcon: {
    height: 60,
    width: 60,
    backgroundColor: Colors.white,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },




  bottomHeader: {
    position: 'absolute',
    top: '50%',
    bottom: 15,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row'
  },

  shareButton: {
    backgroundColor: Colors.orange,
    height: 50,
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  textButton: {
    color: Colors.white,
    fontSize: Sizes.textMedium,
    fontWeight: 'bold'
  },

  textHeader: {
    fontSize: Sizes.header,
    color: Colors.white,
    marginLeft: 15,
  },
});
