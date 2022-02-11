import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { purpleDark, purpleLight } from '../constants/Colors';

interface HomeScreenProps { }

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: purpleDark }}>
      <View style={{ flex: 1, backgroundColor: purpleLight }}>
        <Text>HomeScreensfasdlfha</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {}
});
