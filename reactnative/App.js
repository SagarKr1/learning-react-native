// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import UserData from './components/UserData'
import PropsPass from './components/PropsPass';
import InputBox from './components/InputBox';
import Form from './components/Form';
import React from 'react';

export default function App() {
  const [data, setData] = React.useState({
    name: "Sagar Kumar",
    email: "sagar@gmail.com"
  });

  const updateData = () => {
    setData({
      name: "Satish Kumar",
      email: "satish@gmail.com"
    });
    alert("Data updated");
  }
  return (
    <View style={styles.container}>
      <Form/>
      {/* <InputBox/> */}
      {/* <UserData/> */}
      {/* <PropsPass name={data.name} email={data.email} />
      <Button title='Update Info' onPress={updateData} /> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft:10,
    marginRight:10,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
