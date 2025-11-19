import React from 'react';
import { View , Text } from 'react-native';

export default function PropsPass(props){
    return (
        <View>
            <Text>{props.name}</Text>
            <Text>{props.email}</Text>
        </View>
    )
}