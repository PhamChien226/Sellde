import React from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Colors, Sizes } from "../constants/Colors";

type Props = {
    visible: boolean,
    toggleModal: () => void,
    onSelectGallery: () => void
    onTakePicture: () => void
}


export const ModalPickImage = ({ visible, toggleModal, onSelectGallery, onTakePicture }: Props) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                toggleModal();
            }}
        >
            <View style={styles.wrapperModalView}>
                <Pressable style={styles.buttonBackground} onPress={toggleModal} />

                <View style={styles.modalView}>
                    <View style={styles.line} />

                    <Pressable style={styles.button} onPress={onSelectGallery}>
                        <Text style={styles.textButton}>Select from Gallery</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={onTakePicture}>
                        <Text style={styles.textButton}>Take Picture</Text>
                    </Pressable>

                    <View style={styles.wrapperCancel}>
                        <Pressable style={[styles.button, styles.cancel]} onPress={toggleModal}>
                            <Text style={styles.textCancel}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>

            </View>
        </Modal>
    );
};

const modalHeight = 0.4;
const styles = StyleSheet.create({
    wrapperModalView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.2)',
    },

    modalView: {
        width: '100%',
        flex: modalHeight,
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
        flex: (1 - modalHeight),
        width: '100%',
    },
    headerModal: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },

    line: {
        height: 5,
        width: 35,
        backgroundColor: "#000",
        borderRadius: 50,
        marginTop: 10,
        alignSelf: 'center',
        marginBottom: 20,
    },

    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: Colors.orange,
        borderRadius: 10,
    },
    textButton: {
        fontSize: Sizes.textMedium,
        fontWeight: 'bold',
        color: Colors.white
    },

    wrapperCancel: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%'
    },
    cancel: {
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.greyLighter
    },

    textCancel: {
        fontSize: Sizes.textMedium,
        color: Colors.black,
        fontWeight: '600',

    },
});
