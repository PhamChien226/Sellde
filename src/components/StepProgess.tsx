import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StepIndicator from "react-native-step-indicator";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Colors, Sizes } from '../constants/constant';

type Props = {}

const labels = [
    "Create Store",
    "Add Product",
    "Share",
];
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 25,

    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 0,
    stepStrokeWidth: 0,

    stepStrokeFinishedColor: Colors.purpleDark,
    stepStrokeUnFinishedColor: Colors.grey,

    separatorFinishedColor: Colors.purpleDark,
    separatorUnFinishedColor: Colors.grey,

    // stepIndicatorFinishedColor: Colors.white,
    // stepIndicatorUnFinishedColor: Colors.white,
    // stepIndicatorCurrentColor: Colors.white,

    stepIndicatorFinishedColor: 'transparent',
    stepIndicatorUnFinishedColor: 'transparent',
    stepIndicatorCurrentColor: 'transparent',

    labelColor: Colors.grey,
    labelSize: Sizes.textSmall,
    currentStepLabelColor: Colors.black
};


const renderStepIndicator = (position: any, stepStatus: any) => {
    const isFinished = stepStatus === "finished" || stepStatus === "current"

    return (
        <View style={styles.wrapperIconIndicator}>
            {isFinished ?
                <MaterialCommunityIcons name="check-circle" size={22} color={Colors.purpleDark} />
                :
                <MaterialCommunityIcons name="checkbox-blank-circle" size={14} color={Colors.grey} />
            }
        </View>
    )
}

export const StepProgess = (props: Props) => {
    return (
        <StepIndicator
            stepCount={3}
            customStyles={customStyles}
            currentPosition={0}
            labels={labels}
            renderStepIndicator={({ position, stepStatus }) => renderStepIndicator(position, stepStatus)}
        />
    )
}
const styles = StyleSheet.create({
    wrapperIconIndicator: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
