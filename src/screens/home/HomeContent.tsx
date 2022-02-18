import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions } from 'react-native'
import { BoxOverview } from '../../components/BoxOverview';
import { Colors, Sizes } from '../../constants/Colors';


const data: any = [
    {
        icon: <MaterialCommunityIcons name="clipboard-check-outline" size={20} color={Colors.purpleDark} />,
        total: 0,
        label: "Total View"
    },
    {
        icon: <Feather name="box" size={22} color={Colors.purpleDark} />,
        total: 0,
        label: "Total Completed"
    }
]

export const HomeContent = () => {

    return (
        <View>
            <View style={styles.section}>
                <Text style={styles.sectionLabel}>OverView</Text>
                <View style={styles.sectionTimeContainer}>
                    <Text style={styles.sectionTime}>Last week</Text>
                </View>
            </View>


            <FlatList
                data={data}
                horizontal={true}
                renderItem={({ item, index }) => (
                    <BoxOverview key={index} icon={item.icon} total={item.total} label={item.label} />
                )}
            />


            <Text style={styles.sectionLabel}>Active Orders</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 10,
        marginTop: 20,
    },
    sectionLabel: {
        fontSize: Sizes.textLarge,
        fontWeight: '700'
    },
    sectionTime: {
        fontSize: Sizes.textSmall,
        color: Colors.grey,
    },
    sectionTimeContainer: {
        paddingBottom: 3,
        borderBottomWidth: 1,
        borderBottomColor: Colors.grey
    },

    boxOverview: {
        borderRadius: 10,
        borderWidth: 1,
        width: Dimensions.get('window').width * 0.55,
        padding: 20,
        borderColor: Colors.grey,
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
        color: Colors.grey,
        fontWeight: '100'

    }
});
