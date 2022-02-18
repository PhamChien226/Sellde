import { Feather, MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';
import { ReactElement } from 'react';
import { Text, View, StyleSheet, Switch, Pressable } from 'react-native';
import { Colors, Sizes } from '../constants/Colors';

type ButtonBarProps = {
  label: string,
  extraInfo?: string,
  icon: ReactElement,
  handleOnPress?: () => {},
  isSwitch?: boolean,
  handleSwitch?: () => {},
}

export const ButtonBar = (props: ButtonBarProps) => {

  return (
    <Pressable style={styles.sectionItem} onPress={() => console.warn("onPress")}>

      <View style={styles.sectionIconWrapper}>
        {props.icon}
      </View>

      <View style={styles.sectionTextWrapper}>
        <Text style={styles.sectionLabel}>{props.label}</Text>
        {props.extraInfo ? <Text style={styles.sectionSmallText}>{props.extraInfo}</Text> : null}
      </View>

      {props.isSwitch ?
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          thumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
        // onValueChange={()=> }
        // value={false}
        />
        : <MaterialIcons name="keyboard-arrow-right" size={26} color={Colors.grey} />
      }

    </Pressable>
  );
};


const styles = StyleSheet.create({
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
    textAlign: 'center'
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
