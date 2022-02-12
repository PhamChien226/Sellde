import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Colors} from '../constants/Colors';

interface AccountScreenProps { }

const AccountScreen = (props: AccountScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.purpleDark }}>
    <View style={styles.container}>
      <View style={styles.homeHeader}>
        <View style={styles.boxIcon}>
          <FontAwesome size={35} name="home" color={Colors.purpleLight} />
        </View>


      </View>

      <View style={styles.homeContent}>
        {/* <HomeContent/> */}

      </View>
    </View>
  </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
   container:{
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
    paddingTop:20,
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
  
});
