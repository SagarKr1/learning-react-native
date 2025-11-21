import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";


export default function Form() {
    const [data, setData] = React.useState({
        name: "",
        email: "",
        age: "",
        phone: ""
    })
    const [display,setDisplay] = React.useState(false);

    const details = (key, val) => {
        setData(prev => ({
            ...prev,
            [key]: val
        }));
    }
    return (
        <View>
            <Text>Input Form</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={data.name}
                onChangeText={(val) => details("name", val)}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={data.email}
                onChangeText={(val) => details("email", val)}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter your age"
                value={data.age}
                onChangeText={(val) => details("age", val)}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                value={data.phone}
                onChangeText={(val) => details("phone", val)}
            />
            <View style={styles.btn}>
                <Button color={'blue'} title="Clear" onPress={() => setData(
                    {
                        name: "",
                        email: "",
                        age: "",
                        phone: ""
                    }
                )} />
            </View>

            <View style={styles.btn}>
                <Button color={'red'} title="Display" onPress={() => setDisplay(!display)} />
            </View>

            {
                display?
                <View style={{ marginTop: 10 }}>
                <Text>Your Info</Text>
                <Text>Name : {data.name}</Text>
                <Text>email : {data.email}</Text>
                <Text>phone : {data.phone}</Text>
                <Text>age : {data.age}</Text>

            </View>:
                <View style={{ marginTop: 10 }}>
                    <Text>No Info</Text>
            </View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10
    },
    btn: {
        marginTop: 10
    }
})