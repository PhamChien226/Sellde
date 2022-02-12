import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Sizes } from '../constants/Colors';
import TabView from './TabView';


interface OrderScreenProps { }

const OrderScreen = (props: OrderScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.purpleDark }}>
      <View style={styles.container}>

        <View style={styles.homeHeader}>
          <View style={styles.boxIcon}>
            <MaterialCommunityIcons size={25} name="clipboard-text-outline" color={Colors.purpleLight} />
          </View>
          <Text style={styles.textHeader}>All Order (0)</Text>
        </View>

        <View style={styles.homeContent}>
          {/* <HomeContent/> */}

          <View style={styles.searchBox} >
            <MaterialIcons name="search" size={24} color={Colors.purpleLight} />
            <TextInput
              style={styles.input}
              onChangeText={() => { }}
              value={''}
              placeholder="Oder ID, mobile number or name..."
              placeholderTextColor={Colors.gray}
            />

          </View>

          <TabView/>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;

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
    paddingTop: 20,
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

  textHeader: {
    fontSize: Sizes.header,
    color: Colors.white,
    position: 'absolute',
    bottom: 20,
    left: 15,
  },


  searchBox: {
    flexDirection:'row',
    // backgroundColor:'lightgray',
    width: '100%',
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 5,

    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.20,
    // shadowRadius: 1.41,
// 
    // elevation: 2,

  },
  input: {
    marginLeft:5,
    width:'100%',
    // padding:10,
    // height: 40,
    // margin: 12,
    // borderWidth: 1,
    // padding: 10,
  },

});
