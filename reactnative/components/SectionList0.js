import React from "react";
import { StyleSheet, View, Text, SectionList } from "react-native";

export default function SectionList0() {
    const users = [
        {
            id: 1,
            name: "Sagar Kumar",
            data: ["JavaScript", "Node Js", "AWS"]
        },
        {
            id: 2,
            name: "Sujit Kumar",
            data: ["JavaScript", "Node Js", "AWS"]
        },
        {
            id: 3,
            name: "Raju Kumar",
            data: ["JavaScript", "Node Js", "AWS"]
        },
        {
            id: 4,
            name: "Rahul Kumar",
            data: ["JavaScript", "Node Js", "AWS"]
        },
        {
            id: 5,
            name: "Ajit Kumar",
            data: ["JavaScript", "Node Js", "AWS"]
        }
    ]

    return (
        <View>
            <Text>Section List 0</Text>
            <SectionList
                sections={users}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item}</Text>
                        </View>
                    )
                }}

                renderSectionHeader={({ section: { name } }) => <Text style={{color:"red",marginTop:10}}>{name}</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {

    },
    box: {

    }
})