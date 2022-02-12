import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions } from 'react-native'
import { Colors, Sizes } from '../constants/Colors';

interface HomeContentProps { }


const HomeContent = (props: HomeContentProps) => {

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

    return (
        <View >
            <View style={styles.section}>
                <Text style={styles.sectionLabel}>OverView</Text>
                <View style={styles.sectionTimeContainer}>
                    <Text style={styles.sectionTime}>Last week</Text>
                </View>
            </View>


            <FlatList
                data={data}
                horizontal={true}
                renderItem={({ item, index }) => {
                    return (
                        <View key={index} style={styles.boxOverview}>
                            <View style={styles.boxIcon}>
                                {item.icon}
                            </View>

                            <Text style={styles.number}>{item.total}</Text>
                            <Text style={styles.label}>{item.label}</Text>
                        </View>
                    )
                }}
            />


            <Text style={styles.sectionLabel}>Active Orders</Text>
        </View>
    )
};

export default HomeContent;

const styles = StyleSheet.create({
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 10,
        marginTop:20,
    },
    sectionLabel: {
        fontSize: Sizes.textLarge,
        fontWeight: '700'
    },
    sectionTime: {
        fontSize: Sizes.textSmall,
        color: Colors.gray,
    },
    sectionTimeContainer: {
        paddingBottom: 3,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray
    },

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
});
