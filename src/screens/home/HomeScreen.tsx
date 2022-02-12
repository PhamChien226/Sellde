import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withLayout } from '../../components/withLayout';
import { Colors, Sizes } from '../../constants/Colors';
import {HomeContent} from './HomeContent';

interface HomeScreenProps { }

export const HomeScreen = (props: HomeScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.purpleDark }}>
      <View style={styles.container}>

        <View style={styles.homeHeader}>
          <View style={styles.boxIcon}>
            <FontAwesome size={35} name="home" color={Colors.purpleLight} />
          </View>

          <View style={styles.bottomHeader}>
            <Text style={styles.text}>https://store.sellde.cloud</Text>
            <View style={styles.shareButton}>
              <Text style={styles.textButton}>Share</Text>
            </View>
          </View>
        </View>

        <View style={styles.homeContent}>
          <HomeContent />
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
  text: {
    color: Colors.white,
    marginLeft: 20,


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


});
