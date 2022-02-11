import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { purpleDark, purpleLight } from '../constants/Colors';

interface AccountScreenProps { }

const AccountScreen = (props: AccountScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: purpleDark }}>
      <View style={{ flex: 1, backgroundColor: purpleLight }}>
        <Text>AccountScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {}
});
