import React from "react";
import { StyleSheet,View,Text } from "react-native";

export default function Grid(){
    const users = [
        {
            id: 1,
            name: "Sagar"
        },
        {
            id: 2,
            name: "Sujit"
        },
        {
            id: 3,
            name: "Shivam"
        },
        {
            id: 4,
            name: "Amit"
        },
        {
            id: 5,
            name: "Rahul"
        },
        {
            id: 6,
            name: "Raju"
        },
        {
            id: 7,
            name: "Amar"
        },
        {
            id: 8,
            name: "Sagar"
        },
        {
            id: 9,
            name: "Sujit"
        },
        {
            id: 10,
            name: "Shivam"
        },
        {
            id: 11,
            name: "Amit"
        },
        {
            id: 12,
            name: "Rahul"
        },
        {
            id: 13,
            name: "Raju"
        },
        {
            id: 14,
            name: "Amar"
        }
    ]
    return (
        <View>
            <Text>Grid Layout</Text>
            <View style={styles.mainLayout}>
                {
                    users.map((item)=>{
                        return(
                            <Text key={item.id} style={styles.text}>{item.name}</Text>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    mainLayout:{
        flex:1,
        gap:10,
        flexDirection:"row",
        flexWrap:"wrap"
    },
    text:{
        color:"red",
        width:100,
        height:100,
        textAlign:"center",
        textAlignVertical: 'center',
        borderWidth:2,
        borderColor:"black",
        borderRadius:10
    }
})