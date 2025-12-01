import React from "react";
import { View,Button,Text,StyleSheet,TouchableHighlight } from "react-native";

export default function Buttons(){
    return(
        <View style={{margin:10}}>
            <Text>Styles on Button</Text>
            <Button title="Button"></Button>
            <TouchableHighlight style={{marginTop:10}}>
                <Text style={styles.btn1}>
                    Button
                </Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    btn1:{
        backgroundColor:"red",
        textAlign:"center",
        color:"#fff",
        fontSize:20,
        padding:5,
        borderRadius:10
    },
    btn2:{

    }
})