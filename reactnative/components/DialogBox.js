import React from "react";
import { StyleSheet, View, Text, Button, Modal } from "react-native";

export default function DialogBox() {
    const [open,close] = React.useState(false)
    return (
        <View style={styles.main}>
            <Text>
                DialogBox
            </Text>
            <Modal
            transparent={true}
            visible={open}
            animationType="slide"
            >
                <View style={styles.dialog}>
                    <View style={styles.box}>
                        <Text>
                            Hello!, This is a dialog box.
                        </Text>
                        <Button title="Close" onPress={()=>close(!open)}/>
                    </View>
                </View>
            </Modal>

            <View style={styles.container}>
                <Button title="Open" onPress={()=>close(!open)}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginBottom: 10
    },
    container: {
        flex: 1,
        justifyContent: "flex-end"
    },
    dialog:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    box:{
        gap:10,
        backgroundColor:"#fff",
        padding:50,
        borderRadius:20,
        shadowColor:"black",
        elevation:30
    }
})