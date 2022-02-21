import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons'

import { ModalChooseCategory } from './components/ModalChooseCategory'
import { StepProgess } from './components/StepProgess'
import { Colors } from './constants/constant'
import { pickImageFromCamera, pickImageFromGallery } from './imagePicker';
import { ModalPickImage } from './components/ModalPickImage'
import { useAppContext } from './App.Provider'


const categories = [
  { id: 1, name: "Beauty & Cosmetics" },
  { id: 2, name: "Fashion & Clothing" },
]


const data = {
  uriImage: "",
  businessName: "",
  storeDetail: "",
  businessCategory: "",
  businessLocation: ""
}


const widthScreen = Dimensions.get('window').width;
export const CreateStoreScreen = () => {
  const [businessName, setBusinessName] = useState<string>()
  const [storeDetail, setStoreDetail] = useState<string>()
  const [businessLocation, setBusinessLocation] = useState<string>()
  const [businessCategory, setBusinessCategory] = useState(categories[0])
  
  const [isAbleSubmit, setIsAbleSubmit] = useState(false)
  const [modalCategoryVisible, setModalCategoryVisible] = useState(false);
  const [modalPickImageVisible, setModalPickImageVisible] = useState(false);

  const appContext = useAppContext();


  const onPressPickImage = () => {
    setModalPickImageVisible(!modalPickImageVisible)
  }

  const handleSelectGallery = async () => {
    setModalPickImageVisible(!modalPickImageVisible)

    const uriImage = await pickImageFromGallery()
  }

  const handleTakePicture = async () => {
    setModalPickImageVisible(!modalPickImageVisible)

    const uriImage = await pickImageFromCamera()
  }

  const handleSubmit = () => {
    if (!verify(businessName)) {
      // console.warn("error")
      return
    }

    const newData = {
      ...data,
      businessName,
      storeDetail,
      businessLocation,
      businessCategory,
    }


    console.warn('new Data', newData)
  }

  const verify = (arg: any) => {
    if (!arg) return false

    return true
  }


  const handleChangeBusinessName = (text: any) => {
    if (!verify(text)) {
      setIsAbleSubmit(false)
    } else {
      if (!isAbleSubmit) setIsAbleSubmit(true)
      setBusinessName(text)
    }
  }



  /**
   * my idea is
   * - when you submit 
   * - we vetify and we save info to reducer
   * 
   * add isAbleSubmit
   * 
   * 
   * 
   * 
   * save text
   * save img
   * save option
   * 
   * maybe verify
   * 
   * add next button
   * 
   * i want to use custom hook
   *  to separate logic and ui
   * 
   * it's st like
   * pure component
   * just take st and return st
   * 
   * create store reutnr store infomation
   * 
   * const [] = useToggleModal
   * => bull shit
   * 
   * 
   * i think we create a array
   * so we can save
   * yeah
   * that's right
   * 
   * 
   * it's the gobal property
   * so maybe we can add some redux or st like that
   * 
   * like
   * i'm in homeScreen and i want store's Avatar
   * 
   * ok sure
   * great
   * 
   * 
   * first we use context
   * and then we use redux
   * just
   * hone our skill
   * 
   */
console.warn("appContext",appContext)

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
            onChangeText={handleChangeBusinessName}
            value={businessName}
            placeholder="Your Store name visible to Buyers"
            placeholderTextColor={Colors.grey}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.labelInput}>Store details for Buyers</Text>
          <TextInput
            style={styles.input}
            onChangeText={setStoreDetail}
            value={storeDetail}
            placeholder="Details important for buyers to know about you"
            placeholderTextColor={Colors.grey}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.labelInput}>Business Category</Text>

          <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }, styles.button]}
            onPress={() => setModalCategoryVisible(!modalCategoryVisible)}
          >
            <Text style={styles.textPlaceHolder}>{businessCategory.name}</Text>
            <MaterialIcons name="keyboard-arrow-right" size={26} color={Colors.grey} />
          </Pressable>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.labelInput}>Business Location</Text>
          <TextInput
            style={styles.input}
            onChangeText={setBusinessLocation}
            value={businessLocation}
            placeholder="Location"
            placeholderTextColor={Colors.grey}
          />
        </View>
      </ScrollView>


      <View style={styles.wrapperSummit}>
        <Pressable onPress={handleSubmit} disabled={!isAbleSubmit}
          style={[styles.submitButton,
          { backgroundColor: isAbleSubmit ? Colors.orange : Colors.greyBorderColor }]}
        >
          <Text style={[styles.submitText, { color: isAbleSubmit ? Colors.white : Colors.greyLighter }]}>
            Next
          </Text>
        </Pressable>
      </View>

      <ModalChooseCategory
        visible={modalCategoryVisible}
        toggleModal={() => setModalCategoryVisible(!modalCategoryVisible)}
        categories={categories}
        chooseCategory={setBusinessCategory}
        categorySelected={businessCategory}
      />

      <ModalPickImage visible={modalPickImageVisible}
        toggleModal={() => setModalPickImageVisible(!modalPickImageVisible)}
        onSelectGallery={handleSelectGallery}
        onTakePicture={handleTakePicture}
      />
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
  },

  wrapperSummit: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    padding: 20
  },
  submitButton: {
    height: 50,
    // backgroundColor: Colors.greyBorderColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  submitText: {
    color: Colors.greyLighter,
    fontWeight: 'bold'
  }
})

