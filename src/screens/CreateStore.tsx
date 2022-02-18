import { MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Modal } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ModalTest } from '../components/Modal'
import { Colors } from '../constants/Colors'

type Props = {}

export const CreateStore = (props: Props) => {
  const [text, onChangeText] = useState("Useless Text");
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [modalVisible, setModalVisible] = useState(true);  
  const [number, onChangeNumber] = useState();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <Text>CreateStore</Text> */}



        <View style={styles.inputWrapper}>
          <View style={styles.labelWrapper}>
            <Text style={styles.labelInput}>Business Name</Text>
            <Text style={styles.redAsterisk}>*</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={() => onChangeNumber}
            value={number}
            placeholder="Your Store name visible to Buyers"
            placeholderTextColor={Colors.grey}
          />
        </View>


        <View style={styles.inputWrapper}>
          <Text style={styles.labelInput}>Store details for Buyers</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => onChangeNumber}
            value={number}
            placeholder="Details important for buyers to know about you"
            placeholderTextColor={Colors.grey}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.labelInput}>Business Category</Text>

          {/* <ModalWrapper visible={modalVisible} style={}> */}

          <Pressable style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 }, styles.button
          ]}
            onPress={() => setModalVisible(!modalVisible)}
          >

            <Text>Beauty & Cosmetics</Text>
            <MaterialIcons name="keyboard-arrow-right" size={26} color={Colors.grey} />

          </Pressable>





        </View>



        {/* <Modal
          // animationType="slide"
          // transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >

          
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button2, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal> */}




        <ModalTest visible={modalVisible} toggleModal={() => setModalVisible(!modalVisible)} />
      </View>

    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputWrapper: {
    marginBottom: 15,
  },

  redAsterisk: {
    color: 'red'
  },

  labelWrapper: {
    flexDirection: 'row'
  },

  labelInput: {
    fontWeight: '900',
    marginBottom: 10,
  },
  input: {
    // backgroundColor: "lightblue",
    paddingVertical: 10,
    borderBottomColor: Colors.greyBorderColor,
    borderBottomWidth: 1,
    // width:'90%'
  },


  button: {
    borderBottomColor: Colors.greyBorderColor,
    borderBottomWidth: 1,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  modal: {
    height: '45%',
    alignSelf: 'flex-start',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonHide: {

  },



  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button2: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
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


})

