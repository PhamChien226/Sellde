import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Sizes } from '../../constants/Colors';
import { ListTabsView } from '../products/ListTabsView';



const OrderScreen = () => {
  const [input,setInput] = React.useState()


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.purpleDark }}>
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-100}
        style={styles.container}      
      > */}
      <View style={styles.container}>

        <View style={styles.homeHeader}>
          <View style={styles.boxIcon}>
            <MaterialCommunityIcons size={25} name="clipboard-text-outline" color={Colors.purpleLight} />
          </View>
          <Text style={styles.textHeader}>All Order (0)</Text>
        </View>

        <View style={styles.homeContent}>
          <View style={styles.searchBox} >
            <MaterialIcons name="search" size={24} color={Colors.purpleLight} />
            <TextInput
              style={styles.input}
              onChangeText={() => setInput}
              value={input}
              placeholder="Oder ID, mobile number or name..."
              placeholderTextColor={Colors.gray}
            />
          </View>
          <ListTabsView />
        </View>
        
      </View>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView >
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
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  homeContent: {
    flex: 2,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  boxIcon: {
    height: 60,
    width: 60,
    backgroundColor: Colors.white,
    borderRadius: 5,
    paddingHorizontal: 15,
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
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 20,
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 5,

  },
  input: {
    marginLeft: 5,
    width: '100%',
  },

});
