import { MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ModalChooseCategory } from '../components/ModalChooseCategory'
import { StepProgess } from '../components/StepProgess'
import { Colors } from '../constants/Colors'

type Props = {}
const categories = [
  { id: 1, name: "Beauty & Cosmetics" },
  { id: 2, name: "Fashion & Clothing" },
]

export const CreateStoreScreen = (props: Props) => {
  // const [text, onChangeText] = useState("Useless Text");
  // const [selectedLanguage, setSelectedLanguage] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [number, onChangeNumber] = useState();
  const [categorySelected, setCategorySelected] = useState(categories[0])



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>

        {/* <View>
          <View></View>
        </View> */}



        <View style={{ height: 500, backgroundColor: Colors.white, paddingTop: 30 }}>
          <StepProgess />

          <Text>Image piker</Text>
        </View>


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

          <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }, styles.button]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textPlaceHolder}>{categorySelected.name}</Text>
            <MaterialIcons name="keyboard-arrow-right" size={26} color={Colors.grey} />
          </Pressable>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.labelInput}>Business Location</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => onChangeNumber}
            value={number}
            placeholder="Location"
            placeholderTextColor={Colors.grey}
          />
        </View>


        <ModalChooseCategory
          visible={modalVisible}
          toggleModal={() => setModalVisible(!modalVisible)}
          categories={categories}
          chooseCategory={(item) => setCategorySelected(item)}
          categorySelected={categorySelected}
        />
      </ScrollView>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingVertical: 10,
    borderBottomColor: Colors.greyBorderColor,
    borderBottomWidth: 1,
  },

  textPlaceHolder: {
    color: Colors.grey,

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
})

