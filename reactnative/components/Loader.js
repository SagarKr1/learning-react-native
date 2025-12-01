import React from "react";
import { StyleSheet,View,Text,ActivityIndicator } from "react-native";

export default function Loader(){
    return(
        <View style={{flex:1}}>
            <Text>Loader</Text>
            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                <ActivityIndicator size={200} color={"red"}/>
            </View>
        </View>
    )
}