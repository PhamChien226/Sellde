import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Colors, Sizes } from "../constants/Colors";

type Props = {
    visible: boolean,
    toggleModal: () => void,
    chooseCategory: (category: any) => void
    categories: any,
    categorySelected: any
}

// return category selected

export const ModalChooseCategory = ({ visible, toggleModal, categories, chooseCategory, categorySelected }: Props) => {

    const handleChooseCategory = (category: any) => {
        chooseCategory(category)
        toggleModal()
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                toggleModal();
            }} >
            <View style={styles.wrapperModalView}>


                <Pressable style={styles.buttonBackground} onPress={toggleModal} />

                <View style={styles.modalView}>
                    <View style={styles.headerModal}>
                        <View style={styles.line} />
                        <Text style={styles.textHeader}>Choose category</Text>
                    </View>

                    {categories.map((item: any) => {
                        const icon = categorySelected.id === item.id ? "circle-slice-8" : "circle-outline"

                        return <Pressable key={item.id} style={styles.wrapperOption}
                            onPress={() => handleChooseCategory(item)}
                        >
                            <Text style={styles.textOption}>{item.name}</Text>
                            <MaterialCommunityIcons name={icon} size={16} color={Colors.purpleDark} />
                        </Pressable>
                    })}

                    <View style={styles.wrapperButton}>
                        <Pressable style={[styles.button, styles.next]}>
                            <Text>Next</Text>
                        </Pressable>
                        <Pressable style={[styles.button, styles.cancel]} onPress={toggleModal}>
                            <Text>Cancel</Text>
                        </Pressable>
                    </View>
                </View>


            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    wrapperModalView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.2)',
    },

    modalView: {
        width: '100%',
        flex: 0.48,
        paddingHorizontal: 20,
        backgroundColor: "white",
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    buttonBackground: {
        flex: 0.52,
        width: '100%',
    },
    headerModal: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },

    line: {
        height: 5,
        width: 35,
        backgroundColor: "#000",
        borderRadius: 50,
        marginTop: 10,
    },
    textHeader: {
        fontSize: Sizes.header,
        marginTop: 12,
        fontWeight: '900',
    },


    wrapperOption: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginBottom: 10,
        borderBottomColor: Colors.greyBorderColor,
        borderBottomWidth: 1,
    },

    textOption: {
        fontWeight: '900',
        fontSize: Sizes.textMedium
    },

    wrapperButton: {
        flexDirection: 'row',
        // marginBottom: 25,
        flex: 1,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        alignSelf: "flex-end",
        // backgroundColor:"lightblue",
        paddingBottom: 25,
    },
    next: {
        backgroundColor: Colors.orange,
        color: 'white'
    },
    cancel: {
        // color: Colors.grey
    },


    button: {
        width: '48%',
        borderWidth: 1,
        borderColor: Colors.greyBorderColor,
        borderRadius: 5,
        paddingVertical: 15,
        // padding
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
