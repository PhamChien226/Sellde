import * as React from 'react';
import { ReactElement } from 'react';
import { Text, View, StyleSheet,  Dimensions } from 'react-native';
import { Colors, Sizes } from '../constants/Colors';

type ButtonBarProps = {
  key?: number,
  icon: ReactElement,
  total: number,
  label: string,

}

export const BoxOverview = (props: ButtonBarProps) => {

  return (
    <View key={props.key} style={styles.boxOverview}>
      <View style={styles.boxIcon}>
        {props.icon}
      </View>

      <Text style={styles.number}>{props.total}</Text>
      <Text style={styles.label}>{props.label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  boxOverview: {
    borderRadius: 10,
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.55,
    padding: 20,
    borderColor: Colors.gray,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginRight: 20,
    marginBottom: 10,
  },
  boxIcon: {
    backgroundColor: Colors.purpleLightest,
    height: 45,
    width: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -1
  },

  number: {
    fontSize: 35,
    fontWeight: '500'
  },
  label: {
    fontSize: Sizes.textLarge,
    color: Colors.gray,
    fontWeight: '100'

  }
})
