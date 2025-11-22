import React from "react";
import { StyleSheet, FlatList, View, Text, ScrollView } from "react-native";

export default function List() {
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
            <ScrollView>
                <Text>List</Text>
                {/* Flat list
                <FlatList
                    data={users}
                    renderItem={({ item }) => <Text style={styles.list}>{item.name}</Text>}
                    keyExtractor={item => item.id}
                /> */}
                <Text style={{ margin: 20 }}>Map List</Text>
                {
                    users.map((item) => {
                        return (
                            <Text key={item.id} style={styles.list}>{item.name}</Text>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        color: "red",
        backgroundColor: "yellow",
        margin: 10,
        padding: 10,
    }
})