import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";


export default function InputBox() {
    const [name, setName] = React.useState({
        name: ""
    });
    const input = (text) => {
        setName({ name: text });
    };
    return (
        <View>
            <Text>Input Box</Text>
            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your name"
                    value={name.name}
                    onChangeText={(Text) => input(Text)}
                />
                <Text>Your name is {name.name}</Text>
            </View>
            <Button title="Clear" onPress={() => setName({
                name: ""
            })} />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: "black",
        borderWidth: 2,
        width: 300,
        borderRadius: 10,
        padding: 10
    }
})