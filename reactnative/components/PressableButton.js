import React from "react";
import { StyleSheet,View,Text,Pressable } from "react-native";

export default function PressableButton(){
    return(
        <View style={{flex:1}}>
            <Text>
                Pressable Button
            </Text>
            <View style={styles.main}>
                <Pressable 
                style={{marginTop:10}}
                onPress={()=>alert("Hello")}
                onLongPress={()=>alert("Long press")}
                >
                    <Text style={styles.pressableBtn}>Button</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    pressableBtn:{
        backgroundColor:"blue",
        textAlign:"center",
        width:200,
        padding:20,
        color:"#fff",
        borderRadius:20
    }
})