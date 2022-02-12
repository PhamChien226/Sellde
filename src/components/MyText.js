import * as React from 'react';
import { Text } from 'react-native';

export const MyText = (props) => {
    let { children } = props
    return  <Text {...props}>{children}</Text>
};


