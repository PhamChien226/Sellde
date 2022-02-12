import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

export const withLayout = (Component) => (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.purpleDark }}>
            <View style={styles.container}>
                <Component {...props} />
            </View>
        </SafeAreaView>
    )
}

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
})
