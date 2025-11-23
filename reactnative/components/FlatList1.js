import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

export default function FlatList1() {
    const users = [
        {
            id: 1,
            name: "Sagar",
            email: "test@gmail.com"
        },
        {
            id: 2,
            name: "Sujit",
            email: "test@gmail.com"
        },
        {
            id: 3,
            name: "Shivam",
            email: "test@gmail.com"
        },
        {
            id: 4,
            name: "Amit",
            email: "test@gmail.com"
        },
        {
            id: 5,
            name: "Rahul",
            email: "test@gmail.com"
        },
        {
            id: 6,
            name: "Raju",
            email: "test@gmail.com"
        },
        {
            id: 7,
            name: "Amar",
            email: "test@gmail.com"
        },
        {
            id: 8,
            name: "Sagar",
            email: "test@gmail.com"
        },
        {
            id: 9,
            name: "Sujit",
            email: "test@gmail.com"
        },
        {
            id: 10,
            name: "Shivam",
            email: "test@gmail.com"
        },
        {
            id: 11,
            name: "Amit",
            email: "test@gmail.com"
        },
        {
            id: 12,
            name: "Rahul",
            email: "test@gmail.com"
        },
        {
            id: 13,
            name: "Raju",
            email: "test@gmail.com"
        },
        {
            id: 14,
            name: "Amar",
            email: "test@gmail.com"
        }
    ]
    return (
        <View>
            <Text>Flat List 1</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => {
                    return (
                        <UserComponent name={item.name} email={item.email}/>
                    )
                }}
            />
        </View>
    )
}

const UserComponent = ({name,email}) => {
    return (
        <View style={styles.box}>
            <Text style={styles.item}>{name}</Text>
            <Text style={styles.item}>{email}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        color: "red",
        flex: 1
    },
    box: {
        flexDirection: "row",
        flexWrap: "wrap",
        borderWidth: 1,
        borderColor: "black",
        marginTop: 10
    }
})