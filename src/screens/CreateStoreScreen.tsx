import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons'

import { ModalChooseCategory } from '../components/ModalChooseCategory'
import { StepProgess } from '../components/StepProgess'
import { Colors } from '../constants/Colors'
import { pickImageFromCamera, pickImageFromGallery } from './imagePicker';
import { ModalPickImage } from '../components/ModalPickImage'


const categories = [
  { id: 1, name: "Beauty & Cosmetics" },
  { id: 2, name: "Fashion & Clothing" },
]


const widthScreen = Dimensions.get('window').width;
export const CreateStoreScreen = () => {
  // const [text, onChangeText] = useState("Useless Text");
  // const [selectedLanguage, setSelectedLanguage] = useState();
  const [modalCategoryVisible, setModalCategoryVisible] = useState(false);
  const [modalPickImageVisible, setModalPickImageVisible] = useState(false);
  const [number, onChangeNumber] = useState();
  const [categorySelected, setCategorySelected] = useState(categories[0])

  const onPressPickImage = () => {
    setModalPickImageVisible(!modalPickImageVisible)
  }

  const handleSelectGallery = async () => {
    setModalPickImageVisible(!modalPickImageVisible)

    const uriImage = await pickImageFromGallery()
    console.warn("uriImage", uriImage)

  }

  const handleTakePicture = async () => {
    setModalPickImageVisible(!modalPickImageVisible)

    const uriImage = await pickImageFromCamera()
    console.warn("uriImage", uriImage)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>

        <StepProgess />

        <Pressable onPress={onPressPickImage} style={styles.buttonImagePicker}>
          <Feather name="camera" size={24} color={Colors.grey} />

          <Pressable style={styles.wrapperIconPlus} onPress={onPressPickImage}>
            <AntDesign name="pluscircle" size={18} color={Colors.orange} />
          </Pressable>
        </Pressable>

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
            onPress={() => setModalCategoryVisible(!modalCategoryVisible)}
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
          visible={modalCategoryVisible}
          toggleModal={() => setModalCategoryVisible(!modalCategoryVisible)}
          categories={categories}
          chooseCategory={(item) => setCategorySelected(item)}
          categorySelected={categorySelected}
        />

        <ModalPickImage visible={modalPickImageVisible}
          toggleModal={() => setModalPickImageVisible(!modalPickImageVisible)}
          onSelectGallery={handleSelectGallery}
          onTakePicture={handleTakePicture}
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


  buttonImagePicker: {
    width: widthScreen * 0.4,
    height: widthScreen * 0.4,
    marginVertical: 30,
    borderColor: Colors.grey,
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },

  wrapperIconPlus: {
    position: 'absolute',
    bottom: -5,
    right: -9,
    backgroundColor: Colors.white,
    borderRadius: 50
  }

})

