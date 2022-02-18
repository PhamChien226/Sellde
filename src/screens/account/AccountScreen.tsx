import { Feather, FontAwesome, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonBar } from '../../components/ButtonBar';
import { Colors, Sizes } from '../../constants/Colors';

interface AccountScreenProps { }

export const AccountScreen = (props: AccountScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.purpleDark }}>
      <View style={styles.container}>


        <View style={styles.homeHeader}>
          <View style={styles.boxIcon}>
            <FontAwesome size={35} name="home" color={Colors.purpleLight} />
          </View>

          <View style={styles.shareButton}>
            <Text style={styles.textButton}>Update</Text>
          </View>
        </View>


        <View style={styles.homeContent}>
          <View style={styles.sectionWrapper}>
            <ButtonBar
              label="Store Status"
              extraInfo="Hide you store or pause your orders"
              icon={<Feather name="box" size={20} color={Colors.white} />}
            />
            <ButtonBar
              label="Payment preference"
              icon={<Feather name="box" size={20} color={Colors.white} />}
            />
          </View>

          <View style={styles.sectionWrapper}>
            <ButtonBar
              label="Delivery & Pick-up"
              icon={<Feather name="box" size={20} color={Colors.white} />}
            />
            <ButtonBar
              label="How to use app"
              icon={<Feather name="box" size={20} color={Colors.white} />}
            />
            <ButtonBar
              label="Support Buyer via Zalo"
              icon={<Feather name="box" size={20} color={Colors.white} />}
              isSwitch={true}
            />
            <ButtonBar
              label="Language"
              icon={<Feather name="box" size={20} color={Colors.white} />}
            />
          </View>
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
    backgroundColor: Colors.white,
    paddingHorizontal: 15,

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

  shareButton: {
    position: 'absolute',
    right: 0,
    bottom: 15,

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


  sectionWrapper: {
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    marginTop: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  sectionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 7
  },

  sectionIconWrapper: {
    backgroundColor: Colors.purpleLight,
    borderRadius: 50,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },


  sectionTextWrapper: {
    flex: 1,
    marginLeft: 10,
  },

  sectionLabel: {
    fontWeight: 'bold',
    color: Colors.purpleLight,
    fontSize: Sizes.textMedium,
  },

  sectionSmallText: {
    color: Colors.grey,
    fontSize: Sizes.textSmallest,
  }


});
