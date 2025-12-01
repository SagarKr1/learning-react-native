import React from "react";
import { View,Text,Button } from "react-native";

export default function Toggle(){
    const [show,setShow] = React.useState(true);
    return(
        <View>
            <Text>Toggle : Show/Hide</Text>
            {
                show?<Comp/>:null
            }
            <Button title={show?"Hide":"Show"} onPress={()=>setShow(!show)}></Button>
        </View>
    )
}

const Comp = ()=>{
    return(
        <View>
            <Text style={{color:"green"}}>Show Component</Text>
        </View>
    )
}