import React from "react";
import { StyleSheet,View,Text } from "react-native";

export default function ResponsiveLayout(){
    return(
        <View style={styles.resp}>
            <View style={{flex:1,backgroundColor:"red"}}>
                <Text style={{color:"#fff"}}>Responsive Layout</Text>
            </View>
            <View style={{flex:2,backgroundColor:"blue",flexDirection:"row"}}>
                <View style={{flex:1,backgroundColor:"pink"}}></View>
                <View style={{flex:1,backgroundColor:"#0bb9f3ff"}}></View>
                <View style={{flex:1,backgroundColor:"#e6f608ff"}}></View>
            </View>
            <View style={{flex:1,backgroundColor:"green"}}></View>


        </View>
    )
}

const styles=StyleSheet.create({
    resp:{
        flex:1,
        backgroundColor:"green"
    },
    container:{
        flex:1,
    }
})