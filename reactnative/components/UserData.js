import { View, Text,Button,StyleSheet } from 'react-native';
import React from 'react';
import styles from '../styles/style';

export default function UserData (){
    const [data,setData] = React.useState({
        Name:"Sagar Kumar",
        Email:"sag@gmail.com",
        Phone:"9090909090"
    })
    const fruit =(val)=>{
        setData({
        Name:"Sagar",
        Email:"sag197@gmail.com",
        Phone:"9876543210"
    })
        alert(val);
    }
    return (
        <View>
            <Text style={{fontSize:25}}>User Details</Text>
            <Text style={{color:"red"}}>Name : {data.Name}</Text>
            <Text style={css.email}>Email : {data.Email}</Text>
            <Text style={styles.text}>Phone : {data.Phone}</Text>
            <Button title='Hello' onPress={()=>fruit("Info change!")} />
        </View>
    )
}

const css = StyleSheet.create({
    email:{
        color:"red",
        backgroundColor:"black"
    }
})